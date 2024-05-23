import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createCategory,
  updateCategory,
  getAllCategory,
  singleCategory,
  deleteCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

//routes
//Create Category
router.post("/create-category", requireSignIn, isAdmin, createCategory);

//Update Category
router.put("/update-category/:id", requireSignIn, isAdmin, updateCategory);

//getAll Category
router.get("/get-category", getAllCategory);

//single Category
router.get("/single-category/:slug", singleCategory);

//delete Category
router.delete("/delete-category/:id", requireSignIn, isAdmin, deleteCategory);

export default router;
