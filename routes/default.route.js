import { Router } from "express";
import { CustomError } from "../error/custom.error.js";

const router = Router();

router.use("/", (req, res, next) =>{
    next(new CustomError("Not Found", 404));
})

export default router;