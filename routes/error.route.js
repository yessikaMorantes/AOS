import { Router } from "express";
import { CustomError } from '../objects/error.object.js';
const router = Router();

router.get("/", (req, res, next)=> {
    try {
        throw new CustomError('Not Found', 404);
    } catch (error) {
        next(error);
    }
} ) 

export default router;