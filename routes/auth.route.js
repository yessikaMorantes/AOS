import { Router } from "express";
import { login, validateToken } from "../controllers/auth.controller.js";
import auth from "../middleware/auth.middleware.js"

const router = Router();

router.post("/", login);
router.get("/", auth, validateToken);

export default router;