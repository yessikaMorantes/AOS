import { Router } from "express";
import { getAll , getProducto, insertProduct, updateProductById } from "../controllers/producto.controller.js";
import bodyParser from "body-parser";

const router = Router();

router.get("/", getAll )
router.get("/:id", getProducto );
router.post("/insert", insertProduct);
router.put("/update/:id", updateProductById);
  

export default router;