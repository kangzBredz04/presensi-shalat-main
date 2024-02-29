import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
// import argon2 from "argon2";
// import jwt from "jsonwebtoken";
import StudentRoute from "./routes/student-route.js";

const app = express();
app.use(
  cors({
    origin: "localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/student", StudentRoute);

app.listen(process.env.API_PORT, () =>
  console.log("Server berhasil dijalankan.")
);

// // Hello world
// app.get("/api/v1", async (_req, res) => {
//   res.send("Selamat datang di Sistem Presensi Shalat!");
// });

// // Get all students
// app.get("/api/v1/students", async (_req, res) => {
//   const result = await pool.query("SELECT * FROM students");
//   res.json(result.rows);
// });

// // Add student
// app.post("/api/v1/students", async (req, res) => {
//   const result = await pool.query(
//     "INSERT INTO students (name, generation) VALUES ($1, $2) RETURNING *",
//     [req.body.name, req.body.generation]
//   );
//   res.json({
//     student: result.rows[0],
//     message: "Mahasiswa berhasil ditambahkan.",
//   });
// });

// // Get student by ID
// app.get("/api/v1/students/:id", async (req, res) => {
//   const result = await pool.query("SELECT * FROM students WHERE id = $1", [
//     req.params.id,
//   ]);
//   res.json(result.rows[0]);
// });

// // Edit student by ID
// app.put("/api/v1/students/:id", async (req, res) => {
//   await pool.query(
//     "UPDATE students SET name = $1, generation = $2 WHERE id = $3",
//     [req.body.name, req.body.generation, req.params.id]
//   );
//   res.send("Mahasiswa berhasil diedit.");
// });

// // Set present by ID
// app.put("/api/v1/students/:id/present", async (req, res) => {
//   await pool.query("UPDATE students SET present = $1 WHERE id = $2", [
//     req.body.present,
//     req.params.id,
//   ]);
//   res.json(req.body.present);
// });

// // Delete student by ID
// app.delete("/api/v1/students/:id", async (req, res) => {
//   await pool.query("DELETE FROM students WHERE id = $1", [req.params.id]);
//   res.send("Mahasiswa berhasil dihapus.");
// });

// // async function createUser(username, password) {
// //   // Hash password with Argon2
// //   const hashedPassword = await argon2.hash(password);

// //   // Insert user into database
// //   const result = await pool.query(
// //     "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",
// //     [username, hashedPassword]
// //   );
// //   return result.rows[0];
// // }

// // Add user
// app.post("/api/v1/register", async (req, res) => {
//   const { username, password } = req.body;
//   // Validate input
//   if (!username || !password) {
//     return res
//       .status(400)
//       .json({ error: "Username and password are required" });
//   }

//   try {
//     const hashedPassword = await argon2.hash(password);
//     const result = await pool.query(
//       "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",
//       [username, hashedPassword]
//     );
//     res
//       .status(201)
//       .json({ message: "Registration successful", data: result.rows[0] });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "An error occurred during registration" });
//   }
// });

// // Login user
// app.post("/api/v1/login", async (req, res) => {
//   const { username, password } = req.body;
//   if (!username || !password) {
//     return res
//       .status(400)
//       .json({ error: "Username and password are required" });
//   }
//   try {
//     // Find user by username
//     const result = await pool.query("SELECT * FROM users WHERE username = $1", [
//       username,
//     ]);
//     if (!result.rows[0]) {
//       return res.status(200).json({ error: "Username not found" });
//     } else {
//       // Verify password
//       const isPasswordValid = await argon2.verify(
//         result.rows[0].password,
//         password
//       );
//       if (!isPasswordValid) {
//         return res.status(401).json({ error: "Incorrect password" });
//       } else {
//         const token = jwt.sign(result.rows[0], process.env.SECRET_KEY);
//         res.cookie("auth_token", token, { httpOnly: true });
//         res.status(200).json({
//           message: "Login successful",
//           token,
//           user: result.rows[0],
//         });
//       }
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "An error occurred during login" });
//   }
// });

// app.get;

// // middleware otentikasi
// // app.use((req, res, next) => {
// //   if (req.headers.authorization) {
// //     console.log(req.headers.authorization);
// //   } else {
// //     res.status(401).send("Token belum ada");
// //   }
// // });
