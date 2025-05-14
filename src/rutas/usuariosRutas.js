import express from "express";
import UsuariosController from "../controller/UsuariosController.js";
import { camposUsuarios,parcialesUsuarios } from "../middlewares/usuarios/index.js";


const router = express.Router();

router.get('/', UsuariosController.getAllUsuarios);

router.get('/:id', UsuariosController.getLenguajesById);

router.post('/',camposUsuarios,UsuariosController.createUsuarios);

router.put('/:id', camposUsuarios,UsuariosController.actualizarUsuarios);

router.patch('/:id',parcialesUsuarios, UsuariosController.actualizarUsuarios);

router.delete('/:id', UsuariosController.eliminarUsuarios);

export default router;