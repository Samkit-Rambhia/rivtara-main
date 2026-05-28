import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaMountain,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";
import styles from "./Hero.module.css";

const activities = [
  {
    title: "Trekking",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80",
    count: "120+ going",
  },
  {
    title: "River Rafting",
    image: "https://images.unsplash.com/photo-1530866495561-507c83e4e69a?w=400&q=80",
    count: "60 people going",
  },
  {
    title: "Camping",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=80",
    count: "85 people going",
  },
];

const Hero = () => {
  const navigate = useNavigate();
  const [searchForm, setSearchForm] = useState({
    destination: "",
    date: "",
    travelers: "2 adults",
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchForm.destination) params.set("search", searchForm.destination);
    navigate(`/trips?${params.toString()}`);
  };

  return (
    <section className={styles.hero}>
      {/* Decorative dashed circles */}
      <div className={styles.decoCircle1} />
      <div className={styles.decoCircle2} />
      <div className={styles.decoCircle3} />

      <div className={styles.container}>
        {/* Left content */}
        <div className={styles.left}>
          <div className={styles.categories}>
            <span>CURATED ESCAPES</span>
            <span className={styles.catDivider}>|</span>
            <span>LOCAL GUIDES</span>
            <span className={styles.catDivider}>|</span>
            <span>SEAMLESS BOOKING</span>
          </div>

          <h1 className={styles.heading}>
            Find your next<br />
            unforgettable<br />
            travel story
          </h1>

          <p className={styles.subtitle}>
            From mountain dawns to coastal sunsets, discover thoughtfully
            designed itineraries that feel personal from day one.
          </p>

          <div className={styles.activitySection}>
            <h3 className={styles.activityLabel}>ACTIVITY LIST</h3>
            <div className={styles.activityCards}>
              {activities.map((act, i) => (
                <Link
                  to={`/trips?search=${act.title}`}
                  key={act.title}
                  className={`${styles.activityCard} ${
                    i === 1 ? styles.activityCardTilted : ""
                  }`}
                >
                  <div className={styles.activityImgWrap}>
                    <img src={act.image} alt={act.title} className={styles.activityImg} />
                  </div>
                  <h4 className={styles.activityTitle}>{act.title}</h4>
                  <span className={styles.activityCount}>
                    <FaUsers size={11} />
                    {act.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right hero image */}
        <div className={styles.right}>
          <div className={styles.heroImageWrap}>
            <img
              src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=900&q=80"
              alt="Adventure camping"
              className={styles.heroImage}
            />
            <div className={styles.bigText}>
              <span>RI</span>
              <span>VT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom search bar */}
      <form className={styles.searchBar} onSubmit={handleSearch}>
        <div className={styles.searchField}>
          <FaMountain className={styles.searchIcon} />
          <div>
            <span className={styles.searchLabel}>ACTIVITY</span>
            <span className={styles.searchValue}>Adventure</span>
          </div>
        </div>
        <div className={styles.searchDivider} />
        <div className={styles.searchField}>
          <FaMapMarkerAlt className={styles.searchIcon} />
          <div>
            <span className={styles.searchLabel}>LOCATION</span>
            <input
              className={styles.searchInput}
              placeholder="Any destination"
              value={searchForm.destination}
              onChange={(e) =>
                setSearchForm({ ...searchForm, destination: e.target.value })
              }
            />
          </div>
        </div>
        <div className={styles.searchDivider} />
        <div className={styles.searchField}>
          <FaCalendarAlt className={styles.searchIcon} />
          <div>
            <span className={styles.searchLabel}>DATE</span>
            <input
              type="date"
              className={styles.searchInput}
              value={searchForm.date}
              onChange={(e) =>
                setSearchForm({ ...searchForm, date: e.target.value })
              }
            />
          </div>
        </div>
        <div className={styles.searchDivider} />
        <div className={styles.searchField}>
          <FaUsers className={styles.searchIcon} />
          <div>
            <span className={styles.searchLabel}>PARTICIPANT</span>
            <span className={styles.searchValue}>{searchForm.travelers}</span>
          </div>
        </div>
        <button type="submit" className={styles.searchBtn}>
          <FaArrowRight />
        </button>
      </form>
    </section>
  );
};

export default Hero;
