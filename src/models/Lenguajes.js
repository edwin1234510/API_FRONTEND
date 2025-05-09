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
  async create(lenguaje) {
    try {
      const [result] = await connection.query("INSERT INTO lenguajes (lenguaje) VALUES (?)", [lenguaje]);
      return {
        id: result.id, lenguaje
      }
    } catch (error) {
      throw new Error("error al crear el lenguaje");
    }
  }
  async update(lenguaje, id) {
    try {
      const [result] = await connection.query("UPDATE lenguajes SET lenguaje = ? WHERE lenguaje_id = ?", [lenguaje, id]);
      if (result.affectedRows === 0) {
        throw new Error("lenguaje no encontrada");
      }
      return { id, lenguaje }
    } catch (error) {

    }
  }
  async updateParcial(id,campos) {
    for (const propiedad in campos) {
      const [result] = await connection.query(`UPDATE lenguajes SET ${propiedad} = ? WHERE lenguaje_id = ?`, [campos[propiedad], id]);
    }
    const [rows] = await connection.query("SELECT * FROM lenguajes WHERE lenguaje_id = ?", [id]);
    return rows;
  }

  async validarLenguaje (id_lenguaje) {
    const [rows] = await connection.query("SELECT * FROM lenguajes_usuarios WHERE id_lenguaje  = ?",[id_lenguaje]);
    return rows.length>0;
  }
  async eliminar (id){
    try {
      if(await this.validarLenguaje (id)){
        throw new Error("no se puede eliminar el lenguaje porque tiene usuarios asociados");
      } 
      const [result] = await connection.query("DELETE FROM lenguajes WHERE lenguaje_id = ?", [id]);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
  
}

export default Lenguajes;