// ─── Seed Script for Rivtara Travel Platform ───────────────────────────────
// Usage: npm run seed   (or)   node seed/seed.js

import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Load env vars from the server root
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// ─── Models ─────────────────────────────────────────────────────────────────
import Trip from "../models/Trip.js";
import User from "../models/User.js";
import Destination from "../models/Destination.js";
import Review from "../models/Review.js";
import Booking from "../models/Booking.js";

// ─── Seed Data ──────────────────────────────────────────────────────────────
import { trips, destinations, reviews, demoUser } from "./seedData.js";

// ─── Helpers ────────────────────────────────────────────────────────────────
const log = (msg) => console.log(`  [seed] ${msg}`);

async function seed() {
  try {
    // 1. Connect to MongoDB
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined in .env");
    }

    log(`Connecting to MongoDB...`);
    await mongoose.connect(mongoUri);
    log(`Connected to ${mongoose.connection.name}`);

    // 2. Drop existing collections
    log("Dropping existing collections...");
    const collections = ["trips", "users", "destinations", "reviews", "bookings"];
    for (const name of collections) {
      const collection = mongoose.connection.collections[name];
      if (collection) {
        await collection.drop().catch(() => {
          // Collection may not exist yet — that's fine
        });
        log(`  Dropped: ${name}`);
      }
    }

    // 3. Insert destinations
    log("Inserting destinations...");
    const insertedDestinations = await Destination.insertMany(destinations);
    log(`  Inserted ${insertedDestinations.length} destinations`);

    // 4. Insert trips
    log("Inserting trips...");
    const insertedTrips = await Trip.insertMany(trips);
    log(`  Inserted ${insertedTrips.length} trips`);

    // 5. Create demo user (pre-save hook hashes the password)
    log("Creating demo user...");
    const user = await User.create(demoUser);
    log(`  Created user: ${user.email}`);

    // 6. Create reviews — link each review to the demo user and its trip
    log("Inserting reviews...");
    const tripsBySlug = {};
    for (const trip of insertedTrips) {
      tripsBySlug[trip.slug] = trip._id;
    }

    const reviewDocs = reviews.map((r) => {
      const tripId = tripsBySlug[r.tripSlug];
      if (!tripId) {
        console.warn(`  Warning: No trip found for slug "${r.tripSlug}" — skipping review.`);
        return null;
      }
      return {
        user: user._id,
        trip: tripId,
        rating: r.rating,
        title: r.title,
        comment: r.comment,
      };
    }).filter(Boolean);

    // Insert one-by-one so the post('save') hook recalculates trip ratings
    for (const doc of reviewDocs) {
      await Review.create(doc);
    }
    log(`  Inserted ${reviewDocs.length} reviews`);

    // 7. Done
    log("");
    log("============================================");
    log("  Seed completed successfully!");
    log(`  ${insertedDestinations.length} destinations`);
    log(`  ${insertedTrips.length} trips`);
    log(`  1 demo user  (email: ${demoUser.email} / pass: ${demoUser.password})`);
    log(`  ${reviewDocs.length} reviews`);
    log("============================================");
    log("");
  } catch (err) {
    console.error("\n  [seed] ERROR:", err.message);
    console.error(err);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
    process.exit(process.exitCode || 0);
  }
}

seed();
