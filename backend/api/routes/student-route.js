import express from "express";
import {
  getAllStudents,
  getStudentById,
  newStudent,
  updateStudent,
} from "../controllers/student-controller.js";

const router = express.Router();

router.post("/new-student", newStudent);
router.get("/get-all-students", getAllStudents);
router.get("/get-student-by-id/:id", getStudentById);
router.put("/update-student/:id", updateStudent);

export default router;
