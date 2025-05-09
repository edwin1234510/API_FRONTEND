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
}

export default CiudadesServicio;