import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TripCard from "../trips/TripCard";
import { getFeaturedDemoTrips } from "../../data/demoTrips";
import styles from "./FeaturedTrips.module.css";

const FeaturedTrips = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = () => {
      try {
        setTrips(getFeaturedDemoTrips(6));
      } catch (err) {
        console.error("Failed to fetch featured trips:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchFeatured();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Featured Trips</h2>
          <p className={styles.subtext}>
            Handpicked experiences for your next adventure
          </p>
        </div>

        {loading ? (
          <div className={styles.loading}>Loading...</div>
        ) : trips.length > 0 ? (
          <div className={styles.grid}>
            {trips.map((trip) => (
              <TripCard key={trip._id || trip.id} trip={trip} />
            ))}
          </div>
        ) : (
          <p className={styles.empty}>No featured trips available right now.</p>
        )}

        <div className={styles.viewAll}>
          <Link to="/trips" className={styles.viewAllBtn}>
            View All Trips
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTrips;
