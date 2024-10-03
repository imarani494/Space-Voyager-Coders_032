import "./navbar.css";
import barndlogo from "../assets/brandlogo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "../redux/actions";

export const NavBar = () => {
  const [isBlurred, setIsBlurred] = useState(false);
  let navigate = useNavigate();
  let islogged = useSelector((state) => state.loggedIn);
  let name = JSON.parse(localStorage.getItem("name"))?.split(" ")[0];
  let dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    dispatch(isLogin(false));
    navigate("/");
  }

  return (
    <div className={`maincontainerofnavbar ${isBlurred ? "blur" : ""}`}>
      <div className="navbarcontainer">
        <div className="brandlogo">
          <img onClick={() => navigate("/")} src={barndlogo} />
          <h2>
            <span style={{ color: "red" }}>L</span>udo{" "}
            <span style={{ color: "red" }}>V</span>erse
          </h2>
        </div>
        <div className="allnavlinks">
          <p onClick={() => navigate("/")}>Home</p>
          <p>About</p>
          {islogged ? (
            <>
              <p>
                <span style={{ color: "red" }}>Wlcm, </span> {name}
              </p>
              <p onClick={handleLogout}>Logout</p>
            </>
          ) : (
            <>
              <p onClick={() => navigate("/login")}>Login</p>
              <p onClick={() => navigate("/signup")}>Signup</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
