import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRouter from "./routes/user.js";
import mongoose from "mongoose";
import chalk from "chalk";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(chalk.green("Connected to Database")))
  .catch((err) => console.log(chalk.red(err)));

app.get("/", (req, res) => {
  res.json("Hi");
});

app.use("/auth", userRouter);

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
