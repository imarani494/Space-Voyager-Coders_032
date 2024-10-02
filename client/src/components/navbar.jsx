import "./navbar.css"
import logoimage from "../assets/brandlogo.png"
import { useState , useEffect} from "react"
import { useNavigate } from "react-router-dom"

export const NavBar = () => {
  let [topopened, setToppened] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  let navigate = useNavigate();

  let [userlogged , setUserLoggedin] = useState(false)

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

  function handleImageClick() {
    navigate("/");
    setToppened(!topopened);
  }

  function handleCart() {
    navigate("/cart");
    setToppened(!topopened);
  }

  function handleSignout() {
    localStorage.removeItem("currloginuser");
    dispatch(userLoggedin());
  }

  function handleSignin() {
    !userlogged ? navigate("/login") : handleSignout();
    setToppened(!topopened);
  }

  return (
    <div className={`maincontainer ${isBlurred ? "blur" : ""}`}>
      <div className="navbarcontainer">
        {/* ---------------------top most navbar------------------------ */}
        <div className="firstnavbar">
          <div>
            <img
              onClick={() => {
                navigate("/");
              }}
              className="navbarlogo"
              src={logoimage}
            />
          </div>
          <div>
            <div>
              <h4 style={{ fontWeight: "600" }}>MASAI</h4>
            </div>
            <div className="bordertype"></div>
            <div>
              <h4 style={{ fontWeight: "600" }}>LUDO</h4>
            </div>
          </div>
          <div id="linksofcomp" className="linksofcomp">
            <p
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </p>
            <p
              onClick={() => {
                !userlogged ? navigate("/login") : handleSignout();
              }}
            >
              {userlogged ? "Sign Out" : "Sign in"}
            </p>
          </div>

          <div id="bergmenutop" className="bergmenutop">
            <p>
              {topopened ? (
                <i
                  onClick={() => {
                    setToppened(!topopened);
                  }}
                  className="ri-close-large-line"
                ></i>
              ) : (
                <i
                  onClick={() => {
                    setToppened(!topopened);
                  }}
                  className="ri-menu-4-line"
                ></i>
              )}
            </p>
          </div>

          <div id={topopened ? "openthetopisebar" : "closethetopsidebar"}>
            <img
              onClick={handleImageClick}
              src={logoimage}
              className="navbarlogo"
            />
            <p onClick={handleCart}>Cart</p>
            <p onClick={handleSignin}>{userlogged ? "Sign Out" : "Sign in"}</p>
          </div>
        </div>

        {/* ---------------------top most navbar------------------------ */}

        {/* ---------------------top most border of navbar------------------------ */}

        <div className="bottomborder"></div>

        {/* ---------------------top most border of navbar------------------------ */}

       
      </div>
    </div>
  );
};