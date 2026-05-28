import { useEffect } from "react";
import styles from "./InfoPage.module.css";

const PrivacyPage = () => {
  useEffect(() => {
    document.title = "Privacy Policy – Rivtara";
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: April 18, 2026</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Who we are</h2>
          <div className={styles.body}>
            <p>
              Rivtara (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website
              rivtara.com. This policy explains what personal information we collect, how we use
              it, and your rights regarding that information.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Information we collect</h2>
          <div className={styles.body}>
            <ul>
              <li>
                <strong>Account data:</strong> your name, email address, and an encrypted password
                when you register an account.
              </li>
              <li>
                <strong>Booking data:</strong> travel dates, traveler counts, and contact details
                you provide when booking a trip.
              </li>
              <li>
                <strong>Communication:</strong> messages you send through our contact form or
                newsletter subscription.
              </li>
              <li>
                <strong>Technical data:</strong> standard server logs (IP address, user agent,
                timestamps) used for security and debugging.
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. How we use your information</h2>
          <div className={styles.body}>
            <ul>
              <li>To create and manage your Rivtara account</li>
              <li>To process bookings and communicate trip details</li>
              <li>To respond to your messages and support requests</li>
              <li>To send newsletters (only if you have subscribed)</li>
              <li>To protect the service against abuse and fraud</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. How we store and protect your data</h2>
          <div className={styles.body}>
            <p>
              Passwords are hashed using bcrypt — we never store them in plain text. Data is
              transmitted over HTTPS. Access to our database is limited to authorized personnel
              and systems required to operate the service.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Sharing</h2>
          <div className={styles.body}>
            <p>
              We do not sell your personal data. We share booking details with the trip operators
              fulfilling your booking strictly to the extent necessary to deliver the trip.
              We do not share data with advertising networks.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Cookies</h2>
          <div className={styles.body}>
            <p>
              We use a single first-party token stored in your browser&apos;s local storage to
              keep you signed in. We do not use third-party analytics or advertising cookies.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Your rights</h2>
          <div className={styles.body}>
            <p>
              You may request access to, correction of, or deletion of your personal information
              at any time by emailing{" "}
              <a href="mailto:privacy@rivtara.com">privacy@rivtara.com</a>. You can unsubscribe
              from newsletters via the link in any newsletter email.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Contact</h2>
          <div className={styles.body}>
            <p>
              Questions about this policy? Email{" "}
              <a href="mailto:hello@rivtara.com">hello@rivtara.com</a> or visit our{" "}
              <a href="/contact">contact page</a>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;
