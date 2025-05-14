import LenguajeUsuarios from "../models/LenguajesUsuarios.js"


class LenguajeUsuariosServicio {

  static async getLenguajeUsuarios() {
    try {
      const LenguajeUsuariosInstancia = new LenguajeUsuarios();
      const lenguajeUsuarios = await LenguajeUsuariosInstancia.getAll();
      if (lenguajeUsuarios.length === 0) {
        return {
          error: true,
          code: 404,
          message: "No hay lenguaje usuario encontrados",
        }
      }
      return {
        error: false,
        code: 200,
        message: "lenguaje usuarios obtenidas correctamente",
        data: lenguajeUsuarios,
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Erros al obtener los lenguaje Usuarios",
      }
    }
  }
  static async getLenguajeUsuariosById(id) {
    try {
      const LenguajeUsuariosInstancia = new LenguajeUsuarios();
      const lenguajeUsuarios = await LenguajeUsuariosInstancia.getById(id);
      if (lenguajeUsuarios.length === 0) {
        return {
          error: true,
          code: 404,
          message: "lenguaje usuarios no encontrada",
        }
      }
      //const IdlenguajeUsuarios = await LenguajeUsuariosInstancia.LenguajeUsuariosID(id);
      //lenguajeUsuarios.Lenguaje_Usuario = IdlenguajeUsuarios;
      return {
        error: false,
        code: 200,
        message: "lenguaje usuarios obtenida correctamento",
        data: lenguajeUsuarios
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener el lenguaje usuarios",
      }
    }
  }
  static async createLenguajeUsuarioS(id_usuario,id_lenguaje) {
    try {
      const LenguajeUsuariosInstancia = new LenguajeUsuarios();
      const lenguajeUsuarios = await LenguajeUsuariosInstancia.create(id_usuario,id_lenguaje);
      if (lenguajeUsuarios === null) {
        return {
          error: true,
          code: 400,
          message: "Error al crear el lenguaje usuario",
        }
      }
      return {
        error: false,
        code: 200,
        message: "lenguaje usuario creada corectamente",
        data: lenguajeUsuarios,
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener el usuario",
      }
    }
  }
  static async updateLenguajeUsuarioS(id, campos) {
    try {
      const LenguajeUsuariosInstancia = new LenguajeUsuarios();
      const LenguajeUsuariosExis = await LenguajeUsuariosInstancia.getById(id);
      if(LenguajeUsuariosExis.length === 0){
        return{
          error: true,
          code: 404,
          message: "Lenguaje usuario no encontrada",
        }
      }
      const lenguajeUsuarios = await LenguajeUsuariosInstancia.update(id,campos);
      if (lenguajeUsuarios === null) {
        return {
          error: true,
          code: 400,
          message: "Error al actualizar el Lenguaje usuario",
        }
      }
      return {
        error: false,
        code: 200,
        message: "Lenguaje usuario creada corectamente",
        data: lenguajeUsuarios,
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener el Lenguaje usuario",
      }
    }
  }
  static async deleteLenguajeUsuarioS(id){
    try {
      const LenguajeUsuariosInstancia = new LenguajeUsuarios();
      const LenguajeUsuariosExis = await LenguajeUsuariosInstancia.getById(id);
      if(LenguajeUsuariosExis.length === 0){
        return{
          error: true,
          code: 404,
          message: "Lenguaje usuario no encontrada",
        }
      }
      const rta = await LenguajeUsuariosInstancia.eliminar(id);
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
        message: "Lenguaje usuario eliminada correctamente",
        data: LenguajeUsuariosExis,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error interno al eliminar el Lenguaje usuario",
      };
    }
  }
}

export default LenguajeUsuariosServicio;