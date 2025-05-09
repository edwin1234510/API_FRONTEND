import express from "express";
import LenguajesController from "../controller/LenguajesController.js";
import { validarLenguajes } from "../middlewares/validarLenguajes.js";


const router = express.Router();

router.get('/', LenguajesController.getAllLenguajes);

router.post('/', validarLenguajes, LenguajesController.createLenguajes);

router.put('/:id', LenguajesController.actualizarLenguajes);

router.patch('/:id', LenguajesController.actualizarParcialLenguajes);

router.delete('/:id', LenguajesController.eliminarLenguajes);


export default router;