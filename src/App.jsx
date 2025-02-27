import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter,Routes,Route, useLocation } from "react-router-dom";

//   <-----   COMPONET JO HAR PAGE PR USE HO RHE HERE ------>

import Header from "./components/header/Header";
import Section4 from "./components/section4/Section4";
import Footer from "./components/footer/Footer";

//   <-----  ALL FILES COMPONET HERE ------>

import Home from "./pages//home/Home";
import AboutUs from "./pages/aboutus/AboutUs";
import ContactUs from "./pages/contactus/ContactUs";
import Blog from "./pages/blog/Blog";
import SignUp from "./components/signUp/SignUp";
import Login from './components/login/Login'


function App() {

  return (
    <>
    
    <ToastContainer  style={{ zIndex: 9999999 }} /> 
    <BrowserRouter >
            <Header />   

        <Routes>
            <Route  path="/"         element={<Home />}/>               
            <Route  path="about"     element={<AboutUs />}/>               
            <Route  path="contact"   element={<ContactUs />}/>                    
            <Route  path="blog"      element={<Blog />}/>                    
            <Route  path="signUp"    element={<SignUp />}/>                    
            <Route  path="login"     element={<Login />}/>                    
        </Routes>  

            <Section4 />                                 
            <Footer />   
    </BrowserRouter>
    </>
  );
}

export default App;
