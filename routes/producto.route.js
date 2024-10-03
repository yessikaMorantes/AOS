import { Router } from "express";
import {
    deleteProductById,
    getAllProducts,
    getProduct,
    insertProduct,
    updateProductById
} from "../controllers/producto.controller.js";
import bodyParser from "body-parser";
import auth from "../middleware/auth.middleware.js"

const router = Router();

router.get("/", auth, getAllProducts);
router.get("/:id", auth, getProduct);
router.post("/insert", auth, insertProduct);
router.put("/update/:id", auth, updateProductById);
router.delete("/delete/:id", auth, deleteProductById);

export default router;