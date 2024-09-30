import { Router } from "express";
import { CustomError } from "../objects/error.object.js";

const router = Router();

router.use("/", (req, res, next) =>{
    CustomError.set("Not Found", 404).reply(next);
})

export default router;