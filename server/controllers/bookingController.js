import Booking from "../models/Booking.js";
import Trip from "../models/Trip.js";
import { AppError, asyncHandler } from "../middleware/errorHandler.js";

// @desc    Create booking
// @route   POST /api/bookings
export const createBooking = asyncHandler(async (req, res) => {
  const { tripId, travelDate, travelers, contactInfo, specialRequests } = req.body;

  const trip = await Trip.findById(tripId);
  if (!trip) {
    throw new AppError("Trip not found", 404);
  }

  const pricePerPerson = trip.price.discounted || trip.price.original;
  const totalPrice =
    pricePerPerson * travelers.adults +
    pricePerPerson * 0.5 * (travelers.children || 0);

  const booking = await Booking.create({
    user: req.user._id,
    trip: tripId,
    travelDate,
    travelers,
    contactInfo,
    totalPrice,
    specialRequests,
  });

  const populated = await booking.populate("trip", "title slug coverImage duration destination");

  res.status(201).json({ success: true, booking: populated });
});

// @desc    Get current user's bookings
// @route   GET /api/bookings/my
export const getMyBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id })
    .populate("trip", "title slug coverImage duration destination price")
    .sort({ createdAt: -1 });

  res.json({ success: true, bookings });
});
