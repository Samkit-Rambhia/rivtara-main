import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    subtitle: { type: String },
    description: { type: String, required: true },
    images: [{ type: String }],
    coverImage: { type: String, required: true },
    destination: {
      name: { type: String, required: true },
      state: { type: String },
      country: { type: String, default: "India" },
    },
    duration: {
      days: { type: Number, required: true },
      nights: { type: Number, required: true },
    },
    price: {
      original: { type: Number, required: true },
      discounted: { type: Number },
      currency: { type: String, default: "INR" },
    },
    category: {
      type: String,
      enum: [
        "backpacking",
        "weekend",
        "international",
        "bike-trip",
        "trekking",
        "camping",
        "honeymoon",
        "group-tour",
      ],
    },
    difficulty: {
      type: String,
      enum: ["easy", "moderate", "challenging"],
    },
    groupSize: { type: Number },
    startDates: [{ type: Date }],
    startLocation: { type: String },
    itinerary: [
      {
        day: { type: Number },
        title: { type: String },
        description: { type: String },
        highlights: [{ type: String }],
        meals: { type: String },
        accommodation: { type: String },
      },
    ],
    inclusions: [{ type: String }],
    exclusions: [{ type: String }],
    rating: {
      average: { type: Number, default: 0 },
      count: { type: Number, default: 0 },
    },
    isFeatured: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

tripSchema.index({ slug: 1 });
tripSchema.index({ "destination.name": 1 });
tripSchema.index({ category: 1 });
tripSchema.index({ "price.discounted": 1 });
tripSchema.index({ isFeatured: 1, isActive: 1 });
tripSchema.index({ title: "text", "destination.name": "text", tags: "text" });

const Trip = mongoose.model("Trip", tripSchema);
export default Trip;
