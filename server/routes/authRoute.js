import express from "express";
import {
  registerUser,
  loginUser,
  testUser,
} from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerUser);

//LOGIN || METHOD POST
router.post("/login", loginUser);

//USER TEST ROUTE
router.get("/test", requireSignIn, isAdmin, testUser);

export default router;
