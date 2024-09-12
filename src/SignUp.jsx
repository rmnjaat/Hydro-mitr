import React, { useState } from "react";
import "./signup.css";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

function SignUp() {
  //   const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasswod] = useState("");
  const [confPassword, setconfPassword] = useState("");

  const navigate = useNavigate();
  const auth = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confPassword) {
      try {
        const res = await auth?.signup(username, email, password);
        setusername("");
        setEmail("");
        setPasswod("");
        setconfPassword("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="signup-container">
        <div className="signup-form">
          <h2 className="signup-title">Create Your Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="name"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                placeholder="Choose a username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                value={password}
                onChange={(e) => setPasswod(e.target.value)}
                type="password"
                id="password"
                placeholder="Create a password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                name="confirmPassword"
                value={confPassword}
                onChange={(e) => setconfPassword(e.target.value)}
                type="password"
                id="confirm-password"
                placeholder="Confirm your password"
                required
              />
            </div>
            <button
              type="submit"
              className="signup-button"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
            <p className="login-link">
              Already have an account? <a href="/login">Log in</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
