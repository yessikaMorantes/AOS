import { Router } from "express";
import { getAll, getProducto, insertProduct, updateProductById } from "../controllers/producto.controller.js";
import bodyParser from "body-parser";
import auth from "../middleware/auth.middleware.js"

const router = Router();

router.get("/", auth, getAll)
router.get("/:id", auth, getProducto);
router.post("/insert", auth, insertProduct);
router.put("/update/:id", auth, updateProductById);


export default router;