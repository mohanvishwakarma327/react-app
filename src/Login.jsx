// src/Login.js
import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-page">
      <header className="login-header">
        <h1>Welcome to VCMS</h1>
      </header>
      <main className="login-container">
        <div className="login-background">
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          </div>
        </div>
      </main>
      <footer className="login-footer">
        <p>&copy; 2025 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
