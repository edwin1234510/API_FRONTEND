import { ResponseProvider } from "../providers/ResponseProvider.js";
import LenguajesServicio from "../service/servicioLenguaje.js";


class LenguajesController {
  static getAllLenguajes = async (req, res) => {
    try {
      const response = await LenguajesServicio.getLenguajes();
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
  static getLenguajesById = async (req, res) => {
    const { id } = req.params;
    try {
      const response = await LenguajesServicio.getLenguajeSById(id);
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
  static createLenguajes = async (req, res) => {
    const { lenguaje } = req.body;
    try {
      const response = LenguajesServicio.createLenguajeS(lenguaje);
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
  static actualizarLenguajes = async (req, res) => {
    const { id } = req.params;
    const campos = req.body;
    try {
      const lenguaje = await LenguajesServicio.updateLenguajeS(id,campos);
      if(lenguaje.error){
        ResponseProvider.error(
          res,
          lenguaje.message,
          lenguaje.code
        );
      }
      ResponseProvider.success(
        res,
        lenguaje.data,
        lenguaje.message,
        lenguaje.code
      )
    } catch (error) {
      ResponseProvider.error(res, "Error al interno en el servidor", 500);
    }
  }
  static eliminarLenguajes = async (req, res)=>{
    const { id } = req.params;
    try {
      const response = await LenguajesServicio.deleteLenguajes(id);
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

export default LenguajesController;