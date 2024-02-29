import express from "express";
import {
  getAllStudents,
  getStudentById,
} from "../controllers/student-controller.js";

const router = express.Router();

router.get("/get-all-students", getAllStudents);
router.get("/get-student-by-id/:id", getStudentById);

export default router;
