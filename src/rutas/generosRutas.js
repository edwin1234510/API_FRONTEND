import express from "express";
import GenerosController from "../controller/GenerosController.js";
import { camposGeneros, parcialesGeneros } from "../middlewares/generos/index.js";


const router = express.Router();

router.get('/', GenerosController.getAllGeneros);

router.get('/:id', GenerosController.getGeneroById);

router.post('/', camposGeneros, GenerosController.createGenero);

router.put('/:id', camposGeneros, GenerosController.actualizarGeneros);

router.patch('/:id', parcialesGeneros,GenerosController.actualizarGeneros);

router.delete('/:id', GenerosController.eliminarGeneros);


export default router;