import { Router } from "express";
import { getTripReviews, addReview } from "../controllers/reviewController.js";
import { protect } from "../middleware/auth.js";

const router = Router();

router.get("/trip/:tripId", getTripReviews);
router.post("/trip/:tripId", protect, addReview);

export default router;
