import { useState, useEffect } from "react";
import { getTrips } from "../services/tripService";

const useTrips = (filters = {}) => {
  const [trips, setTrips] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [totalTrips, setTotalTrips] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrips = async () => {
      setLoading(true);
      setError(null);
      try {
        const params = {};
        Object.entries(filters).forEach(([key, value]) => {
          if (value !== "" && value !== null && value !== undefined) {
            params[key] = value;
          }
        });
        const res = await getTrips(params);
        setTrips(res.data.trips);
        setTotalPages(res.data.totalPages);
        setTotalTrips(res.data.totalTrips);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch trips");
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, [JSON.stringify(filters)]);

  return { trips, totalPages, totalTrips, loading, error };
};

export default useTrips;
