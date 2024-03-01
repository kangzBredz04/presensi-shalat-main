import express from "express";
import {
  deleteStudent,
  getAllStudents,
  getStudentById,
  newStudent,
  setPresentById,
  updateStudent,
} from "../controllers/student-controller.js";
import { verifyUserToken } from "../middleware/auth-middleware.js";

const router = express.Router();

router.post("/new-student", verifyUserToken, newStudent); // Buat data mahasiswa
router.get("/get-all-students", verifyUserToken, getAllStudents); // Tampil seluruh data mahasiswa
router.get("/get-student-by-id/:id", verifyUserToken, getStudentById); // Tampil data mahasiswa berdasarkan ID
router.put("/update-student/:id", verifyUserToken, updateStudent); // Update mahasiswa
router.put("/set-present/:id", verifyUserToken, setPresentById); // Ganti kehadiran mahasiswa
router.delete("/delete-student/:id", verifyUserToken, deleteStudent); // Hapus mahasiswa

export default router;
