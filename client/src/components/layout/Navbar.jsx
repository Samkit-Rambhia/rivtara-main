import { useState, useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Trips", path: "/trips" },
  { label: "Backpacking", path: "/trips?category=backpacking" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const getInitial = (name) =>
    name ? name.charAt(0).toUpperCase() : <FaUser />;

  return (
    <nav className={`${styles.navbar} ${isHome ? styles.navbarHome : ""}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.brand}>
          <img src="/logo.png" alt="Rivtara" className={styles.brandLogo} />
          <div className={styles.brandText}>
            <strong>Rivtara</strong>
            <span>Journey Curators</span>
          </div>
        </Link>

        <ul className={styles.navLinks}>
          {navItems.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={styles.rightSection}>
          {user ? (
            <div className={styles.userInfo}>
              <span className={styles.userAvatar}>
                {getInitial(user.name)}
              </span>
              <span className={styles.userName}>{user.name}</span>
            </div>
          ) : (
            <Link to="/trips" className={styles.exploreBtn}>
              Plan a Trip
            </Link>
          )}

          <button
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <FaBars />
          </button>
        </div>
      </div>

      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}
        onClick={closeMenu}
      />

      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <div className={styles.mobileHeader}>
          <img src="/logo.png" alt="Rivtara" className={styles.mobileLogo} />
          <button
            className={styles.closeBtn}
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <FaTimes />
          </button>
        </div>

        <ul className={styles.mobileNavLinks}>
          {navItems.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${styles.mobileNavLink} ${
                    isActive ? styles.mobileNavLinkActive : ""
                  }`
                }
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {user ? (
          <div className={styles.mobileUserInfo}>
            <span className={styles.userAvatar}>
              {getInitial(user.name)}
            </span>
            <span className={styles.userName}>{user.name}</span>
          </div>
        ) : (
          <Link
            to="/login"
            className={styles.mobileLoginBtn}
            onClick={closeMenu}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
