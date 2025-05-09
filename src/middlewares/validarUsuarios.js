export const validarUsuarios = (req, res,next) => {
    const {documento,nombre, apellido, telefono, contrasena, id_genero, id_ciudad } = req.body;
    if (!documento || documento.trim() === "") {
        return res.status(400).json({ mensaje: "El documento de usuarios obligatorio" });
      }
    if (!nombre || nombre.trim() === "") {
      return res.status(400).json({ mensaje: "El nombre de usuarios obligatorio" });
    }
    if (!apellido || apellido.trim() === "") {
      return res.status(400).json({ mensaje: "El apellido de usuarios obligatorio" });
    }
    if (!telefono || telefono.trim() === "") {
        return res.status(400).json({ mensaje: "El telefono de usuarios obligatorio" });
    }
    if (!contrasena || contrasena.trim() === "") {
        return res.status(400).json({ mensaje: "La contraseña de usuarios obligatorio" });
    }
    if (!id_genero || id_genero.trim() === "") {
        return res.status(400).json({ mensaje: "El genero de usuarios obligatorio" });
    }
    if (!id_ciudad || id_ciudad.trim() === "") {
        return res.status(400).json({ mensaje: "La ciudad de usuarios obligatorio" });
    }
    next();
  }