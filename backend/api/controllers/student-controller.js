import { pool } from "../config/db.js";

// export const newStudent = async (req, res) => {
//   try {
//   } catch (error) {}
// };

export const getAllStudents = async (_req, res) => {
  try {
    const result = await pool.query("SELECT * FROM students");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getStudentById = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM students WHERE id = $1", [
      req.params.id,
    ]);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
