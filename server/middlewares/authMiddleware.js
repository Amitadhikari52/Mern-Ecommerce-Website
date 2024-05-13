import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

//protected routes token based

export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: No token provided" });
    }
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // This adds the decoded user information to the request object
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized: Invalid token" });
  }
};

//admin access

export const isAdmin = async (req, res, next) => {
  try {
    const userId = req.user._id; // Assuming user information is available in req.user after requireSignIn middleware
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(403).send({
        success: false,
        message: "Unauthorized Access: User not found",
      });
    }
    if (user.role !== 1) {
      return res.status(403).send({
        success: false,
        message: "Unauthorized Access: User is not an admin",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
