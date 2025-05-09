import Generos from "../models/Generos.js";




class GenerosController {
  static getAllGeneros = async (req, res) => {
    const OBJGeneros = new Generos();
    const generos = await OBJGeneros.getAll();
    res.json(generos);
  }
  static createGeneros = async (req, res) => {
    try {
      const { genero } = req.body;
      const OBJGeneros = new Generos();
      const geneross = await OBJGeneros.create(genero);
      res.status(201).json(geneross);
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  static actualizarGeneros = async (req, res) => {
    const { id } = req.params;
    const { genero } = req.body;
    try {
      const OBJGeneros = new Generos();
      const geneross = await OBJGeneros.update(genero, id);
      res.json(geneross);
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  static actualizarParcialGeneros= async (req, res) => {
    const {id} = req.params;
    const campos = req.body;
    try {
      const OBJGeneros = new Generos();
      const geneross = await OBJGeneros.updateParcial(id,campos);
      res.json(geneross);
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  static eliminarGeneros = async (req, res)=>{
    const {id} = req.params;
    try {
      const OBJGeneros = new Generos();
      const geneross = await OBJGeneros.eliminar(id);
      res.status(200).json(geneross);
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
    
  }
}

export default GenerosController;