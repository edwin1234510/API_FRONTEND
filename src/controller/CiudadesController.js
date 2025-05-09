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
    const { ciudad_nombre } = req.body;
    try {
      const OBJCiudad = new Ciudades();
      const ciudades = await OBJCiudad.update(ciudad_nombre, id);
      res.json(ciudades);
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  static actualizarParcialCiudad = async (req, res) => {
    const { id } = req.params;
    const campos = req.body;
    try {
      const OBJCiudad = new Ciudades();
      const ciudades = await OBJCiudad.updateParcial(id, campos);
      res.json(ciudades);
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  static eliminarCiudad = async (req, res) => {
    const { id } = req.params;
    try {
      const OBJCiudad = new Ciudades();
      const ciudades = await OBJCiudad.eliminar(id);
      res.status(200).json(ciudades);
    } catch (error) {
      res.status(500).json({ error: error.message })
    }

  }
}

export default CiudadesController;