import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    source: { type: String, default: "newsletter" },
  },
  { timestamps: true }
);

const Subscriber = mongoose.model("Subscriber", subscriberSchema);
export default Subscriber;
