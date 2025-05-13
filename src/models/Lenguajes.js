import connection from "../utils/db.js";


class Lenguajes {
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM lenguajes");
      return rows;
    } catch (error) {
      throw new Error("error al obtener los lenguajes");
    }
  }
  async getById(id) {
    try {
      const [rows] = await connection.query("SELECT * FROM lenguajes WHERE lenguaje_id = ?", [id]);
      if (rows.length === 0) {
        return []
      }
      return rows[0];
    } catch (error) {
      throw new Error("error al obtener el lenguaje");
    }
  }
  async LenguajeUsuarios(id) {
    const [rows] = await connection.query("SELECT * FROM lenguajes_usuarios WHERE id_lenguaje  = ?", [id]);
    return rows;
  }
  async create(lenguaje) {
    try {
      const [result] = await connection.query("INSERT INTO lenguajes (lenguaje) VALUES (?)", [lenguaje]);
      if(result.affectedRows === 0){
        return null;
      }
      return {
        id: result.id, lenguaje
      }
    } catch (error) {
      throw new Error("error al crear el lenguaje");
    }
  }
  async update(id,campos) {
    try {
      let query = "UPDATE lenguajes SET ";
      let params = [];
      for(const [key, value] of Object.entries(campos)){
        query+= `${key} = ?, `;
        params.push(value);
      }
      query = query.slice(0, -2);
      query += "WHERE lenguaje_id = ? ";
      params.push(id);
      const [result] = await connection.query(query,params);
      return result.affectedRows > 0? { id, ...campos}: null;
    } catch (error) {
      throw new Error("Error al actualizar el lenguaje");
    }
  }
  async eliminar (id){
    const [result] = await connection.query("DELETE FROM lenguajes WHERE lenguaje_id = ?", [id]);
    if(result.affectedRows === 0){
        return{
          error: true,
          message: "No se pudo eliminar el lenguaje, ocurrio un error inesperado.",
        }
    }
    return{
      error: false,
      message: "Lenguaje eliminada exitosamente.",
    }
  }
}

export default Lenguajes;