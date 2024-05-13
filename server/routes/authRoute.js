import express from "express";
import { registerUser } from "../controllers/authController.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerUser);

export default router;
