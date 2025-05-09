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
  async update(ciudad_nombre, id) {
    try {
      const [result] = await connection.query("UPDATE ciudades SET ciudad_nombre = ? WHERE ciudad_id = ?", [ciudad_nombre, id]);
      if (result.affectedRows === 0) {
        throw new Error("ciudad no encontrada");
      }
      return { id, ciudad_nombre }
    } catch (error) {

    }
  }
  async updateParcial(id, campos) {
    for (const propiedad in campos) {
      const [result] = await connection.query(`UPDATE ciudades SET ${propiedad} = ? WHERE ciudad_id = ?`, [campos[propiedad], id]);
    }
    const [rows] = await connection.query("SELECT * FROM ciudades WHERE ciudad_id = ?", [id]);
    return rows;
  }

  async validarCiudad(ciudad_id) {
    const [rows] = await connection.query("SELECT * FROM usuarios WHERE id_ciudad = ?", [ciudad_id]);
    return rows.length > 0;
  }
  async eliminar(id) {
    try {
      if (await this.validarCiudad(id)) {
        throw new Error("no se puede eliminar la ciudad porque tiene usuarios asociados");
      }
      const [result] = await connection.query("DELETE FROM ciudades WHERE ciudad_id = ?", [id]);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

}

export default Ciudades;