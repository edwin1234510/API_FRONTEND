export const validarLenguajesUsuarios = (req, res,next) => {
    const {id_usuario,id_lenguaje } = req.body;
    if (!id_usuario || id_usuario.trim() === "") {
        return res.status(400).json({ mensaje: "El usuario de lenguajes usuarios obligatorio" });
    }
    if (!id_lenguaje || id_lenguaje.trim() === "") {
        return res.status(400).json({ mensaje: "La lenguaje de enguajes usuarios obligatorio" });
    }
    next();
  }