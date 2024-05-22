import express from "express";
import {
  registerUser,
  loginUser,
  forgotPasswordUser,
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

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordUser);

//test route
router.get("/test", requireSignIn, isAdmin, testUser);

// protected route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
