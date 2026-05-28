import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  image: { type: String },
  tripCount: { type: Number, default: 0 },
  isPopular: { type: Boolean, default: false },
});

const Destination = mongoose.model("Destination", destinationSchema);
export default Destination;
