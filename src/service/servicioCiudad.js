import Ciudades from "../models/Ciudades.js";

class CiudadesServicio {

  static async getCiudades() {
    try {
      const ciudadesInstancia = new Ciudades();
      const ciudades = await ciudadesInstancia.getAll();
      if (ciudades.length === 0) {
        return {
          error: true,
          code: 404,
          message: "No hay ciudades encontradas",
        }
      }
      return {
        error: false,
        code: 200,
        message: "Ciudades obtenidas correctamente",
        data: ciudades,
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Erros al obtener las ciudades",
      }
    }
  }
  static async getCiudaDById(id) {
    try {
      const ciudadesInstancia = new Ciudades();
      const ciudades = await ciudadesInstancia.getById(id);
      if (ciudades.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Ciudad no encontrada",
        }
      }
      const usuarios = await ciudadesInstancia.usuarios(id);
      ciudades.usuarios = usuarios;
      return {
        error: false,
        code: 200,
        message: "Ciudad obtenida correctamento",
        data: ciudades
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener la ciudad",
      }
    }
  }
  static async createCiudaD(ciudad_nombre) {
    try {
      const ciudadesInstancia = new Ciudades();
      const ciudades = await ciudadesInstancia.create(ciudad_nombre);
      if (ciudades === null) {
        return {
          error: true,
          code: 400,
          message: "Error al crear la ciudad",
        }
      }
      return {
        error: false,
        code: 200,
        message: "Ciudad creada corectamente",
        data: ciudades,
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener la ciudad",
      }
    }
  }
  static async updateCiudaD(id, campos) {
    try {
      const ciudadesInstancia = new Ciudades();
      const ciudadesExis = await ciudadesInstancia.getById(id);
      if(ciudadesExis.length === 0){
        return{
          error: true,
          code: 404,
          message: "Ciudad no encontrada",
        }
      }
      const ciudades = await ciudadesInstancia.update(id,campos);
      if (ciudades === null) {
        return {
          error: true,
          code: 400,
          message: "Error al actualizar la ciudad",
        }
      }
      return {
        error: false,
        code: 200,
        message: "Ciudad creada corectamente",
        data: ciudades,
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener la ciudad",
      }
    }
  }
  static async deleteCiudaD(id){
    try {
      const ciudadesInstancia = new Ciudades();
      const ciudadesExis = await ciudadesInstancia.getById(id);
      if(ciudadesExis.length === 0){
        return{
          error: true,
          code: 404,
          message: "Ciudad no encontrada",
        }
      }
      const usuarios = await ciudadesInstancia.usuarios(id);
      if(usuarios.length > 0){
        return{
          error: true,
          code: 400,
          message: "No se puede eliminar la ciudad, tiene usuarios asociados",
        }
      }
      const rta = await ciudadesInstancia.eliminar(id);
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
        message: "Ciudad eliminada correctamente",
        data: ciudadesExis,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error interno al eliminar la ciudad",
      };
    }
  }
}

export default CiudadesServicio;