import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./LogIn.css";

function LogIn() {
  const domain = import.meta.env.VITE_REACT_APP_DOMAIN;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [myerror, setError] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${domain}/user/login`, {
        username,
        password,
      });

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("isAuthenticated", true);
        window.location.href = "/";
      }
    } catch (error) {
      setError(1);
      console.error("ERROR: ", error);
    }
  };

  return (
    <>
      <div className="login-body">
        <div className="login-container">
          <h1>Log in</h1>

          <form onSubmit={handleSubmit}>
            <div className="login-form">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="inputClass"
                id="usernameInput"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <i className="bx bxs-user-circle"></i>
            </div>

            <div className="login-form">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="inputClass"
                id="userpassInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
              <i className="bx bxs-lock-alt"></i>
            </div>

            <div className="remember-forgot">
              <label htmlFor="rememberMe">
                <input type="checkbox" id="rememberMe" />
                Remember me
              </label>
              <Link to="/forgot_password">Forgot password?</Link>
            </div>

            <button className="btn" type="submit">
              Login
            </button>

            <div className="register-link">
              Don't have an account? <Link to="/sign_up">Register</Link>
            </div>
              {(myerror)?<div style={{textAlign: 'center', color:"red"}}>! Invalid Credentials !</div>:""}
          </form>
        </div>
      </div>
    </>
  );
}

export default LogIn;
