import express from "express";
import { login, resgister } from "../controllers/auth-controller.js";

const router = express.Router();

router.post("/register", resgister); // Daftar akun
router.post("/login", login); // Login akun

export default router;
