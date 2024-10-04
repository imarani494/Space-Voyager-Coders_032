import { useNavigate } from "react-router-dom";
import "./signup.css";
import { useRef, useState } from "react";
import axios from "axios";

export const SignupPage = () => {
  let navigate = useNavigate();
  let nameref = useRef("");
  let emailref = useRef("");
  let passwordref = useRef("");

  function handleSignupSubmit(e) {
    e.preventDefault();
    const name = nameref.current.value;
    const email = emailref.current.value;
    const password = passwordref.current.value;
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }
    let obj = {
      name: name,
      email: email,
      password: password,
    };
    console.log(obj);
    axios
      .post("http://localhost:3001/api/users/register", obj)
      .then((res) => {
        alert("User registered successfully");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to register user");
      });
  }

  return (
    <div className="loginpagecom">
      <div className="background">
        <div className="shape" />
        <div className="shape" />
      </div>
      <form>
        <h3>Sign up Here</h3>
        <label htmlFor="name">Name</label>
        <input className="signupinput"
          ref={nameref}
          type="text"
          placeholder="Name"
          id="name"
          required
        />
        <label htmlFor="username">Username</label>
        <input className="signupinput"
          ref={emailref}
          type="email"
          placeholder="Email"
          id="username"
          required
        />
        <label htmlFor="password">Password</label>
        <input className="signupinput"
          ref={passwordref}
          type="password"
          placeholder="Password"
          id="password"
          required
          minLength={8}
        />
        <button className="signupbutton" id="loginbtnn"  onClick={handleSignupSubmit}>Sign up</button>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",
            fontSize: "14px",
          }}
        >
          <p>
            Already have an account?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => {
                navigate("/login");
              }}
            >
              login here
            </span>
          </p>
        </div>
        <div className="social">
          <div style={{ cursor: "pointer" }} className="go">
            <i className="fab fa-google" />
            Google
          </div>
          <div style={{ cursor: "pointer" }} className="fb">
            <i className="fab fa-facebook" /> Facebook
          </div>
        </div>
      </form>
    </div>
  );
};
