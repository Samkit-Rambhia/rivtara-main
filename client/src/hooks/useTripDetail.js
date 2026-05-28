import { useState, useEffect } from "react";
import { getTripBySlug } from "../services/tripService";
import api from "../services/api";

const useTripDetail = (slug) => {
  const [trip, setTrip] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchTrip = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getTripBySlug(slug);
        setTrip(res.data.trip);

        const reviewRes = await api.get(`/reviews/trip/${res.data.trip._id}`);
        setReviews(reviewRes.data.reviews);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch trip");
      } finally {
        setLoading(false);
      }
    };

    fetchTrip();
  }, [slug]);

  return { trip, reviews, setReviews, loading, error };
};

export default useTripDetail;
