import express from "express";
import {
  deleteStudent,
  getAllStudents,
  getStudentById,
  newStudent,
  setPresentById,
  updateStudent,
} from "../controllers/student-controller.js";

const router = express.Router();

router.post("/new-student", newStudent); // Buat data mahasiswa
router.get("/get-all-students", getAllStudents); // Tampil seluruh data mahasiswa
router.get("/get-student-by-id/:id", getStudentById); // Tampil data mahasiswa berdasarkan ID
router.put("/update-student/:id", updateStudent); // Update mahasiswa
router.put("/set-present/:id", setPresentById); // Ganti kehadiran mahasiswa
router.delete("/delete-student/:id", deleteStudent); // Hapus mahasiswa

export default router;
