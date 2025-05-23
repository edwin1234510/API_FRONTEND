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
      const usuario = await UsuariosInstancia.getById(id);
      if (!usuario) {
        return {
          error: true,
          code: 404,
          message: "Usuario no encontrado",
        };
      }
      const genero = await UsuariosInstancia.getGeneroById(usuario.id_genero);
      const ciudad = await UsuariosInstancia.getCiudadById(usuario.id_ciudad);
      usuario.genero = genero;
      usuario.ciudad = ciudad;
      return {
        error: false,
        code: 200,
        message: "Usuario obtenido correctamente",
        data: usuario,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener el usuario",
      };
    }
  }
  static async createUsuarioS(documento, nombre, apellido, telefono, contrasena, id_genero, id_ciudad) {
    try {
      const UsuariosInstancia = new Usuarios();
      const usuarios = await UsuariosInstancia.create(documento, nombre, apellido, telefono, contrasena, id_genero, id_ciudad);
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
      if (usuariosExis.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Usuario no encontrada",
        }
      }
      const usuario = await UsuariosInstancia.update(id, campos);
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
  static async deleteUsuarioS(id) {
    try {
      const UsuariosInstancia = new Usuarios();
      const usuariosExis = await UsuariosInstancia.getById(id);
      if (usuariosExis.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Usuario no encontrada",
        }
      }
      const rta = await UsuariosInstancia.eliminar(id);
      if (rta.error) {
        return {
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