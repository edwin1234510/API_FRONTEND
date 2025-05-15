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
  async getById(id) {
    try {
      const [rows] = await connection.query(
        "SELECT * FROM lenguajes_usuarios WHERE id = ?", 
        [id]
      );
      if (rows.length === 0) {
        return [];
      }
      return rows[0];
    } catch (error) {
      throw new Error("error al obtener el lenguaje usuario");
    }
  }
  
  async getUsuarioById(id_usuario) {
    const [rows] = await connection.query(
      "SELECT * FROM usuarios WHERE usuario_id = ?", 
      [id_usuario]
    );
    return rows[0];
  }
  
  async getLenguajeById(id_lenguaje) {
    const [rows] = await connection.query(
      "SELECT * FROM lenguajes WHERE lenguaje_id = ?", 
      [id_lenguaje]
    );
    return rows[0];
  }
  async create(id_usuario,id_lenguaje) {
    try {
      const [result] = await connection.query("INSERT INTO lenguajes_usuarios (id_usuario,id_lenguaje) VALUES (?,?)", [id_usuario,id_lenguaje]);
      if(result.affectedRows === 0){
        return null;
      }
      return {id: result.id, id_usuario,id_lenguaje}
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id,campos) {
    try {
      let query = "UPDATE lenguajes_usuarios SET ";
      let params = [];
      for(const [key, value] of Object.entries(campos)){
        query+= `${key} = ?, `;
        params.push(value);
      }
      query = query.slice(0, -2);
      query += "WHERE id = ? ";
      params.push(id);
      const [result] = await connection.query(query,params);
      return result.affectedRows > 0? { id, ...campos}: null;
    } catch (error) {
      throw new Error("Error al actualizar el lenguaje usuario");
    }
  }
  async eliminar (id){
    const [result] = await connection.query("DELETE FROM lenguajes_usuarios WHERE id = ?", [id]);
    if(result.affectedRows === 0){
        return{
          error: true,
          message: "No se pudo eliminar el lenguaje usuario, ocurrio un error inesperado.",
        }
    }
    return{
      error: false,
      message: "Lenguaje usuario eliminada exitosamente.",
    }
  }
}

export default LenguajeUsuarios;