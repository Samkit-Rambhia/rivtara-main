import { Link, useLocation, Navigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { formatPrice } from "../utils/formatPrice";

const BookingConfirmPage = () => {
  const location = useLocation();
  const state = location.state;

  if (!state) {
    return <Navigate to="/trips" replace />;
  }

  const { tripName, date, travelers, totalPrice } = state;

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "N/A";

  const travelerSummary = [];
  if (travelers?.adults) {
    travelerSummary.push(
      `${travelers.adults} Adult${travelers.adults > 1 ? "s" : ""}`
    );
  }
  if (travelers?.children) {
    travelerSummary.push(
      `${travelers.children} Child${travelers.children > 1 ? "ren" : ""}`
    );
  }

  return (
    <div className="page-enter" style={pageStyles}>
      <div style={cardStyles}>
        <FaCheckCircle style={iconStyles} />
        <h1 style={headingStyles}>Booking Confirmed!</h1>
        <p style={subStyles}>
          Your adventure has been booked successfully. Get ready for an
          unforgettable experience!
        </p>

        <div style={detailsStyles}>
          <div style={detailRowStyles}>
            <span style={detailLabelStyles}>Trip</span>
            <span style={detailValueStyles}>{tripName || "N/A"}</span>
          </div>
          <div style={dividerStyles} />
          <div style={detailRowStyles}>
            <span style={detailLabelStyles}>Date</span>
            <span style={detailValueStyles}>{formattedDate}</span>
          </div>
          <div style={dividerStyles} />
          <div style={detailRowStyles}>
            <span style={detailLabelStyles}>Travelers</span>
            <span style={detailValueStyles}>
              {travelerSummary.join(", ") || "N/A"}
            </span>
          </div>
          <div style={dividerStyles} />
          <div style={detailRowStyles}>
            <span style={detailLabelStyles}>Total Price</span>
            <span style={{ ...detailValueStyles, ...totalStyles }}>
              {totalPrice ? formatPrice(totalPrice) : "N/A"}
            </span>
          </div>
        </div>

        <Link to="/trips" style={btnStyles}>
          Browse More Trips
        </Link>
      </div>
    </div>
  );
};

/* ===== Inline Styles ===== */
const pageStyles = {
  paddingTop: "calc(68px + 60px)",
  paddingBottom: "60px",
  minHeight: "100vh",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  background: "#F5F5F5",
};

const cardStyles = {
  width: "100%",
  maxWidth: "520px",
  background: "#FFFFFF",
  borderRadius: "16px",
  padding: "48px 40px",
  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
  textAlign: "center",
  margin: "0 24px",
};

const iconStyles = {
  fontSize: "64px",
  color: "#10B981",
  marginBottom: "20px",
};

const headingStyles = {
  fontSize: "1.875rem",
  fontWeight: 800,
  color: "#112023",
  marginBottom: "12px",
};

const subStyles = {
  fontSize: "0.875rem",
  color: "#6B7280",
  lineHeight: 1.6,
  marginBottom: "32px",
  maxWidth: "400px",
  marginLeft: "auto",
  marginRight: "auto",
};

const detailsStyles = {
  background: "#F5F5F5",
  borderRadius: "12px",
  padding: "24px",
  marginBottom: "32px",
  textAlign: "left",
};

const detailRowStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 0",
};

const detailLabelStyles = {
  fontSize: "0.875rem",
  color: "#6B7280",
  fontWeight: 500,
};

const detailValueStyles = {
  fontSize: "0.875rem",
  color: "#112023",
  fontWeight: 600,
};

const totalStyles = {
  fontSize: "1.125rem",
  color: "#01afd1",
  fontWeight: 800,
};

const dividerStyles = {
  height: "1px",
  background: "#D1D1D1",
  margin: "4px 0",
};

const btnStyles = {
  display: "inline-block",
  padding: "14px 36px",
  background: "#FEE60B",
  color: "#112023",
  borderRadius: "9999px",
  fontWeight: 700,
  fontSize: "1rem",
  textDecoration: "none",
  transition: "all 0.2s ease",
};

export default BookingConfirmPage;
