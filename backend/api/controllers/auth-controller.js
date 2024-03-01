import { pool } from "../config/db.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

export const resgister = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await argon2.hash(password);
    const result = await pool.query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",
      [username, hashedPassword]
    );
    res
      .status(201)
      .json({ message: "Pendaftaran akun berhasil !!!", data: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan saat pendaftaran akun" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    // cari user berdasarkan username
    const result = await pool.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    if (!result.rows[0]) {
      return res.status(200).json({ error: "Username not found" });
    } else {
      // Verifikasi password
      const isPasswordValid = await argon2.verify(
        result.rows[0].password,
        password
      );
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Incorrect password" });
      } else {
        const token = jwt.sign(result.rows[0], process.env.SECRET_KEY);
        res.cookie("auth_token", token, { httpOnly: true });
        res.status(200).json({
          message: "Login successful",
          token,
          user: result.rows[0],
        });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred during login" });
  }
};
