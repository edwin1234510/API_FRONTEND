import express from "express";
import LenguajesController from "../controller/LenguajesController.js";
import { camposLenguajes, parcialesLenguajes } from "../middlewares/lenguajes/index.js";


const router = express.Router();

router.get('/', LenguajesController.getAllLenguajes);

router.get('/:id', LenguajesController.getLenguajesById);

router.post('/', camposLenguajes, LenguajesController.createLenguajes);

router.put('/:id',camposLenguajes, LenguajesController.actualizarLenguajes);

router.patch('/:id',parcialesLenguajes, LenguajesController.actualizarLenguajes);

router.delete('/:id', LenguajesController.eliminarLenguajes);


export default router;