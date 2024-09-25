import { Router } from "express";
import { getAll , getProducto, insertProduct } from "../controllers/producto.controller.js";
import bodyParser from "body-parser";

const router = Router();

router.get("/", getAll )
router.get("/:id", getProducto );
router.post("/", insertProduct);
  

export default router;