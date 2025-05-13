import express from "express";
import CiudadesController from "../controller/CiudadesController.js";
import { camposCiudades, parcialesCiudades } from "../middlewares/ciudades/index.js";


const router = express.Router();

router.get('/', CiudadesController.getAllCiudades);

router.get('/:id', CiudadesController.getCiudadById)

router.post('/', camposCiudades, CiudadesController.createCiudad);

router.put('/:id', camposCiudades,CiudadesController.actualizarCiudad);

router.patch('/:id', parcialesCiudades,CiudadesController.actualizarCiudad);

router.delete('/:id', CiudadesController.eliminarCiudad);


export default router;