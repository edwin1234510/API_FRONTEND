export const validarLenguajes = (req, res,next) => {
    const {lenguaje } = req.body;
    
    if (!lenguaje || lenguaje.trim() === "") {
      return res.status(400).json({ mensaje: "El nombre del lenguaje es obligatorio" });
    }
    next();
  }