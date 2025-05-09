export const validarGeneros = (req, res,next) => {
    const {genero } = req.body;
    
    if (!genero || genero.trim() === "") {
      return res.status(400).json({ mensaje: "El nombre del genero es obligatorio" });
    }
    next();
  }