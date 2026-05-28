import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Trips", path: "/trips" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const tripTypes = [
  { label: "Backpacking", path: "/trips?category=backpacking" },
  { label: "Trekking", path: "/trips?category=trekking" },
  { label: "Weekend Getaways", path: "/trips?category=weekend" },
  { label: "International", path: "/trips?category=international" },
];

const legalLinks = [
  { label: "Privacy Policy", path: "/privacy" },
  { label: "Terms of Service", path: "/terms" },
];

const socials = [
  { icon: <FaFacebook />, href: "#", label: "Facebook" },
  { icon: <FaInstagram />, href: "#", label: "Instagram" },
  { icon: <FaYoutube />, href: "#", label: "YouTube" },
  { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          {/* Column 1 - Brand */}
          <div>
            <Link to="/" className={styles.brandLink}>
              <img src="/logo.png" alt="Rivtara" className={styles.footerLogo} />
            </Link>
            <p className={styles.tagline}>
              Experience calm of rivers & thrill of mountains
            </p>
            <div className={styles.socials}>
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className={styles.socialIcon}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className={styles.link}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Trip Types */}
          <div>
            <h4 className={styles.columnTitle}>Trip Types</h4>
            <ul className={styles.linkList}>
              {tripTypes.map(({ label, path }) => (
                <li key={label}>
                  <Link to={path} className={styles.link}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className={styles.columnTitle}>Contact</h4>
            <div className={styles.contactItem}>
              <FaEnvelope className={styles.contactIcon} />
              <span>hello@rivtara.com</span>
            </div>
            <div className={styles.contactItem}>
              <FaPhoneAlt className={styles.contactIcon} />
              <span>+91 98330 69564</span>
            </div>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <span>
                B-903, Bajaj Emerald, Sahar Road,<br />
                Opp. Top-10 Mobile Shop,<br />
                Andheri East, Mumbai - 400069
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <span>&copy; 2026 Rivtara. All rights reserved.</span>
          <div className={styles.legalLinks}>
            {legalLinks.map(({ label, path }) => (
              <Link key={path} to={path} className={styles.legalLink}>
                {label}
              </Link>
            ))}
          </div>
          <span className={styles.bottomRight}>
            Made with <FaHeart className={styles.heart} /> for travelers
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
