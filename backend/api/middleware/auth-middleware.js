import jwt from "jsonwebtoken";

export const verifyUserToken = async (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    return res.json({ Error: "Anda belum diautentikasi" });
  } else {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.json({ Error: "Token tidak ada" });
      } else {
        req.email = decoded.email;
        req.name = decoded.name;
        next();
      }
    });
  }
};
