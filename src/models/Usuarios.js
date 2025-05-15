import connection from "../utils/db.js";


class Usuarios {
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM usuarios");
      return rows;
    } catch (error) {
      throw new Error("error al obtener los usuarios");
    }
  }
  async getById(id) {
    try {
      const [rows] = await connection.query("SELECT * FROM usuarios WHERE usuario_id = ?", [id]);
      if (rows.length === 0) {
        return []
      }
      return rows[0];
    } catch (error) {
      throw new Error("error al obtener el usuario");
    }
  }
  async getGeneroById(id_genero) {
    const [rows] = await connection.query(
      "SELECT * FROM generos WHERE genero_id = ?", 
      [id_genero]
    );
    return rows[0];
  }
  
  async getCiudadById(id_ciudad) {
    const [rows] = await connection.query(
      "SELECT * FROM ciudades WHERE ciudad_id = ?", 
      [id_ciudad]
    );
    return rows[0];
  }
  async create(documento,nombre, apellido, telefono, contrasena, id_genero, id_ciudad) {
    try {
      const [result] = await connection.query("INSERT INTO usuarios (documento,nombre,apellido,telefono,contrasena,id_genero,id_ciudad) VALUES (?,?,?,?,?,?,?)", [documento,nombre, apellido, telefono, contrasena, id_genero, id_ciudad]);
      if(result.affectedRows === 0){
        return null;
      }
      return {id: result.id, documento,nombre, apellido, telefono, contrasena, id_genero, id_ciudad}
    } catch (error) {
        throw new Error("error al crear el usuario");
    }
  }
  async update(id,campos ) {
    try {
      let query = "UPDATE usuarios SET ";
      let params = [];
      for(const [key, value] of Object.entries(campos)){
        query+= `${key} = ?, `;
        params.push(value);
      }
      query = query.slice(0, -2);
      query += "WHERE usuario_id = ? ";
      params.push(id);
      const [result] = await connection.query(query,params);
      return result.affectedRows > 0? { id, ...campos}: null;
    } catch (error) {
      throw new Error("Error al actualizar el usuario");
    }
  }
  async eliminar (id){
    const [result] = await connection.query("DELETE FROM usuarios WHERE usuario_id = ?", [id]);
    if(result.affectedRows === 0){
        return{
          error: true,
          message: "No se pudo eliminar el usuario, ocurrio un error inesperado.",
        }
    }
    return{
      error: false,
      message: "Usuario eliminada exitosamente.",
    }
  }
}

export default Usuarios;