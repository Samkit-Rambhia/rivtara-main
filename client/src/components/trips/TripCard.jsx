import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaRegHeart,
  FaMapMarkerAlt,
  FaClock,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";
import { WishlistContext } from "../../context/WishlistContext";
import { AuthContext } from "../../context/AuthContext";
import { formatPrice } from "../../utils/formatPrice";
import styles from "./TripCard.module.css";

const TripCard = ({ trip }) => {
  const {
    _id,
    slug,
    title,
    coverImage,
    destination,
    duration,
    price,
    category,
    rating,
    difficulty,
  } = trip;

  const { user } = useContext(AuthContext);
  const { isWishlisted, toggleWishlist } = useContext(WishlistContext);
  const wishlisted = user && _id ? isWishlisted(_id) : false;

  const handleHeartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (user && _id) toggleWishlist(_id);
  };

  const durationLabel =
    duration?.days && duration?.nights
      ? `${duration.days}D / ${duration.nights}N`
      : duration?.days
        ? `${duration.days} Days`
        : "";

  const avgRating = rating?.average ?? 0;
  const reviewCount = rating?.count ?? 0;
  const discountPercent =
    price?.original && price?.discounted && price.original > price.discounted
      ? Math.round(((price.original - price.discounted) / price.original) * 100)
      : 0;

  return (
    <Link to={`/trips/${slug}`} className={styles.card}>
      {/* Image section */}
      <div className={styles.imageWrap}>
        <img src={coverImage} alt={title} className={styles.image} />
        <div className={styles.imageOverlay} />

        {category && (
          <span className={styles.categoryBadge}>
            {category.replace("-", " ")}
          </span>
        )}

        {discountPercent > 0 && (
          <span className={styles.discountBadge}>-{discountPercent}%</span>
        )}

        <button
          className={`${styles.heartBtn} ${wishlisted ? styles.heartBtnActive : ""}`}
          onClick={handleHeartClick}
          aria-label="Toggle wishlist"
        >
          {wishlisted ? <FaHeart size={16} /> : <FaRegHeart size={16} />}
        </button>
      </div>

      {/* Content section */}
      <div className={styles.content}>
        <div className={styles.meta}>
          {destination?.name && (
            <span className={styles.metaItem}>
              <FaMapMarkerAlt size={11} />
              {destination.name}
            </span>
          )}
          {durationLabel && (
            <span className={styles.metaItem}>
              <FaClock size={11} />
              {durationLabel}
            </span>
          )}
        </div>

        <h3 className={styles.title}>{title}</h3>

        <div className={styles.bottom}>
          <div className={styles.ratingPrice}>
            {avgRating > 0 && (
              <span className={styles.rating}>
                <FaStar size={12} className={styles.ratingStar} />
                {avgRating.toFixed(1)}
                <span className={styles.ratingCount}>({reviewCount})</span>
              </span>
            )}

            <div className={styles.priceBlock}>
              {price?.original && price.original > (price?.discounted || 0) && (
                <span className={styles.originalPrice}>
                  {formatPrice(price.original)}
                </span>
              )}
              {price?.discounted && (
                <span className={styles.discountedPrice}>
                  {formatPrice(price.discounted)}
                </span>
              )}
            </div>
          </div>

          <span className={styles.arrowBtn}>
            <FaArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default TripCard;
