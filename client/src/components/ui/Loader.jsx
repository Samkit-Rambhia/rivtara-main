import React from "react";

const spinnerStyle = {
  width: "40px",
  height: "40px",
  border: "4px solid rgba(1, 175, 209, 0.2)",
  borderTopColor: "#01afd1",
  borderRadius: "50%",
  animation: "loader-spin 0.8s linear infinite",
};

const Loader = () => (
  <>
    <style>{`
      @keyframes loader-spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 0",
      }}
    >
      <div style={spinnerStyle} />
    </div>
  </>
);

export default Loader;
