import express from "express";
import UsuariosController from "../controller/UsuariosController.js";
import { validarUsuarios } from "../middlewares/validarUsuarios.js";


const router = express.Router();

router.get('/', UsuariosController.getAllUsuarios);

router.post('/', validarUsuarios,UsuariosController.createUsuarios);

router.put('/:id', UsuariosController.actualizarUsuarios);

router.patch('/:id', UsuariosController.actualizarParcialUsuarios);

router.delete('/:id', UsuariosController.eliminarUsuarios);

export default router;