import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      className="top-bar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5rem 2rem",
        background: "#18181b",
        borderBottom: "1px solid #222",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <span
          style={{
            fontWeight: 700,
            fontSize: "1.3rem",
            letterSpacing: "0.02em",
          }}
        >
          EEE School Calendar
        </span>
        <div
          className="nav-links-desktop"
          style={{ display: "flex", gap: "1.5rem" }}
        >
          <Link
            to="/"
            className="nav-link active"
            style={{ marginRight: "0.5rem" }}
          >
            Calendar
          </Link>
          <Link
            to="/clubs"
            className="nav-link"
            style={{ marginRight: "0.5rem" }}
          >
            Clubs
          </Link>
          <Link to="/teams" className="nav-link">
            Teams
          </Link>
        </div>
      </div>
      <div
        className="nav-actions-desktop"
        style={{ display: "flex", alignItems: "center", gap: "1rem" }}
      >
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <Link to="/signup" className="nav-link">
          Signup
        </Link>
        <div
          className="profile-icon"
          style={{
            marginLeft: "0.5rem",
            background: "#232326",
            color: "#fafafa",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 600,
          }}
        >
          U
        </div>
      </div>
      {/* Hamburger for mobile */}
      <button
        className="nav-hamburger"
        style={{
          display: "none",
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: "2rem",
          cursor: "pointer",
          marginLeft: "1rem",
        }}
        aria-label="Menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      {/* Dropdown menu for mobile */}
      {menuOpen && (
        <div
          className="nav-dropdown"
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            background: "#232326",
            borderRadius: "0 0 12px 12px",
            boxShadow: "0 2px 12px #0006",
            padding: "1rem 1.5rem",
            zIndex: 100,
            minWidth: "180px",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
          }}
        >
          <Link
            to="/"
            className="nav-link"
            style={{ paddingBottom: "0.2rem", borderBottom: "1px solid #222" }}
            onClick={() => setMenuOpen(false)}
          >
            Calendar
          </Link>
          <Link
            to="/clubs"
            className="nav-link"
            style={{ paddingBottom: "0.2rem", borderBottom: "1px solid #222" }}
            onClick={() => setMenuOpen(false)}
          >
            Clubs
          </Link>
          <Link
            to="/teams"
            className="nav-link"
            style={{ paddingBottom: "0.2rem", borderBottom: "1px solid #222" }}
            onClick={() => setMenuOpen(false)}
          >
            Teams
          </Link>
          <Link
            to="/login"
            className="nav-link"
            style={{ paddingBottom: "0.2rem", borderBottom: "1px solid #222" }}
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Signup
          </Link>
        </div>
      )}
      {/* Responsive styles */}
      <style>{`
          @media (max-width: 900px) {
            .top-bar {
              padding: 0.5rem 0.5rem !important;
            }
            .nav-links-desktop, .nav-actions-desktop {
              display: none !important;
            }
            .nav-hamburger {
              display: block !important;
            }
          }
          @media (max-width: 700px) {
            .top-bar {
              padding: 0.5rem 0.3rem !important;
            }
          }
        `}</style>
    </div>
  );
};

export default Navbar;
