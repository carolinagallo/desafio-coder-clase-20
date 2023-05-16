import { Router } from "express";
import { login, signup, logout } from "../controllers/sessionsController.js";

const router = Router();

router.get("/login", login);
router.post("/signup", signup);
router.delete("/logout/:id", logout);

export default router;
