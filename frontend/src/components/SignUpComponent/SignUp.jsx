import React, { useState } from "react";
import axios from "axios";
import "./signup.css";

function SignUp({ setComponent }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState("");
  const [labelText, setlabelText] = useState("Choose a Profile Image");
  const handleSignUp = async () => {
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("img", img);
      await axios.post("http://localhost:4000/api/v1/auth/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("User registered successfully");
    } catch (error) {
      alert("Error during registration");
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="in-container">
        <div className="heading">
          <h2>Sign Up</h2>
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
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-div">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-div">
          <label for="fileInput" class="custom-label">
            {labelText}
          </label>
          <input
            id="fileInput"
            type="file"
            onChange={(e) => {
              setImg(e.target.files[0]);

              console.log(e.target.files[0]);

              setlabelText("Profile Image selected");
            }}
            accept="image/*"
          />
        </div>

        <div className="btn-div">
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
        <p>
          Already have an account ?{" "}
          <span
            onClick={() => {
              setComponent(true);
            }}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
