import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";

//   <-----   COMPONET JO HAR PAGE PR USE HO RHE HERE ------>

import Header from "./components/header/Header";
import Section4 from "./components/section4/Section4";
import Footer from "./components/footer/Footer";

//   <-----  ALL FILES COMPONET HERE ------>

import Home from "./pages//home/Home";
import AboutUs from "./pages/aboutus/AboutUs";
import ContactUs from "./pages/contactus/ContactUs";
import Blog from "./pages/blog/Blog";


function App() {
  return (
    <>
    <BrowserRouter >
            <Header />   

        <Routes>
            <Route  path="/"         element={<Home />}/>               
            <Route  path="about"     element={<AboutUs />}/>               
            <Route  path="contact"   element={<ContactUs />}/>                    
            <Route  path="blog"      element={<Blog />}/>                    
        </Routes>  

            <Section4 />                                 
            <Footer />   
    </BrowserRouter>
    </>
  );
}

export default App;
