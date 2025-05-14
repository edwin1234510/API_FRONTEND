import { ResponseProvider } from "../providers/ResponseProvider.js";
import UsuariosServicio from "../service/servicioUsuarios.js";


class UsuariosController {
  static getAllUsuarios = async (req, res) => {
    try {
      const response = await UsuariosServicio.getUsuarios();
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
      const response = await UsuariosServicio.getUsuarioSById(id);
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
  static createUsuarios = async (req, res) => {
    const { documento,nombre, apellido, telefono, contrasena, id_genero, id_ciudad} = req.body;
    try {
      const response = UsuariosServicio.createUsuarioS(documento,nombre, apellido, telefono, contrasena, id_genero, id_ciudad);
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
  static actualizarUsuarios= async (req, res) => {
    const { id } = req.params;
    const campos = req.body;
    try {
      const lenguaje = await UsuariosServicio.updateUsuarioS(id,campos);
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
  static eliminarUsuarios = async (req, res)=>{
    const {id} = req.params;
    try {
      const response = await UsuariosServicio.deleteUsuarioS(id);
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

export default UsuariosController;