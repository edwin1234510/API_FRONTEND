import Usuarios from "../models/Usuarios.js";


class UsuariosController {
  static getAllUsuarios = async (req, res) => {
    const OBJUsuarios = new Usuarios();
    const usuarios = await OBJUsuarios.getAll();
    res.json(usuarios);
  }
  static createUsuarios = async (req, res) => {
    try {
      const { documento,nombre, apellido, telefono, contrasena, id_genero, id_ciudad} = req.body;
      const OBJUsuarios = new Usuarios();
      const usuarios = await OBJUsuarios.create(documento,nombre, apellido, telefono, contrasena, id_genero, id_ciudad);
      res.status(201).json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  static actualizarUsuarios= async (req, res) => {
    const { id } = req.params;
    const { documento, nombre, apellido, telefono, contrasena, id_genero, id_ciudad } = req.body;
    try {
      const OBJUsuarios = new Usuarios();
      const usuarios = await OBJUsuarios.update(documento,nombre, apellido, telefono, contrasena, id_genero, id_ciudad, id);
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  static actualizarParcialUsuarios = async (req, res) => {
    const {id} = req.params;
    const campos = req.body;
    try {
      const OBJUsuarios = new Usuarios();
      const usuarios = await OBJUsuarios.updateParcial(id,campos);
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  static eliminarUsuarios = async (req, res)=>{
    const {id} = req.params;
    try {
      const OBJUsuarios= new Usuarios();
      const usuarios = await OBJUsuarios.eliminar(id);
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}

export default UsuariosController;