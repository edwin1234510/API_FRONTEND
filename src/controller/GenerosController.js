import { ResponseProvider } from "../providers/ResponseProvider.js";
import GenerosServicio from "../service/servicioGenero.js";


class GenerosController {
  static getAllGeneros = async (req, res) => {
    try {
      const response = await GenerosServicio.getGeneros();
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
  static getGeneroById = async (req, res) => {
    const { id } = req.params;
    try {
      const response = await GenerosServicio.getGeneroSById(id);
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
  static createGenero = async (req, res) => {
    const { genero } = req.body;
    try {
      const response = GenerosServicio.createGeneroS(genero);
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
  static actualizarGeneros = async (req, res) => {
    const { id } = req.params;
    const campos = req.body;
    try {
      const genero = await GenerosServicio.updateGeneroS(id,campos);
      if(genero.error){
        ResponseProvider.error(
          res,
          genero.message,
          genero.code
        );
      }
      ResponseProvider.success(
        res,
        genero.data,
        genero.message,
        genero.code
      )
    } catch (error) {
      ResponseProvider.error(res, "Error al interno en el servidor", 500);
    }
  }
  static eliminarGeneros = async (req, res)=>{
    const { id } = req.params;
    try {
      const response = await GenerosServicio.deleteGeneros(id);
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

export default GenerosController;