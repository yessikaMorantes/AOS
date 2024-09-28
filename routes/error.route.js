import { Router } from "express";
import { CustomError } from '../error/custom.error.js';
const router = Router();

router.get("/", (req, res, next)=> {
    try {
        throw new CustomError('Not Found', 404);
    } catch (error) {
        next(error);
    }
} ) 

export default router;