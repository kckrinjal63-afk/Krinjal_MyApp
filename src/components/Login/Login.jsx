import React from "react";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  //handle Submit

  const handleSubmit = (event) => {
    event.preventDefault(); 
    alert(`Submitted: ${email}`);
      navigate("/");
      
    // if (!email.includes("@")) {
    //   setError('Email must include "@"');
    // } else {
    //   setError("");
    //    alert(`Submitted: ${email}`);
    //    navigate("/");
    // }
  };

  return (
    <div className="login-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="email">
          <label>email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="password">
          <label> Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">LogIn</button>
      </form>
    </div>
  );
};

export default Login;