import LenguajeUsuarios from "../models/LenguajesUsuarios.js";


class LenguajesUsuariosController {
  static getAllLenguajeUsuarios = async (req, res) => {
    const OBJLenguajeUsuarios = new LenguajeUsuarios();
    const lenguajeUsuarios = await OBJLenguajeUsuarios.getAll();
    res.json(lenguajeUsuarios);
  }
  static createLenguajeUsuarios = async (req, res) => {
    try {
      const { id_usuario,id_lenguaje } = req.body;
      const OBJLenguajeUsuarios = new LenguajeUsuarios();
      const lenguajeUsuarios = await OBJLenguajeUsuarios.create(id_usuario,id_lenguaje);
      res.status(201).json(lenguajeUsuarios);
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  static actualizarLenguajeUsuarios= async (req, res) => {
    const { id } = req.params;
    const { id_usuario,id_lenguaje } = req.body;
    try {
      const OBJLenguajeUsuarios = new LenguajeUsuarios();
      const lenguajeUsuarios = await OBJLenguajeUsuarios.update(id_usuario,id_lenguaje,id);
      res.json(lenguajeUsuarios);
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  static actualizarParcialLenguajeUsuarios = async (req, res) => {
    const {id} = req.params;
    const campos = req.body;
    try {
      const OBJLenguajeUsuarios = new LenguajeUsuarios();
      const lenguajeUsuarios= await OBJLenguajeUsuarios.updateParcial(id,campos);
      res.json(lenguajeUsuarios);
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  static eliminarLenguajeUsuarios = async (req, res)=>{
    const {id} = req.params;
    try {
      const OBJLenguajeUsuarios= new LenguajeUsuarios();
      const lenguajeUsuarios = await OBJLenguajeUsuarios.eliminar(id);
      res.json(lenguajeUsuarios);
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}

export default LenguajesUsuariosController;