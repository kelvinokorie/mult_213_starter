// src/components/LoginForm.jsx
import React, { useState } from "react";

function LoginForm({ compact = false, onLogin, user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (compact && user) {
    return (
      <div className="card">
        <h2 className="card-title">Settings</h2>
        <p>Logged in as {user.email}</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2 className="card-title">{compact ? "Settings" : "Login"}</h2>

      <label className="field-label">Email</label>
      <input
        className="field-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="field-label">Password</label>
      <input
        className="field-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="btn-primary"
        onClick={() => onLogin(email, password)}
      >
        LOG IN
      </button>

      {!compact && (
        <>
          <button className="link-button" type="button">
            Forgot password?
          </button>
          <button className="btn-secondary" type="button">
            SIGN UP
          </button>
        </>
      )}
    </div>
  );
}

export default LoginForm;
