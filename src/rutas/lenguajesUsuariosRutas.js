import express from "express";
import LenguajesUsuariosController from "../controller/LenguajesUsuariosController.js";
import { validarLenguajesUsuarios } from "../middlewares/validarLenguajesUsuarios.js";



const router = express.Router();

router.get('/', LenguajesUsuariosController.getAllLenguajeUsuarios);

router.post('/', validarLenguajesUsuarios, LenguajesUsuariosController.createLenguajeUsuarios);

router.put('/:id', LenguajesUsuariosController.actualizarLenguajeUsuarios);

router.patch('/:id', LenguajesUsuariosController.actualizarParcialLenguajeUsuarios);

router.delete('/:id', LenguajesUsuariosController.eliminarLenguajeUsuarios);


export default router;