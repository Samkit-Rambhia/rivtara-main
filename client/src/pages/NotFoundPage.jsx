import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="page-enter" style={pageStyles}>
      <div style={contentStyles}>
        <h1 style={codeStyles}>404</h1>
        <h2 style={headingStyles}>Page Not Found</h2>
        <p style={subStyles}>
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link to="/" style={btnStyles}>
          Go Home
        </Link>
      </div>
    </div>
  );
};

/* ===== Inline Styles ===== */
const pageStyles = {
  paddingTop: "68px",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#FFFFFF",
};

const contentStyles = {
  textAlign: "center",
  padding: "0 24px",
};

const codeStyles = {
  fontSize: "8rem",
  fontWeight: 800,
  color: "#01afd1",
  lineHeight: 1,
  marginBottom: "8px",
};

const headingStyles = {
  fontSize: "1.875rem",
  fontWeight: 700,
  color: "#112023",
  marginBottom: "12px",
};

const subStyles = {
  fontSize: "1rem",
  color: "#6B7280",
  marginBottom: "32px",
  lineHeight: 1.6,
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

export default NotFoundPage;
