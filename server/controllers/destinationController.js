import Destination from "../models/Destination.js";
import Trip from "../models/Trip.js";
import { AppError, asyncHandler } from "../middleware/errorHandler.js";

// @desc    Get all destinations
// @route   GET /api/destinations
export const getDestinations = asyncHandler(async (req, res) => {
  const { popular } = req.query;
  const query = popular === "true" ? { isPopular: true } : {};
  const destinations = await Destination.find(query).sort({ name: 1 });
  res.json({ success: true, destinations });
});

// @desc    Get single destination with its trips
// @route   GET /api/destinations/:slug
export const getDestinationBySlug = asyncHandler(async (req, res) => {
  const destination = await Destination.findOne({ slug: req.params.slug });
  if (!destination) {
    throw new AppError("Destination not found", 404);
  }

  const trips = await Trip.find({
    "destination.name": destination.name,
    isActive: true,
  });

  res.json({ success: true, destination, trips });
});
