import ContactMessage from "../models/ContactMessage.js";
import { AppError, asyncHandler } from "../middleware/errorHandler.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const createContactMessage = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    throw new AppError("Please fill in name, email, and message", 400);
  }
  if (!EMAIL_RE.test(email)) {
    throw new AppError("Please provide a valid email address", 400);
  }
  if (message.trim().length < 10) {
    throw new AppError("Message should be at least 10 characters long", 400);
  }

  await ContactMessage.create({
    name: name.trim(),
    email: email.toLowerCase().trim(),
    message: message.trim(),
  });

  res.status(201).json({
    success: true,
    message: "Thanks! We'll get back to you within one business day.",
  });
});
