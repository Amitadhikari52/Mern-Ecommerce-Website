import express from "express";
import {
  registerUser,
  loginUser,
  forgotPasswordUser,
  testUser,
  updateProfile,
  getOrders,
  getAllOrders,
  orderStatus,
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

// protected user route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// protected admin route
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// update profile
router.put("/profile", requireSignIn, updateProfile);

//orders
router.get("/orders", requireSignIn, getOrders);

// all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrders);

// order status update
router.put("/order-status/:orderId", requireSignIn, isAdmin, orderStatus);

export default router;
