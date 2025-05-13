import Generos from "../models/Generos.js";



class GenerosServicio {

  static async getGeneros() {
    try {
      const generoInstancia = new Generos();
      const generos = await generoInstancia.getAll();
      if (generos.length === 0) {
        return {
          error: true,
          code: 404,
          message: "No hay generos encontradas",
        }
      }
      return {
        error: false,
        code: 200,
        message: "Generos obtenidas correctamente",
        data: generos,
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Erros al obtener los generos",
      }
    }
  }
  static async getGeneroSById(id) {
    try {
      const generosInstancia = new Generos();
      const generos = await generosInstancia.getById(id);
      if (generos.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Genero no encontrada",
        }
      }
      const usuarios = await generosInstancia.usuarios(id);
      generos.usuarios = usuarios;
      return {
        error: false,
        code: 200,
        message: "Genero obtenida correctamento",
        data: generos
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener el genero",
      }
    }
  }
  static async createGeneroS(genero) {
    try {
      const generosInstancia = new Generos();
      const generos = await generosInstancia.create(genero);
      if (generos === null) {
        return {
          error: true,
          code: 400,
          message: "Error al crear el genero",
        }
      }
      return {
        error: false,
        code: 200,
        message: "Genero creada corectamente",
        data: generos,
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener el genero",
      }
    }
  }
  static async updateGeneroS(id, campos) {
    try {
      const generosInstancia = new Generos();
      const generosExis = await generosInstancia.getById(id);
      if(generosExis.length === 0){
        return{
          error: true,
          code: 404,
          message: "Genero no encontrada",
        }
      }
      const generos = await generosInstancia.update(id,campos);
      if (generos === null) {
        return {
          error: true,
          code: 400,
          message: "Error al actualizar el genero",
        }
      }
      return {
        error: false,
        code: 200,
        message: "Genero creada corectamente",
        data: generos,
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener el genero",
      }
    }
  }
  static async deleteGeneros(id){
    try {
      const generosInstancia = new Generos();
      const generosExis = await generosInstancia.getById(id);
      if(generosExis.length === 0){
        return{
          error: true,
          code: 404,
          message: "Genero no encontrada",
        }
      }
      const usuarios = await generosInstancia.usuarios(id);
      if(usuarios.length > 0){
        return{
          error: true,
          code: 400,
          message: "No se puede eliminar el genero, tiene usuarios asociados",
        }
      }
      const rta = await generosInstancia.eliminar(id);
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
        message: "Genero eliminada correctamente",
        data: generosExis,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error interno al eliminar el lenguaje",
      };
    }
  }
}

export default GenerosServicio;