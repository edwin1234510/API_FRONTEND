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
  async create(genero) {
    try {
      const [result] = await connection.query("INSERT INTO generos (genero) VALUES (?)", [genero]);
      return {
        id: result.id, genero
      }
    } catch (error) {
      throw new Error("error al crear el genero");
    }
  }
  async update(genero, id) {
    try {
      const [result] = await connection.query("UPDATE generos SET genero = ? WHERE genero_id = ?", [genero, id]);
      if (result.affectedRows === 0) {
        throw new Error("genero no encontrada");
      }
      return { id, genero }
    } catch (error) {

    }
  }
  async updateParcial(id,campos) {
    for (const propiedad in campos) {
      const [result] = await connection.query(`UPDATE generos SET ${propiedad} = ? WHERE genero_id = ?`, [campos[propiedad], id]);
    }
    const [rows] = await connection.query("SELECT * FROM generos WHERE genero_id = ?", [id]);
    return rows;
  }

  async validarGenero (genero_id) {
    const [rows] = await connection.query("SELECT * FROM usuarios WHERE id_genero = ?",[genero_id]);
    return rows.length>0;
  }
  async eliminar (id){
    try {
      if(await this.validarGenero(id)){
        throw new Error("no se puede eliminar el genero porque tiene usuarios asociados");
      }
      const [result] = await connection.query("DELETE FROM generos WHERE genero_id = ?", [id]);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
  
}

export default Generos;