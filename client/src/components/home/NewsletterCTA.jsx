import { useState } from "react";
import toast from "react-hot-toast";
import { subscribeNewsletter } from "../../services/subscribeService";
import styles from "./NewsletterCTA.module.css";

const NewsletterCTA = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }
    setSubmitting(true);
    try {
      const { data } = await subscribeNewsletter(email.trim());
      toast.success(data.message || "Subscribed successfully!");
      setEmail("");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Subscription failed. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Get Exclusive Trip Deals</h2>
        <p className={styles.subtext}>
          Subscribe to our newsletter for special offers and new trip updates
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            className={styles.input}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitting}
            autoComplete="email"
            required
          />
          <button
            type="submit"
            className={styles.btn}
            disabled={submitting}
          >
            {submitting ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterCTA;
