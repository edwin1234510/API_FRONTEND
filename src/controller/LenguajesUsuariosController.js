import LenguajeUsuariosServicio from "../service/servicioLenguajeUsuario.js";
import { ResponseProvider } from "../providers/ResponseProvider.js";


class LenguajesUsuariosController {
  static getAllLenguajeUsuarios = async (req, res) => {
    try {
      const response = await LenguajeUsuariosServicio.getLenguajeUsuarios();
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
      const response = await LenguajeUsuariosServicio.getLenguajeUsuariosById(id);
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
  static createLenguajeUsuarios = async (req, res) => {
    const { id_usuario,id_lenguaje } = req.body;
    try {
      const response = LenguajeUsuariosServicio.createLenguajeUsuarioS(id_usuario,id_lenguaje );
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
  static actualizarLenguajeUsuarios= async (req, res) => {
    const { id } = req.params;
    const campos = req.body;
    try {
      const lenguaje = await LenguajeUsuariosServicio.updateLenguajeUsuarioS(id,campos);
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
  static eliminarLenguajeUsuarios = async (req, res)=>{
    const {id} = req.params;
    try {
      const response = await LenguajeUsuariosServicio.deleteLenguajeUsuarioS(id);
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

export default LenguajesUsuariosController;