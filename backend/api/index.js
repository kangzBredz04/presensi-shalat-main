import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

import StudentRoute from "./routes/student-route.js";
import AuthRoute from "./routes/auth-route.js";
import { verifyUserToken } from "./middleware/auth-middleware.js";

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
