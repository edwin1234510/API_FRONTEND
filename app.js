import express from "express";
import bodyParser from "body-parser";
import ciudadesRutas from "./src/rutas/ciudadesRutas.js";
import dotenv from "dotenv";
import generosRutas from "./src/rutas/generosRutas.js";
import lenguajesRutas from "./src/rutas/lenguajesRutas.js";
import usuariosRutas from "./src/rutas/usuariosRutas.js";
import lenguajeUsuariosRutas from "./src/rutas/lenguajesUsuariosRutas.js";
import cors from "cors";
dotenv.config();
export const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.urlencoded({ "extended": true }))


app.use("/ciudades", ciudadesRutas);
app.use("/generos", generosRutas)
app.use("/lenguajes", lenguajesRutas)
app.use("/usuarios", usuariosRutas)
app.use("/lenguajeUsuarios", lenguajeUsuariosRutas)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("http://localhost:3000/");
});