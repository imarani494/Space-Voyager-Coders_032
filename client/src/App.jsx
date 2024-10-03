import "./App.css";
import { Footer } from "./components/footer";
import { Home } from "./components/home";
import { LoginPage } from "./components/loginpage";
import { NavBar } from "./components/navbar";
import {Routes, Route} from "react-router-dom"
import { SignupPage } from "./components/signup";

function App() {
  return(
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
