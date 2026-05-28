import React from "react";
import { FaStar } from "react-icons/fa";

const RatingStars = ({ rating = 0, count = 0 }) => {
  const totalStars = 5;
  const filledStars = Math.round(rating);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
      {Array.from({ length: totalStars }, (_, i) => (
        <FaStar
          key={i}
          size={14}
          color={i < filledStars ? "#FBBF24" : "#4B5563"}
        />
      ))}
      {count > 0 && (
        <span
          style={{
            marginLeft: "4px",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.8)",
          }}
        >
          ({count})
        </span>
      )}
    </div>
  );
};

export default RatingStars;
