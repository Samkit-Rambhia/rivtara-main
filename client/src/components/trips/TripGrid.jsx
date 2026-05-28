import TripCard from "./TripCard";
import styles from "./TripGrid.module.css";

const TripGrid = ({ trips }) => (
  <div className={styles.grid}>
    {trips.map((trip) => (
      <TripCard key={trip._id} trip={trip} />
    ))}
  </div>
);

export default TripGrid;
