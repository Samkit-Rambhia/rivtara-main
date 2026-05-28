import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import { AppError, asyncHandler } from "../middleware/errorHandler.js";

// @desc    Register user
// @route   POST /api/auth/register
export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const exists = await User.findOne({ email });
  if (exists) {
    throw new AppError("User already exists with this email", 400);
  }

  const user = await User.create({ name, email, password });
  const token = generateToken(user._id);

  res.status(201).json({
    success: true,
    user: { id: user._id, name: user.name, email: user.email, role: user.role },
    token,
  });
});

// @desc    Login user
// @route   POST /api/auth/login
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new AppError("Please provide email and password", 400);
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.matchPassword(password))) {
    throw new AppError("Invalid email or password", 401);
  }

  const token = generateToken(user._id);

  res.json({
    success: true,
    user: { id: user._id, name: user.name, email: user.email, role: user.role },
    token,
  });
});

// @desc    Get current user
// @route   GET /api/auth/me
export const getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).populate("wishlist");
  res.json({ success: true, user });
});

// @desc    Toggle trip in wishlist
// @route   PUT /api/auth/wishlist/:tripId
export const toggleWishlist = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const tripId = req.params.tripId;

  const index = user.wishlist.indexOf(tripId);
  if (index > -1) {
    user.wishlist.splice(index, 1);
  } else {
    user.wishlist.push(tripId);
  }

  await user.save();
  res.json({ success: true, wishlist: user.wishlist });
});
