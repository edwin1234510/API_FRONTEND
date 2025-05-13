import connection from "../utils/db.js";


class Generos {
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM generos");
      return rows;
    } catch (error) {
      throw new Error("error al obtener los generos");
    }
  }
  async getById(id) {
    try {
      const [rows] = await connection.query("SELECT * FROM generos WHERE genero_id = ?", [id]);
      if (rows.length === 0) {
        return []
      }
      return rows[0];
    } catch (error) {
      throw new Error("error al obtener los generos");
    }
  }
  async usuarios(id) {
    const [rows] = await connection.query("SELECT * FROM usuarios WHERE id_genero  = ?", [id]);
    return rows;
  }
  async create(genero) {
    try {
      const [result] = await connection.query("INSERT INTO generos (genero) VALUES (?)", [genero]);
      if(result.affectedRows === 0){
        return null;
      }
      return {
        id: result.id, genero
      }
    } catch (error) {
      throw new Error("error al crear el genero");
    }
  }
  async update(id, campos) {
    try {
      let query = "UPDATE generos SET ";
      let params = [];
      for(const [key, value] of Object.entries(campos)){
        query+= `${key} = ?, `;
        params.push(value);
      }
      query = query.slice(0, -2);
      query += "WHERE genero_id = ? ";
      params.push(id);
      const [result] = await connection.query(query,params);
      return result.affectedRows > 0? { id, ...campos}: null;
    } catch (error) {
      throw new Error("Error al actualizar el genero");
    }
  }

  async eliminar (id){
    const [result] = await connection.query("DELETE FROM generos WHERE genero_id = ?", [id]);
    if(result.affectedRows === 0){
        return{
          error: true,
          message: "No se pudo eliminar el genero, ocurrio un error inesperado.",
        }
    }
    return{
      error: false,
      message: "Genero eliminada exitosamente.",
    }
  }
  
}

export default Generos;