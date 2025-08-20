import React from "react";
// ...existing code...

const Signup = () => (
  <div className="auth-page">
    <h2 style={{ color: "#fff", marginBottom: "1.5rem" }}>Signup</h2>
    <form>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <input type="text" placeholder="Name" required />
      <button type="submit">Signup</button>
    </form>
    <div style={{ marginTop: "1rem", textAlign: "center" }}>
      <a href="/login">Already have an account? Login</a>
    </div>
    <div style={{ marginTop: "2rem", textAlign: "center", color: "#b3b3b9" }}>
      <button
        type="button"
        style={{
          background: "#23232a",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          padding: "0.7rem 1.5rem",
          cursor: "pointer",
          marginTop: "0.5rem",
        }}
      >
        Sign up with School Account
      </button>
    </div>
  </div>
);

export default Signup;
