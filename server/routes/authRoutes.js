import { Router } from "express";
import { register, login, getMe, toggleWishlist } from "../controllers/authController.js";
import { protect } from "../middleware/auth.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, getMe);
router.put("/wishlist/:tripId", protect, toggleWishlist);

export default router;
