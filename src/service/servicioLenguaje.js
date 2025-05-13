import Lenguajes from "../models/Lenguajes.js";

class LenguajesServicio {

  static async getLenguajes() {
    try {
      const lenguajeInstancia = new Lenguajes();
      const lenguajes = await lenguajeInstancia.getAll();
      if (lenguajes.length === 0) {
        return {
          error: true,
          code: 404,
          message: "No hay lenguajes encontrados",
        }
      }
      return {
        error: false,
        code: 200,
        message: "Lenguajes obtenidas correctamente",
        data: lenguajes,
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Erros al obtener los lenguajes",
      }
    }
  }
  static async getLenguajeSById(id) {
    try {
      const lenguajeInstancia = new Lenguajes();
      const lenguajes = await lenguajeInstancia.getById(id);
      if (lenguajes.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Lenguaje no encontrada",
        }
      }
      const LenUsuarios = await lenguajeInstancia.LenguajeUsuarios(id);
      lenguajes.LenUsuarios = LenUsuarios;
      return {
        error: false,
        code: 200,
        message: "Lenguaje obtenida correctamento",
        data: lenguajes
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener el lenguaje",
      }
    }
  }
  static async createLenguajeS(lenguaje) {
    try {
      const lenguajeInstancia = new Lenguajes();
      const lenguajes = await lenguajeInstancia.create(lenguaje);
      if (lenguajes === null) {
        return {
          error: true,
          code: 400,
          message: "Error al crear el lenguaje",
        }
      }
      return {
        error: false,
        code: 200,
        message: "Lenguaje creada corectamente",
        data: lenguajes,
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener el Lenguajes",
      }
    }
  }
  static async updateLenguajeS(id, campos) {
    try {
      const lenguajeInstancia = new Lenguajes();
      const lenguajesExis = await lenguajeInstancia.getById(id);
      if(lenguajesExis.length === 0){
        return{
          error: true,
          code: 404,
          message: "Lenguaje no encontrada",
        }
      }
      const lenguajes = await lenguajeInstancia.update(id,campos);
      if (lenguajes === null) {
        return {
          error: true,
          code: 400,
          message: "Error al actualizar el lenguaje",
        }
      }
      return {
        error: false,
        code: 200,
        message: "lenguaje creada corectamente",
        data: lenguajes,
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener el lenguaje",
      }
    }
  }
  static async deleteLenguajes(id){
    try {
      const lenguajeInstancia = new Lenguajes();
      const lenguajeExis = await lenguajeInstancia.getById(id);
      if(lenguajeExis.length === 0){
        return{
          error: true,
          code: 404,
          message: "Lenguaje no encontrada",
        }
      }
      const lenguajes = await lenguajeInstancia.LenguajeUsuarios(id);
      if(lenguajes.length > 0){
        return{
          error: true,
          code: 400,
          message: "No se puede eliminar el lenguaje, tiene usuarios asociados",
        }
      }
      const rta = await lenguajeInstancia.eliminar(id);
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
        message: "Lenguaje eliminada correctamente",
        data: lenguajeExis,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error interno al eliminar el lenguajes",
      };
    }
  }
}

export default LenguajesServicio;