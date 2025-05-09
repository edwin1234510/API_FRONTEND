import express from "express";
import GenerosController from "../controller/GenerosController.js";
import { validarGeneros } from "../middlewares/validarGeneros.js";


const router = express.Router();

router.get('/', GenerosController.getAllGeneros);

router.post('/', validarGeneros, GenerosController.createGeneros);

router.put('/:id', GenerosController.actualizarGeneros);

router.patch('/:id', GenerosController.actualizarParcialGeneros);

router.delete('/:id', GenerosController.eliminarGeneros);


export default router;