import { Router } from "express";
import {
    deleteProductById,
    getAllProducts,
    getProduct,
    insertProduct,
    updateProductById
} from "../controllers/producto.controller.js";
import bodyParser from "body-parser";

const router = Router();

router.get("/", getAllProducts )
router.get("/:id", getProduct );
router.post("/insert", insertProduct);
router.put("/update/:id", updateProductById);
router.delete("/delete/:id", deleteProductById);

export default router;