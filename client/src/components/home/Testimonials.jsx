import { FaStar, FaQuoteLeft } from "react-icons/fa";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    id: 1,
    quote:
      "The Kasol trip was absolutely magical! The team made everything so easy.",
    name: "Priya S.",
    trip: "Kasol & Kheerganga Trip",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Spiti Valley changed my perspective on life. Raw, rugged, and real.",
    name: "Arjun M.",
    trip: "Spiti Valley Road Trip",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Best honeymoon experience! Kerala backwaters at sunset were unforgettable.",
    name: "Neha & Rahul",
    trip: "Kerala Backwaters",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>What Travelers Say</h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.card}>
              <div className={styles.quoteIcon}>
                <FaQuoteLeft />
              </div>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.stars}>
                {Array.from({ length: t.rating }, (_, i) => (
                  <FaStar key={i} className={styles.star} />
                ))}
              </div>
              <div className={styles.reviewer}>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.trip}>{t.trip}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
