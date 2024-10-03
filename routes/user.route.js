import { Router } from "express";
import { getUser, insertUser} from "../controllers/user.controller.js";

const router = Router();

router.get("/:id", getUser);
router.post("/insert", insertUser);

export default router;