import connection from "../utils/db.js";


class Ciudades {
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM ciudades");
      return rows;
    } catch (error) {
      throw new Error("error al obtener las ciudades");
    }
  }
  async getById(id) {
    try {
      const [rows] = await connection.query("SELECT * FROM ciudades WHERE ciudad_id = ?", [id]);
      if (rows.length === 0) {
        return []
      }
      return rows[0];
    } catch (error) {
      throw new Error("error al obtener las ciudad");
    }
  }
  async usuarios(id) {
    const [rows] = await connection.query("SELECT * FROM usuarios WHERE id_ciudad = ?", [id]);
    return rows;
  }
  async create(ciudad_nombre) {
    try {
      const [result] = await connection.query("INSERT INTO ciudades (ciudad_nombre) VALUES (?)", [ciudad_nombre]);
      if (result.affectedRows === 0) {
        return null;
      }
      return { id: result.id, ciudad_nombre };
    } catch (error) {
      throw new Error("error al crear la ciudad");
    }
  }
  async update(id,campos) {
    try {
      let query = "UPDATE ciudades SET ";
      let params = [];
      for(const [key, value] of Object.entries(campos)){
        query+= `${key} = ?, `;
        params.push(value);
      }
      query = query.slice(0, -2);
      query += "WHERE ciudad_id = ? ";
      params.push(id);
      const [result] = await connection.query(query,params);
      return result.affectedRows > 0? { id, ...campos}: null;
    } catch (error) {
      throw new Error("Error al actualizar la ciuadad");
    }
  }
  async eliminar(id) {
    const [result] = await connection.query("DELETE FROM ciudades WHERE ciudad_id = ?", [id]);
    if(result.affectedRows === 0){
        return{
          error: true,
          message: "No se pudo eliminar la ciudad, ocurrio un error inesperado.",
        }
    }
    return{
      error: false,
      message: "Ciudad eliminada exitosamente.",
    }
  }

}

export default Ciudades;