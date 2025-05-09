import express from "express";
import CiudadesController from "../controller/CiudadesController.js";
import { validarCiudades } from "../middlewares/validarCiudades.js";


const router = express.Router();

router.get('/', CiudadesController.getAllCiudades);

router.get('/:id', CiudadesController.getCiudadById)

router.post('/', validarCiudades, CiudadesController.createCiudad);

/*router.put('/:id', CiudadesController.actualizarCiudad);

router.patch('/:id', CiudadesController.actualizarParcialCiudad);

router.delete('/:id', CiudadesController.eliminarCiudad);*/


export default router;