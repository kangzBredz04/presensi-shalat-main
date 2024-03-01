import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

import StudentRoute from "./routes/student-route.js";
import AuthRoute from "./routes/auth-route.js";

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
app.use("/auth", AuthRoute);

app.listen(process.env.API_PORT, () =>
  console.log("Server berhasil dijalankan.")
);

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
