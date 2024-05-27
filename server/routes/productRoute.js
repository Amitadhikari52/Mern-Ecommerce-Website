import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  brainTreePayment,
  braintreeToken,
  createProduct,
  deleteProduct,
  getProduct,
  getSingleProduct,
  productCategory,
  productCount,
  productFilters,
  productList,
  productPhoto,
  realtedProduct,
  searchProduct,
  updateProduct,
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();

// routes

// Create Product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProduct
);

//get products
router.get("/get-product", getProduct);

//Single products
router.get("/get-product/:slug", getSingleProduct);

//get photo
router.get("/product-photo/:pid", productPhoto);

//delete product
router.delete("/delete-product/:pid", deleteProduct);

// Update Product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProduct
);

//filter Product
router.post("/product-filters", productFilters);

//product counts
router.get("/product-count", productCount);

//product per page
router.get("/product-list/:page", productList);

//search product
router.get("/search/:keyword", searchProduct);

// similar product
router.get("/related-product/:pid/:cid", realtedProduct);

//category wise product
router.get("/product-category/:slug", productCategory);

// payments routes
// token
router.get("/braintree/token", braintreeToken);

// payments
router.post("/braintree/payment", requireSignIn, brainTreePayment);

export default router;
