import { Router } from "express";
import { getTrips, getTripBySlug } from "../controllers/tripController.js";

const router = Router();

router.get("/", getTrips);
router.get("/:slug", getTripBySlug);

export default router;
