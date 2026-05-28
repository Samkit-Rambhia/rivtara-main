import { Router } from "express";
import { createBooking, getMyBookings } from "../controllers/bookingController.js";
import { protect } from "../middleware/auth.js";

const router = Router();

router.post("/", protect, createBooking);
router.get("/my", protect, getMyBookings);

export default router;
