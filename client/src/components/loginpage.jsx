import { useRef } from "react";
import "./loginPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { isLogin } from "../redux/actions";

export const LoginPage = () => {
  let emailref = useRef("");
  let passwordref = useRef("");
  let navigate = useNavigate();
  let dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    let email = emailref.current.value;
    let password = passwordref.current.value;
    if (!email && !password) {
      alert("Please fill all fields");
      return;
    }
    let obj = {
      email,
      password,
    };
    axios
      .post("http://localhost:3001/api/users/login", obj)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("name", JSON.stringify(res.data.name));
        dispatch(isLogin(true));
        alert("Logged in successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid credentials");
      });
  };

  return (
    <div className="loginpagecom">
      <div className="background">
        <div className="shape" />
        <div className="shape" />
      </div>
      <form id="form">
        <h3>Login Here</h3>
        <label htmlFor="username">Username</label>
        <input className="logininput" ref={emailref} type="email" placeholder="Email" id="username" />
        <label htmlFor="password">Password</label>
        <input className="logininput"
          ref={passwordref}
          type="password"
          placeholder="Password"
          id="password"
        />
        <button className="signupbutton" id="loginbtnn" onClick={handleSubmit}>Log In</button>
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
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              style={{ color: "blue", cursor: "pointer" }}
            >
              register here
            </span>
          </p>
        </div>
        <div className="social">
          <div style={{ cursor: "pointer" }} className="go">
            <i className="fab fa-google" /> Google
          </div>
          <div style={{ cursor: "pointer" }} className="fb">
            <i className="fab fa-facebook" /> Facebook
          </div>
        </div>
      </form>
    </div>
  );
};
