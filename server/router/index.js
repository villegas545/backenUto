import { Router } from "express";
import {
  agregarProducto,
  eliminarProducto,
  obtenerProducto,
  obtenerProductos,
  actualizarProducto,
} from "../controllers/productos.controller";
import { buscarUsuario } from "../controllers/usuarios.controller";
const router = Router();

//ESTA ES LA RUTA DE PRUEBA
router.route("/usuario").post(buscarUsuario);

router.route("/productos").get(obtenerProductos).post(agregarProducto);
router
  .route("/productos/:id")
  .get(obtenerProducto)
  .put(actualizarProducto)
  .delete(eliminarProducto);

export default router;
