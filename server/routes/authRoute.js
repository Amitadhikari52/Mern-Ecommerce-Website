import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerUser);
//LOGIN || METHOD POST
router.post("/login", loginUser);

export default router;
