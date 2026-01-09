import express from "express";
import cors from "cors";
import { UserRouter } from "./router/user-router";

const app = express();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req)
});

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", (req, res) => {
  res.json({
    message: "hello from express",
  });
});

UserRouter(app);

app.listen(4000, () => {
  console.log("Listening on http://localhost:4000");
});
