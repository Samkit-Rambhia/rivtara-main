import mongoose from "mongoose";
import Trip from "./Trip.js";

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    trip: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trip",
      required: true,
    },
    rating: { type: Number, required: true, min: 1, max: 5 },
    title: { type: String },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

reviewSchema.index({ trip: 1 });
reviewSchema.index({ user: 1, trip: 1 }, { unique: true });

// Recalculate trip rating after save/delete
async function updateTripRating(tripId) {
  const stats = await mongoose.model("Review").aggregate([
    { $match: { trip: tripId } },
    { $group: { _id: "$trip", average: { $avg: "$rating" }, count: { $sum: 1 } } },
  ]);

  if (stats.length > 0) {
    await Trip.findByIdAndUpdate(tripId, {
      "rating.average": Math.round(stats[0].average * 10) / 10,
      "rating.count": stats[0].count,
    });
  } else {
    await Trip.findByIdAndUpdate(tripId, {
      "rating.average": 0,
      "rating.count": 0,
    });
  }
}

reviewSchema.post("save", function () {
  updateTripRating(this.trip);
});

reviewSchema.post("findOneAndDelete", function (doc) {
  if (doc) updateTripRating(doc.trip);
});

const Review = mongoose.model("Review", reviewSchema);
export default Review;
