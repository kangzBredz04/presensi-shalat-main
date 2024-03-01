import express from "express";
import {
  getDataLogin,
  login,
  resgister,
} from "../controllers/auth-controller.js";
import { verifyUserToken } from "../middleware/auth-middleware.js";

const router = express.Router();

router.post("/register", resgister); // Daftar akun
router.post("/login", login); // Login akun
router.get("/get-data-login", verifyUserToken, getDataLogin); // Get data login

export default router;
