import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { AppError, asyncHandler } from "./errorHandler.js";
import { JWT_SECRET } from "../config/env.js";

export const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    throw new AppError("Not authorized, no token", 401);
  }

  const decoded = jwt.verify(token, JWT_SECRET);
  req.user = await User.findById(decoded.id);

  if (!req.user) {
    throw new AppError("User not found", 401);
  }

  next();
});
