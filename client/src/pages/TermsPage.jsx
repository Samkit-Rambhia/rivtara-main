import { useEffect } from "react";
import styles from "./InfoPage.module.css";

const TermsPage = () => {
  useEffect(() => {
    document.title = "Terms of Service – Rivtara";
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.updated}>Last updated: April 18, 2026</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Agreement</h2>
          <div className={styles.body}>
            <p>
              By accessing or using rivtara.com (the &quot;Service&quot;), you agree to these
              Terms of Service. If you do not agree, please do not use the Service.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Accounts</h2>
          <div className={styles.body}>
            <p>
              You are responsible for keeping your login credentials confidential and for all
              activity that occurs under your account. Notify us at{" "}
              <a href="mailto:hello@rivtara.com">hello@rivtara.com</a> immediately if you suspect
              unauthorized access.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Bookings and payments</h2>
          <div className={styles.body}>
            <ul>
              <li>
                Prices shown include the services listed under &quot;Inclusions&quot; on each
                trip page. Exclusions are listed separately.
              </li>
              <li>
                A booking is confirmed only after full payment has been received by Rivtara or
                the partner operator designated for the trip.
              </li>
              <li>
                Cancellation and refund terms vary by trip and are displayed on the trip detail
                page before booking.
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Traveler responsibilities</h2>
          <div className={styles.body}>
            <p>
              Travelers are responsible for valid identification, travel insurance where
              recommended, fitness level appropriate to the trip difficulty, and adherence to
              itineraries and safety briefings. Rivtara may refuse or cancel a booking for
              reasonable safety or legal reasons.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Limitation of liability</h2>
          <div className={styles.body}>
            <p>
              Rivtara acts as a curator and facilitator for trips operated by partner operators.
              To the extent permitted by law, Rivtara is not liable for indirect, incidental, or
              consequential damages. Our total liability for any claim related to a booking is
              limited to the amount paid for that booking.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Content</h2>
          <div className={styles.body}>
            <p>
              Reviews, photos, and other user-generated content remain owned by the contributor;
              by posting, you grant Rivtara a non-exclusive license to display that content on
              the Service. Do not post anything unlawful, hateful, or infringing on others&apos;
              rights.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Changes</h2>
          <div className={styles.body}>
            <p>
              We may update these terms from time to time. We will post the revised date at the
              top of this page. Continued use of the Service after changes indicates acceptance
              of the new terms.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Governing law</h2>
          <div className={styles.body}>
            <p>
              These terms are governed by the laws of India. Disputes will be resolved in the
              courts of New Delhi unless otherwise required by applicable law.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;
