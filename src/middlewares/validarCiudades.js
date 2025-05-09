export const validarCiudades = (req, res,next) => {
    const {ciudad_nombre } = req.body;
    
    if (!ciudad_nombre || ciudad_nombre.trim() === "") {
      return res.status(400).json({ mensaje: "El nombre de la ciudad es obligatorio" });
    }
    next();
  }