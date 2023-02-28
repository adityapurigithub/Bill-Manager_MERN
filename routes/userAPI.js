import express from "express";
import passport from "passport";
import { getAuthUser } from "../controller/userController.js";
// import User from "../models/user.js";
const router = express.Router();

//adding passport middleware to authenticate the user
router.get("/", passport.authenticate("jwt", { session: false }), getAuthUser);

export default router;
