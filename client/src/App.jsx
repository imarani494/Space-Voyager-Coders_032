import "./App.css";
import { Footer } from "./components/footer";
import { Home } from "./components/home";
import { LoginPage } from "./components/loginpage";
import { NavBar } from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import { SignupPage } from "./components/signup";
import { LudoBoard } from "./components/ludodashboard";
import { Ludoss } from "./ludoss";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* <Route path="/ludo" element={<LudoBoard />} /> */}
        <Route path="/ludo" element={<Ludoss />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
