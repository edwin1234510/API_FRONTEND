import express from "express";
import LenguajesUsuariosController from "../controller/LenguajesUsuariosController.js";
import {parcialesUsuariosLen,camposUsuariosLen } from "../middlewares/lenguajesUsuarios/index.js";



const router = express.Router();

router.get('/', LenguajesUsuariosController.getAllLenguajeUsuarios);

router.get('/:id', LenguajesUsuariosController.getLenguajesById);

router.post('/', camposUsuariosLen, LenguajesUsuariosController.createLenguajeUsuarios);

router.put('/:id',camposUsuariosLen, LenguajesUsuariosController.actualizarLenguajeUsuarios);

router.patch('/:id',parcialesUsuariosLen, LenguajesUsuariosController.actualizarLenguajeUsuarios);

router.delete('/:id', LenguajesUsuariosController.eliminarLenguajeUsuarios);


export default router;