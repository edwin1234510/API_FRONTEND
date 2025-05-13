import { ResponseProvider } from "../providers/ResponseProvider.js";
import CiudadesServicio from "../service/servicioCiudad.js";




class CiudadesController {
  static getAllCiudades = async (req, res) => {
    try {
      const response = await CiudadesServicio.getCiudades();
      if (response.error) {
        return ResponseProvider.error(
          res,
          response.message,
          response.code
        );
      } else {
        return ResponseProvider.success(
          res,
          response.data,
          response.message,
          response.code,
        );
      }
    } catch (error) {
      ResponseProvider.error(res, "Error al interno del servidor", 500);
    }
  }
  static getCiudadById = async (req, res) => {
    const { id } = req.params;
    try {
      const response = await CiudadesServicio.getCiudaDById(id);
      if (response.error) {
        return ResponseProvider.error(
          res,
          response.message,
          response.code,
        );
      } else {
        return ResponseProvider.success(
          res,
          response.data,
          response.message,
          response.code
        );
      }
    } catch (error) {
      ResponseProvider.error(res, "Error al interno del servidor", 500);
    }
  }



  static createCiudad = async (req, res) => {
    const { ciudad_nombre } = req.body;
    try {
      const response = CiudadesServicio.createCiudaD(ciudad_nombre);
      if (response.error) {
        return ResponseProvider.error (
          res,
          response.message,
          response.code,
        );
      } else {
        return ResponseProvider.success(
          res,
          response.data,
          response.message,
          response.code
        );
      }
    } catch (error) {
      ResponseProvider.error(res, "Error al interno del servidor", 500);
    }
  }
  static actualizarCiudad = async (req, res) => {
    const { id } = req.params;
    const campos = req.body;
    try {
      const ciudad = await CiudadesServicio.updateCiudaD(id,campos);
      if(ciudad.error){
        ResponseProvider.error(
          res,
          ciudad.message,
          ciudad.code
        );
      }
      ResponseProvider.success(
        res,
        ciudad.data,
        ciudad.message,
        ciudad.code
      )
    } catch (error) {
      ResponseProvider.error(res, "Error al interno en el servidor", 500);
    }
  }
  static eliminarCiudad = async (req, res) => {
    const { id } = req.params;
    try {
      const response = await CiudadesServicio.deleteCiudaD(id);
      if(response.error){
        ResponseProvider.error(
          res,
          response.message,
          response.code
        );
      }else{
        ResponseProvider.success(
          res,
          response.data,
          response.message,
          response.code
        );
      }
    } catch (error) {
      ResponseProvider.error(res, "Error al interno en el servidor", 500);
    }

  }
}

export default CiudadesController;