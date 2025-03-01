// Css Link
import "./App.css";
// State Import In React
import { useState , useEffect } from "react";
// Toast Library for POPUP
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter,Routes,Route,} from "react-router-dom";
// FireBse 
import { onAuthStateChanged } from "firebase/auth";
import {db,auth} from './services/firebase'
import { doc , getDoc } from "firebase/firestore";

//   <-----   COMPONET JO HAR PAGE PR USE HO RHE HERE ------>
import Header from "./components/header/Header";
import Section4 from "./components/section4/Section4";
import Footer from "./components/footer/Footer";

//   <-----  ALL FILES COMPONET HERE ------>
import Home from "./pages//home/Home";
import AboutUs from "./pages/aboutus/AboutUs";
import ContactUs from "./pages/contactus/ContactUs";
import Blog from "./pages/blog/Blog";
import SignUp from "./pages/signUp/SignUp";
import Login from './pages/login/Login'
import Profile from "./pages/profile/Profile";


function App() {
   const [userLogin, setUserLogin] = useState(null)   // This is Mean State Agr user Login ha To usk  ka Data Ais ma set hojyee ga
  
   // This Function Call When User Login 
  const fetchUserData = async (userId) => {
    try {
       const userSnap = await getDoc(doc(db, 'SignUpUser', userId))
       console.log(userSnap.data());
       setUserLogin(userSnap.data())     /// Set The State 
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

   // <--------- CHECH USER LOGIN OR NOT HERE ------->
  useEffect(() => {
    // console.log('useEffect Run');
    const unsubscribe = onAuthStateChanged(auth, (user) => {

      if (user) {
        console.log("User logged in:", user.uid);
        fetchUserData(user.uid); // Fetch data function Call whn pa Ab user ka data get kre ka database se from Firestore 
      } else {
        console.log("No user is logged in.");
        setUserLogin(null)   // Update the State Because user Nhi ha To Null
      }

    });
  }, []);
  

  return (
    <>
    
    <ToastContainer  style={{ zIndex: 9999999 }} /> 
    <BrowserRouter >
            <Header userlogin ={userLogin}/>   

        <Routes>
            <Route  path="/"         element={<Home />}/>               
            <Route  path="about"     element={<AboutUs />}/>               
            <Route  path="contact"   element={<ContactUs />}/>                    
            <Route  path="blog"      element={<Blog />}/>                    
            <Route  path="profile"   element={<Profile userlogin ={userLogin} />}/>                    
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
