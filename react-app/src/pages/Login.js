import React from "react";
// ...existing code...

const Login = () => (
  <div className="auth-page">
    <h2 style={{ color: "#fff", marginBottom: "1.5rem" }}>Login</h2>
    <form>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <div style={{ marginTop: "1rem", textAlign: "center" }}>
      <a href="/signup">Don't have an account? Sign up</a>
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
        Sign in with School Account
      </button>
    </div>
  </div>
);

export default Login;
