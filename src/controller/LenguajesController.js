import Lenguajes from "../models/Lenguajes.js";



class LenguajesController {
  static getAllLenguajes = async (req, res) => {
    const OBJLenguajes = new Lenguajes();
    const lenguajes = await OBJLenguajes.getAll();
    res.json(lenguajes);
  }
  static createLenguajes = async (req, res) => {
    try {
      const { lenguaje } = req.body;
      const OBJLenguajes = new Lenguajes();
      const lenguajess = await OBJLenguajes.create(lenguaje);
      res.status(201).json(lenguajess);
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  static actualizarLenguajes = async (req, res) => {
    const { id } = req.params;
    const { lenguaje } = req.body;
    try {
      const OBJLenguajes = new Lenguajes();
      const lenguajess = await OBJLenguajes.update(lenguaje, id);
      res.json(lenguajess);
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  static actualizarParcialLenguajes= async (req, res) => {
    const {id} = req.params;
    const campos = req.body;
    try {
      const OBJLenguajes = new Lenguajes();
      const lenguajess = await OBJLenguajes.updateParcial(id,campos);
      res.json(lenguajess);
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  static eliminarLenguajes = async (req, res)=>{
    const {id} = req.params;
    try {
      const OBJLenguajes = new Lenguajes();
      const lenguajess = await OBJLenguajes.eliminar(id);
      res.status(200).json(lenguajess);
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
    
  }
}

export default LenguajesController;