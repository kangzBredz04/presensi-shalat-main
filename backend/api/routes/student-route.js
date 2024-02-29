import express from "express";
import { getAllStudents } from "../controllers/student-controller.js";

const router = express.Router();

router.get("/get-all-students", getAllStudents);

export default router;
