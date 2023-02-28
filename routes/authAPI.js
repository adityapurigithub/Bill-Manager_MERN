import express from "express";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import User from "../models/user.js";

import { register, signIn } from "../controller/authController.js";

const router = express.Router();

router.post("/register", register);

router.post("/sign-in", signIn);

export default router;
