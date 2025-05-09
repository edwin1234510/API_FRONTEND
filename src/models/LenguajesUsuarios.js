import connection from "../utils/db.js";


class LenguajeUsuarios {
  
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM lenguajes_usuarios");
      return rows;
    } catch (error) {
      throw new Error("error al obtener los lenguajes usuarios");
    }
  }
  async validarExistente(id_usuario,id_lenguaje) {
    const [rows] = await connection.query("SELECT * FROM lenguajes_usuarios WHERE id_usuario = ? AND id_lenguaje = ?",[id_usuario,id_lenguaje]);
    return rows.length>0;
  }
  async create(id_usuario,id_lenguaje) {
    try {
      if(await this.validarExistente(id_usuario,id_lenguaje)){
        throw new Error("El usuario ya existe");
      }
      const [result] = await connection.query("INSERT INTO lenguajes_usuarios (id_usuario,id_lenguaje) VALUES (?,?)", [id_usuario,id_lenguaje]);
      return {id_usuario,id_lenguaje}
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id_usuario,id_lenguaje,id) {
    try {
      const [result] = await connection.query("UPDATE lenguajes_usuarios SET id_usuario = ?, id_lenguaje = ? WHERE id = ?", [id_usuario,id_lenguaje,id]);
      if (result.affectedRows === 0) {
        throw new Error("lenguaje Usuario no encontrada");
      }
      return { id_usuario,id_lenguaje,id }
    } catch (error) {
      throw new Error("Error al actualizar el lenguaje usuario");
    }
  }
  async updateParcial(id,campos) {
    for (const propiedad in campos) {
      const [result] = await connection.query(`UPDATE lenguajes_usuarios SET ${propiedad} = ? WHERE id = ?`, [campos[propiedad], id]);
    }
    const [rows] = await connection.query("SELECT * FROM lenguajes_usuarios WHERE id = ?", [id]);
    return rows;
  }
  
  async eliminar (id){
    try {
      const [result] = await connection.query("DELETE FROM lenguajes_usuarios WHERE id = ?", [id]);
      return result;
    } catch (error) {
      throw new Error("error al eliminar el lenguaje usuario");
    }
  }
}

export default LenguajeUsuarios;