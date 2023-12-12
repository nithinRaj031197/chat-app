import express from "express";
import { createUser, loginUser } from "../controllers/user.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);

const userRouter = router;
export default userRouter;
