import "./App.css";
import { Footer } from "./components/footer";
import { Home } from "./components/home";
import { LoginPage } from "./components/loginpage";
import { NavBar } from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import { SignupPage } from "./components/signup";
import { Ludoss } from "./ludoss";
import { About } from "./components/about";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/ludo" element={<Ludoss />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
