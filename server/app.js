import "./config/env.js";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorHandler.js";
import tripRoutes from "./routes/tripRoutes.js";
import destinationRoutes from "./routes/destinationRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import subscribeRoutes from "./routes/subscribeRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import { CLIENT_URL, NODE_ENV } from "./config/env.js";

const app = express();

app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(
  cors({
    origin: NODE_ENV === "production" ? true : CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json({ limit: "1mb" }));

app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    next(err);
  }
});

app.use("/api/trips", tripRoutes);
app.use("/api/destinations", destinationRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/subscribers", subscribeRoutes);
app.use("/api/contact", contactRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use(errorHandler);

export default app;
