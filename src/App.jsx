import "./App.css";
import Header from "./components/header/Header";
import Section4 from "./components/section4/Section4";
import Footer from "./components/footer/Footer";
//   <-----  ALL FILES COMPONET HERE ------>
// import Home from "./pages//home/Home";
// import AboutUs from "./pages/aboutus/AboutUs";
import ContactUs from "./pages/contactus/ContactUs";

function App() {
  return (
    <>
      <Header />                          {/* HEADER Component */}                    
      {/* <Home />*/}                     {/* HOME page */}
      {/* <AboutUs /> */}                 {/* ABOUT US page */}
      <ContactUs />                       {/* CONTACT US  page */}
      <Section4 />                        {/* SECTION 4 Component */}        
      <Footer />                          {/* FOOTER Component */}
    </>
  );
}

export default App;
