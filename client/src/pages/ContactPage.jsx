import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { sendContactMessage } from "../services/contactService";
import styles from "./InfoPage.module.css";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Contact – Rivtara";
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    setSubmitting(true);
    try {
      const { data } = await sendContactMessage(form);
      toast.success(data.message || "Message sent.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Couldn't send message. Please email us directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>
          We usually respond within one business day.
        </p>

        <div className={styles.contactCard}>
          <span className={styles.contactLabel}>Email</span>
          <span className={styles.contactValue}>
            <a href="mailto:hello@rivtara.com">hello@rivtara.com</a>
          </span>
          <span className={styles.contactLabel}>Phone</span>
          <span className={styles.contactValue}>+91 98330 69564</span>
          <span className={styles.contactLabel}>Address</span>
          <span className={styles.contactValue}>
            B-903, Bajaj Emerald,<br />
            Sahar Road, Opp. Top-10 Mobile Shop,<br />
            Andheri East, Mumbai - 400069
          </span>
          <span className={styles.contactLabel}>Hours</span>
          <span className={styles.contactValue}>
            Mon – Sat, 10:00 – 19:00 IST
          </span>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Send us a message</h2>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              required
            />
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
            <textarea
              className={styles.textarea}
              name="message"
              placeholder="How can we help?"
              value={form.message}
              onChange={handleChange}
              minLength={10}
              required
            />
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send message"}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
