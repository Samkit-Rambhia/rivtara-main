import Trip from "../models/Trip.js";
import { AppError, asyncHandler } from "../middleware/errorHandler.js";

// @desc    Get all trips with filters
// @route   GET /api/trips
export const getTrips = asyncHandler(async (req, res) => {
  const {
    category,
    destination,
    minPrice,
    maxPrice,
    sort,
    search,
    difficulty,
    featured,
    duration,
    page = 1,
    limit = 12,
  } = req.query;

  const query = { isActive: true };

  if (category) query.category = category;
  if (destination) {
    query["destination.name"] = { $regex: destination, $options: "i" };
  }
  if (difficulty) query.difficulty = difficulty;
  if (featured === "true") query.isFeatured = true;

  if (minPrice || maxPrice) {
    query["price.discounted"] = {};
    if (minPrice) query["price.discounted"].$gte = Number(minPrice);
    if (maxPrice) query["price.discounted"].$lte = Number(maxPrice);
  }

  if (duration) {
    const [min, max] = duration.split("-").map(Number);
    query["duration.days"] = {};
    if (min) query["duration.days"].$gte = min;
    if (max) query["duration.days"].$lte = max;
  }

  if (search) {
    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { "destination.name": { $regex: search, $options: "i" } },
      { tags: { $regex: search, $options: "i" } },
    ];
  }

  // Sort
  let sortOption = { isFeatured: -1, createdAt: -1 };
  if (sort === "price_asc") sortOption = { "price.discounted": 1 };
  else if (sort === "price_desc") sortOption = { "price.discounted": -1 };
  else if (sort === "rating") sortOption = { "rating.average": -1 };
  else if (sort === "duration") sortOption = { "duration.days": 1 };

  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  const skip = (pageNum - 1) * limitNum;

  const [trips, total] = await Promise.all([
    Trip.find(query).sort(sortOption).skip(skip).limit(limitNum),
    Trip.countDocuments(query),
  ]);

  res.json({
    success: true,
    trips,
    page: pageNum,
    totalPages: Math.ceil(total / limitNum),
    totalTrips: total,
  });
});

// @desc    Get single trip by slug
// @route   GET /api/trips/:slug
export const getTripBySlug = asyncHandler(async (req, res) => {
  const trip = await Trip.findOne({ slug: req.params.slug });

  if (!trip) {
    throw new AppError("Trip not found", 404);
  }

  res.json({ success: true, trip });
});
