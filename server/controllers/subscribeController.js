import Subscriber from "../models/Subscriber.js";
import { AppError, asyncHandler } from "../middleware/errorHandler.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const subscribe = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email || !EMAIL_RE.test(email)) {
    throw new AppError("Please provide a valid email address", 400);
  }

  try {
    await Subscriber.create({ email: email.toLowerCase().trim() });
  } catch (err) {
    if (err.code !== 11000) throw err;
  }

  res.status(201).json({
    success: true,
    message: "Subscribed successfully. Watch your inbox for deals.",
  });
});
