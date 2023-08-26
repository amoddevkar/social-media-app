import React, { useState } from "react";
import "./signin.css";
import axios from "axios";

function SignIn({ setComponent }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/auth/signin",
        {
          username,
          password,
        }
      );
      const token = response.data.token;
      console.log(token);
    } catch (error) {
      alert("Authentication failed");
    }
  };

  return (
    <div className="container">
      <div className="in-container">
        <div className="heading">
          <h2>Login</h2>
          <h3>Social Media App</h3>
        </div>
        <div className="input-div">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-div">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p style={{ color: "rgb(0, 123, 255)" }}>Forgot Password</p>
        <div className="btn-div">
          <button onClick={handleSignIn}>Login</button>
        </div>
        <p>
          Don't have an account ?{" "}
          <span
            onClick={() => {
              setComponent(false);
            }}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
