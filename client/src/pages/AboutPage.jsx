import { useEffect } from "react";
import styles from "./InfoPage.module.css";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us – Rivtara";
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Rivtara</h1>
        <p className={styles.subtitle}>
          Journey curators crafting calm rivers and thrilling mountain experiences across India.
        </p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Who we are</h2>
          <div className={styles.body}>
            <p>
              Rivtara is an India-based travel platform focused on curated adventures across the
              Himalayas, Western Ghats, the backwaters of Kerala, and the coasts of Goa. We are a
              small team of travelers who believe that great trips should be well-planned, honestly
              priced, and memorable.
            </p>
            <p>
              Every itinerary on Rivtara is vetted end-to-end — from accommodation quality and local
              transport reliability to the expertise of the guides and the safety of the routes.
              We only list trips we would take ourselves.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What we offer</h2>
          <div className={styles.body}>
            <ul>
              <li>Hand-picked backpacking, trekking, and weekend trips across India</li>
              <li>Transparent pricing with no hidden fees</li>
              <li>Verified partner operators and local guides</li>
              <li>Small-group travel, typically 8 – 16 people</li>
              <li>Flexible cancellation and honest reviews from real travelers</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our mission</h2>
          <div className={styles.body}>
            <p>
              To make discovering and booking unique Indian travel experiences simple, safe, and
              joyful. We want you to spend less time researching and more time being out there.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Get in touch</h2>
          <div className={styles.body}>
            <p>
              Questions, partnerships, or feedback? Email us at{" "}
              <a href="mailto:hello@rivtara.com">hello@rivtara.com</a> or visit our{" "}
              <a href="/contact">contact page</a>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
