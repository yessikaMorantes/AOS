import { Router } from "express";
import { CustomError } from "../objects/error.object.js";

const router = Router();

router.use("/", (req, res) =>{
    CustomError.set([], "Not Found", 404).reply(res);
})

export default router;