import Review from "../models/Review.js";
import Trip from "../models/Trip.js";
import { AppError, asyncHandler } from "../middleware/errorHandler.js";

// @desc    Get reviews for a trip
// @route   GET /api/reviews/trip/:tripId
export const getTripReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({ trip: req.params.tripId })
    .populate("user", "name avatar")
    .sort({ createdAt: -1 });

  res.json({ success: true, reviews });
});

// @desc    Add review for a trip
// @route   POST /api/reviews/trip/:tripId
export const addReview = asyncHandler(async (req, res) => {
  const { rating, title, comment } = req.body;
  const tripId = req.params.tripId;

  const trip = await Trip.findById(tripId);
  if (!trip) {
    throw new AppError("Trip not found", 404);
  }

  const existing = await Review.findOne({ user: req.user._id, trip: tripId });
  if (existing) {
    throw new AppError("You have already reviewed this trip", 400);
  }

  const review = await Review.create({
    user: req.user._id,
    trip: tripId,
    rating,
    title,
    comment,
  });

  const populated = await review.populate("user", "name avatar");
  res.status(201).json({ success: true, review: populated });
});
