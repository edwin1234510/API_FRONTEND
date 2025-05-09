import connection from "../utils/db.js";


class Usuarios {
  constructor(documento,nombre, apellido, telefono, contrasena, id_genero, id_ciudad) {
    this.documento = documento;
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.contrasena = contrasena;
    this.id_genero = id_genero;
    this.id_ciudad = id_ciudad;
  }
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM usuarios");
      return rows;
    } catch (error) {
      throw new Error("error al obtener los usuarios");
    }
  }
  async validarUsuarioDocumento (documento) {
    const [rows] = await connection.query("SELECT * FROM usuarios WHERE documento = ?",[documento]);
    return rows.length>0;
  }
  async create(documento,nombre, apellido, telefono, contrasena, id_genero, id_ciudad) {
    try {
      if(await this.validarUsuarioDocumento(documento)){
        throw new Error("El usuario ya existente en la base de datos");
      }
      const [result] = await connection.query("INSERT INTO usuarios (documento,nombre,apellido,telefono,contrasena,id_genero,id_ciudad) VALUES (?,?,?,?,?,?,?)", [documento,nombre, apellido, telefono, contrasena, id_genero, id_ciudad]);
      return {id: result.usuario_id, documento,nombre, apellido, telefono, contrasena, id_genero, id_ciudad}
    } catch (error) {
      throw new Error(error);
    }
  }
  async update(documento, nombre, apellido, telefono, contrasena, id_genero, id_ciudad,id ) {
    try {
      const [result] = await connection.query("UPDATE usuarios SET documento = ?, nombre = ?,apellido = ?,telefono = ?,contrasena = ?, id_genero = ?,id_ciudad = ? WHERE usuario_id = ?", [documento,nombre, apellido, telefono, contrasena, id_genero, id_ciudad,id]);
      if (result.affectedRows === 0) {
        throw new Error("Usuario no encontrada");
      }
      return { documento, nombre, apellido, telefono, contrasena, id_genero, id_ciudad,id }
    } catch (error) {
      console.log(error);
      throw new Error("Error al actualizar el usuario");
    }
  }
 async updateParcial(id,campos) {
    for (const propiedad in campos) {
      const [result] = await connection.query(`UPDATE usuarios SET ${propiedad} = ? WHERE usuario_id = ?`, [campos[propiedad], id]);
    }
    const [rows] = await connection.query("SELECT * FROM usuarios WHERE usuario_id = ?", [id]);
    return rows;
  }
  
  async eliminar (id){
    try {
      const [result] = await connection.query("DELETE FROM usuarios WHERE usuario_id = ?", [id]);
      return result;
    } catch (error) {
      throw new Error("error al eliminar el usuario");
    }
  }
}

export default Usuarios;