import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaMapMarkerAlt,
  FaClock,
  FaCheck,
  FaTimes,
  FaStar,
  FaChevronDown,
  FaUsers,
  FaMountain,
  FaCalendar,
  FaUtensils,
  FaHome,
} from "react-icons/fa";
import toast from "react-hot-toast";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { formatPrice } from "../utils/formatPrice";
import Loader from "../components/ui/Loader";
import { getDemoTripBySlug } from "../data/demoTrips";
import styles from "./TripDetailPage.module.css";

const TABS = ["Overview", "Itinerary", "Inclusions", "Reviews"];

const TripDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [trip, setTrip] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");

  // Booking state
  const [selectedDate, setSelectedDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  // Review form state
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewHover, setReviewHover] = useState(0);
  const [reviewComment, setReviewComment] = useState("");
  const [submittingReview, setSubmittingReview] = useState(false);

  useEffect(() => {
    const fetchTrip = () => {
      try {
        setLoading(true);
        const tripData = getDemoTripBySlug(slug);

        if (!tripData) {
          setError("Trip not found.");
          setTrip(null);
          return;
        }

        setTrip(tripData);

        if (tripData.startDates?.length > 0) {
          setSelectedDate(tripData.startDates[0]);
        }
      } catch (err) {
        setError("Trip not found.");
        console.error("Failed to fetch trip:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTrip();
  }, [slug]);

  const pricePerPerson = trip?.price?.discounted || trip?.price?.original || 0;
  const total = pricePerPerson * (adults + children * 0.5);

  const handleBookNow = async () => {
    if (!user) {
      toast("Please log in to book a trip", { icon: "🔒" });
      navigate("/login", { state: { from: `/trips/${slug}` } });
      return;
    }

    if (!selectedDate) {
      toast.error("Please select a travel date");
      return;
    }

    if (trip?._id?.startsWith("demo-")) {
      navigate("/booking/confirm", {
        state: {
          booking: {
            _id: `demo-booking-${Date.now()}`,
            trip: trip._id,
            startDate: selectedDate,
            travelers: { adults, children },
            totalPrice: total,
          },
          tripName: trip.title,
          date: selectedDate,
          travelers: { adults, children },
          totalPrice: total,
        },
      });
      return;
    }

    try {
      const payload = {
        trip: trip._id,
        startDate: selectedDate,
        travelers: { adults, children },
        totalPrice: total,
      };
      const { data } = await api.post("/bookings", payload);
      navigate("/booking/confirm", {
        state: {
          booking: data.booking || data,
          tripName: trip.title,
          date: selectedDate,
          travelers: { adults, children },
          totalPrice: total,
        },
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Booking failed. Please try again.");
    }
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (reviewRating === 0) {
      toast.error("Please select a rating");
      return;
    }
    try {
      setSubmittingReview(true);
      const { data } = await api.post("/reviews", {
        trip: trip._id,
        rating: reviewRating,
        comment: reviewComment,
      });
      const newReview = data.review || data;
      setReviews((prev) => [newReview, ...prev]);
      setReviewRating(0);
      setReviewComment("");
      toast.success("Review submitted!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to submit review");
    } finally {
      setSubmittingReview(false);
    }
  };

  if (loading) return <div className={styles.page}><Loader /></div>;
  if (error || !trip) {
    return (
      <div className={styles.page}>
        <p className={styles.error}>{error || "Trip not found."}</p>
      </div>
    );
  }

  const durationLabel =
    trip.duration?.days && trip.duration?.nights
      ? `${trip.duration.days}D/${trip.duration.nights}N`
      : trip.duration?.days
        ? `${trip.duration.days}D`
        : "";

  const averageRating = trip.rating?.average || 0;
  const reviewCount = trip.rating?.count || 0;

  return (
    <div className={`${styles.page} page-enter`}>
      <div className={styles.container}>
        {/* Image Gallery */}
        {trip.images?.length > 0 && (
          <div className={styles.gallery}>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={trip.images.length > 1}
              spaceBetween={0}
              slidesPerView={1}
            >
              {trip.images.map((img, i) => (
                <SwiperSlide key={i} className={styles.gallerySlide}>
                  <img src={img} alt={`${trip.title} - ${i + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        <div className={styles.layout}>
          {/* Left Column - Content */}
          <div className={styles.mainContent}>
            {/* Header */}
            <div className={styles.header}>
              <h1 className={styles.title}>{trip.title}</h1>
              {trip.subtitle && (
                <p className={styles.subtitle}>{trip.subtitle}</p>
              )}
              <div className={styles.badges}>
                {trip.destination?.name && (
                  <span className={styles.badge}>
                    <FaMapMarkerAlt size={12} />
                    {trip.destination.name}
                  </span>
                )}
                {durationLabel && (
                  <span className={styles.badge}>
                    <FaClock size={12} />
                    {durationLabel}
                  </span>
                )}
                {trip.difficulty && (
                  <span className={styles.badge}>
                    <FaMountain size={12} />
                    {trip.difficulty}
                  </span>
                )}
                {trip.category && (
                  <span className={styles.badge}>
                    <FaUsers size={12} />
                    {trip.category}
                  </span>
                )}
              </div>
              {averageRating > 0 && (
                <div className={styles.ratingRow}>
                  <FaStar className={styles.ratingRowStar} />
                  <span className={styles.ratingRowValue}>
                    {averageRating.toFixed(1)}
                  </span>
                  <span className={styles.ratingRowCount}>
                    ({reviewCount} reviews)
                  </span>
                </div>
              )}
            </div>

            {/* Tabs */}
            <div className={styles.tabs}>
              {TABS.map((tab) => (
                <button
                  key={tab}
                  className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className={styles.tabContent} key={activeTab}>
              {activeTab === "Overview" && (
                <p className={styles.description}>{trip.description}</p>
              )}

              {activeTab === "Itinerary" && (
                <div className={styles.timeline}>
                  {trip.itinerary?.map((day, idx) => (
                    <div key={idx} className={styles.timelineItem}>
                      <div className={styles.timelineCircle} />
                      <div className={styles.timelineLine} />
                      <span className={styles.dayLabel}>Day {day.day || idx + 1}</span>
                      <h4 className={styles.dayTitle}>{day.title}</h4>
                      {day.description && (
                        <p className={styles.dayDescription}>{day.description}</p>
                      )}
                      {day.highlights?.length > 0 && (
                        <div className={styles.dayHighlights}>
                          {day.highlights.map((h, i) => (
                            <span key={i} className={styles.highlightPill}>{h}</span>
                          ))}
                        </div>
                      )}
                      <div className={styles.dayMeta}>
                        {day.meals && (
                          <span className={styles.dayMetaItem}>
                            <FaUtensils size={11} />
                            {day.meals}
                          </span>
                        )}
                        {day.accommodation && (
                          <span className={styles.dayMetaItem}>
                            <FaHome size={11} />
                            {day.accommodation}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                  {(!trip.itinerary || trip.itinerary.length === 0) && (
                    <p className={styles.noReviews}>Itinerary details coming soon.</p>
                  )}
                </div>
              )}

              {activeTab === "Inclusions" && (
                <div className={styles.inclusionsGrid}>
                  <div className={styles.inclusionCol}>
                    <h3>Inclusions</h3>
                    {trip.inclusions?.map((item, i) => (
                      <div key={i} className={styles.inclusionItem}>
                        <FaCheck size={14} className={`${styles.inclusionIcon} ${styles.iconGreen}`} />
                        <span>{item}</span>
                      </div>
                    ))}
                    {(!trip.inclusions || trip.inclusions.length === 0) && (
                      <p className={styles.noReviews}>No inclusions listed.</p>
                    )}
                  </div>
                  <div className={styles.inclusionCol}>
                    <h3>Exclusions</h3>
                    {trip.exclusions?.map((item, i) => (
                      <div key={i} className={styles.inclusionItem}>
                        <FaTimes size={14} className={`${styles.inclusionIcon} ${styles.iconRed}`} />
                        <span>{item}</span>
                      </div>
                    ))}
                    {(!trip.exclusions || trip.exclusions.length === 0) && (
                      <p className={styles.noReviews}>No exclusions listed.</p>
                    )}
                  </div>
                </div>
              )}

              {activeTab === "Reviews" && (
                <div>
                  {reviews.length > 0 ? (
                    <div className={styles.reviewsList}>
                      {reviews.map((review, idx) => (
                        <div key={review._id || idx} className={styles.reviewCard}>
                          <div className={styles.reviewHeader}>
                            <span className={styles.reviewUser}>
                              {review.user?.name || "Traveler"}
                            </span>
                            <span className={styles.reviewDate}>
                              {review.createdAt
                                ? new Date(review.createdAt).toLocaleDateString("en-IN", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  })
                                : ""}
                            </span>
                          </div>
                          <div className={styles.reviewStars}>
                            {Array.from({ length: 5 }, (_, i) => (
                              <FaStar
                                key={i}
                                size={14}
                                className={
                                  i < (review.rating || 0)
                                    ? styles.starFilled
                                    : styles.starEmpty
                                }
                              />
                            ))}
                          </div>
                          <p className={styles.reviewComment}>{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className={styles.noReviews}>
                      No reviews yet. Be the first to review this trip!
                    </p>
                  )}

                  {/* Add Review Form */}
                  {user && (
                    <form className={styles.addReview} onSubmit={handleSubmitReview}>
                      <h4 className={styles.addReviewTitle}>Write a Review</h4>
                      <div className={styles.ratingSelector}>
                        {Array.from({ length: 5 }, (_, i) => (
                          <button
                            key={i}
                            type="button"
                            className={`${styles.ratingStar} ${
                              i < (reviewHover || reviewRating)
                                ? styles.ratingStarActive
                                : ""
                            }`}
                            onClick={() => setReviewRating(i + 1)}
                            onMouseEnter={() => setReviewHover(i + 1)}
                            onMouseLeave={() => setReviewHover(0)}
                          >
                            <FaStar />
                          </button>
                        ))}
                      </div>
                      <textarea
                        className={styles.reviewTextarea}
                        placeholder="Share your experience..."
                        value={reviewComment}
                        onChange={(e) => setReviewComment(e.target.value)}
                        required
                      />
                      <button
                        type="submit"
                        className={styles.submitReview}
                        disabled={submittingReview}
                      >
                        {submittingReview ? "Submitting..." : "Submit Review"}
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Pricing Card */}
          <div className={styles.pricingCard}>
            <div className={styles.priceSection}>
              {trip.price?.original &&
                trip.price.original > trip.price.discounted && (
                  <span className={styles.originalPrice}>
                    {formatPrice(trip.price.original)}
                  </span>
                )}
              <span className={styles.discountedPrice}>
                {formatPrice(pricePerPerson)}
              </span>
              <span className={styles.perPerson}>/person</span>
            </div>

            <div className={styles.pricePerks}>
              <span>Free cancellation up to 48 hours</span>
              <span>No hidden charges</span>
            </div>

            {/* Date Selector */}
            {trip.startDates?.length > 0 && (
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  <FaCalendar size={12} /> Travel Date
                </label>
                <div className={styles.selectWrapper}>
                  <select
                    className={styles.selectField}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  >
                    {trip.startDates.map((date, i) => (
                      <option key={i} value={date}>
                        {new Date(date).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </option>
                    ))}
                  </select>
                  <FaChevronDown className={styles.selectArrow} />
                </div>
              </div>
            )}

            {/* Travelers */}
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>
                <FaUsers size={12} /> Travelers
              </label>
              <div className={styles.stepper}>
                <span className={styles.stepperLabel}>Adults</span>
                <div className={styles.stepperControls}>
                  <button
                    type="button"
                    className={styles.stepperBtn}
                    onClick={() => setAdults((a) => Math.max(1, a - 1))}
                    disabled={adults <= 1}
                  >
                    -
                  </button>
                  <span className={styles.stepperValue}>{adults}</span>
                  <button
                    type="button"
                    className={styles.stepperBtn}
                    onClick={() => setAdults((a) => a + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className={`${styles.stepper} ${styles.stepperOffset}`}>
                <span className={styles.stepperLabel}>Children</span>
                <div className={styles.stepperControls}>
                  <button
                    type="button"
                    className={styles.stepperBtn}
                    onClick={() => setChildren((c) => Math.max(0, c - 1))}
                    disabled={children <= 0}
                  >
                    -
                  </button>
                  <span className={styles.stepperValue}>{children}</span>
                  <button
                    type="button"
                    className={styles.stepperBtn}
                    onClick={() => setChildren((c) => c + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Total */}
            <div className={styles.totalRow}>
              <span className={styles.totalLabel}>Total</span>
              <span className={styles.totalPrice}>{formatPrice(total)}</span>
            </div>

            <button
              type="button"
              className={styles.bookBtn}
              onClick={handleBookNow}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetailPage;
