import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPopularDemoDestinations } from "../../data/demoTrips";
import styles from "./CategoryShowcase.module.css";

const CategoryShowcase = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = () => {
      try {
        setDestinations(getPopularDemoDestinations());
      } catch (err) {
        console.error("Failed to fetch destinations:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDestinations();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Popular Destinations</h2>
        </div>

        {loading ? (
          <div className={styles.loading}>Loading...</div>
        ) : destinations.length > 0 ? (
          <div className={styles.scrollRow}>
            {destinations.map((dest) => (
              <Link
                key={dest._id || dest.id || dest.name}
                to={`/trips?destination=${encodeURIComponent(dest.name)}`}
                className={styles.card}
                style={{
                  backgroundImage: `url(${dest.image})`,
                }}
              >
                <div className={styles.cardOverlay}>
                  <h3 className={styles.cardName}>{dest.name}</h3>
                  {dest.tripCount !== undefined && (
                    <span className={styles.tripBadge}>
                      {dest.tripCount} trips
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className={styles.empty}>No destinations available.</p>
        )}
      </div>
    </section>
  );
};

export default CategoryShowcase;
