import Usuarios from "../models/Usuarios.js";

class UsuariosServicio {

  static async getUsuarios() {
    try {
      const UsuariosInstancia = new Usuarios();
      const usuarios = await UsuariosInstancia.getAll();
      if (usuarios.length === 0) {
        return {
          error: true,
          code: 404,
          message: "No hay usuarios encontrados",
        }
      }
      return {
        error: false,
        code: 200,
        message: "Usuarios obtenidas correctamente",
        data: usuarios,
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Erros al obtener los usuarios",
      }
    }
  }
  static async getUsuarioSById(id) {
    try {
      const UsuariosInstancia = new Usuarios();
      const usuarios = await UsuariosInstancia.getById(id);
      if (usuarios.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Usuarios no encontrada",
        }
      }
      const IdUsuarios = await UsuariosInstancia.LenguajeUsuarios(id);
      usuarios.Lenguaje_Usuario = IdUsuarios;
      return {
        error: false,
        code: 200,
        message: "Usuarios obtenida correctamento",
        data: usuarios
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener el usuario",
      }
    }
  }
  static async createUsuarioS(documento,nombre, apellido, telefono, contrasena, id_genero, id_ciudad) {
    try {
      const UsuariosInstancia = new Usuarios();
      const usuarios = await UsuariosInstancia.create(documento,nombre, apellido, telefono, contrasena, id_genero, id_ciudad);
      if (usuarios === null) {
        return {
          error: true,
          code: 400,
          message: "Error al crear el usuario",
        }
      }
      return {
        error: false,
        code: 200,
        message: "Usuario creada corectamente",
        data: usuarios,
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener el usuario",
      }
    }
  }
  static async updateUsuarioS(id, campos) {
    try {
      const UsuariosInstancia = new Usuarios();
      const usuariosExis = await UsuariosInstancia.getById(id);
      if(usuariosExis.length === 0){
        return{
          error: true,
          code: 404,
          message: "Usuario no encontrada",
        }
      }
      const usuario = await UsuariosInstancia.update(id,campos);
      if (usuario === null) {
        return {
          error: true,
          code: 400,
          message: "Error al actualizar el usuario",
        }
      }
      return {
        error: false,
        code: 200,
        message: "Usuario creada corectamente",
        data: usuario,
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener el usuario",
      }
    }
  }
  static async deleteUsuarioS(id){
    try {
      const UsuariosInstancia = new Usuarios();
      const usuariosExis = await UsuariosInstancia.getById(id);
      if(usuariosExis.length === 0){
        return{
          error: true,
          code: 404,
          message: "Usuario no encontrada",
        }
      }
      const usuarios = await UsuariosInstancia.LenguajeUsuarios(id);
      if(usuarios.length > 0){
        return{
          error: true,
          code: 400,
          message: "No se puede eliminar el usuario porque tiene lenguajes asociados. Elimine primero las relaciones en Usuarios_Lenguajes.",
        }
      }
      const rta = await UsuariosInstancia.eliminar(id);
      if(rta.error){
        return{
          error: true,
          code: 400,
          message: rta.mensaje,
        }
      }
      return {
        error: false,
        code: 200,
        message: "Usuarios eliminada correctamente",
        data: usuariosExis,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error interno al eliminar el usuario",
      };
    }
  }
}

export default UsuariosServicio;