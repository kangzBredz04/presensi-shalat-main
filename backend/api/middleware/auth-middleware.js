import jwt from "jsonwebtoken";
import "dotenv/config";

export const verifyUserToken = async (req, res, next) => {
  if (req.headers.cookie) {
    const token = req.headers.cookie.split("=")[1];
    try {
      const user = jwt.verify(token, process.env.SECRET_KEY);
      req.user = user;
      next();
    } catch {
      res.status(401);
      res.send("Token salah.");
    }
  } else {
    res.status(401);
    res.send("Token belum diisi.");
  }
};
