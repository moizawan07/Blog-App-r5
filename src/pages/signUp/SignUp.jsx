import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signUp.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {auth,db} from '../../services/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc,doc } from "firebase/firestore";

// console.log(auth);


const SignUp = () => {
  let navigate = useNavigate()
  const [signUpForm , setSignUpForm] = useState({
    fullName : '',
    email : '',
    password : '',
    confirmPassword : '',
    gender : '',
    phone : '',
    country : '',
    city : '',
  })

  
 const singupValueSet = (e) => {           // Set the Sate By Input Value
  setSignUpForm({...signUpForm, [e.target.name] : e.target.value})
 }

 const signUpDone = (event) => {
  event.preventDefault()
  const emailPattern = /^[a-zA-Z0-9._%+-]{4,}@(gmail\.com|yahoo\.com|outlook\.com)$/;  // Email Regex Code
  const phonePattern = /^\d{11}$/;  // Phone Regex Code

  let FieldsCorrectFill = false    // Jb User ne Inputs fields shi brhe hogi to ye true hojai ga



  let {fullName, email, password, confirmPassword,              // Destruting here
       gender , phone , country , city} = signUpForm; 
       
       console.log(typeof phone);
       
 
 if(fullName && email && password && confirmPassword &&                      //First Check all Values HA YA NHI
    gender && phone && country && city)
    {

        if(fullName.length >= 6){                                                  // FullName If
         
          if(emailPattern.test(email)){                                            // Email If
          
            if(password.length >= 6){                                              // PassWoord If
              
              if(confirmPassword === password){                                    // Confirm PassWoord If
              
                if(phonePattern.test(phone)){                                      // Phone If
              
                  if(country.length >=4){                                         // Country If
   
                    if(city.length >=4){                                          // City If

                         // True this after all fields fill 
                         FieldsCorrectFill = true
                    }
                    else{                                                         // City  Else
                      toast.warning("City name must than 4 Charcter", {
                        position: "top-right",
                        autoClose: 3000, // 3 seconds
                        hideProgressBar: false,
                        closeOnClick: true,
                      })}   
                 
                  }
                  else{                                                           // Country  Else
                    toast.warning("Country name must than 4 Charcter", {
                      position: "top-right",
                      autoClose: 3000, // 3 seconds
                      hideProgressBar: false,
                      closeOnClick: true,
                    })}   
               
                }
                else{                                                               // Phone  Else
                  toast.warning(" Incorrest Phone Number", {
                    position: "top-right",
                    autoClose: 3000, // 3 seconds
                    hideProgressBar: false,
                    closeOnClick: true,
                  })}   
               
              }
              else{                                                               // Confirm PassWoord Else
                toast.warning("Confirm Must Not Match", {
                  position: "top-right",
                  autoClose: 3000, // 3 seconds
                  hideProgressBar: false,
                  closeOnClick: true,
                })}    
          
            }
            else{                                                                 //  PassWoord Else
              toast.warning("Password must than a 6 Chracter", {
                position: "top-right",
                autoClose: 3000, // 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
              })}
          
          }
          else{                                                                 //  Email Else
            toast.warning("Invalid Email", {
              position: "top-right",
              autoClose: 3000, // 3 seconds
              hideProgressBar: false,
              closeOnClick: true,
            })}
          
        }
        else{                                                                  //  FullName Else
          toast.warning("Name Must than a 6 Character", {
            position: "top-right",
            autoClose: 3000, // 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
          })}
       
    }

 else{                                                                     // Check All Values Else
        toast.error("FILL ALL THE FIELDS", {
          position: "bottom-left",
          autoClose: 3000, // 3 seconds
          hideProgressBar: false,
          closeOnClick: true,

 })}


  // This Condition Run when user fill the Form Correctly   
   if(FieldsCorrectFill){
    /// Function call jis me AuthenTication and Firebase ma Data Stored ho rha
    setDataInFb()
  }
     
}


///  <----This Function ma FIREBASE AUTHENTICATION & DATABASE MA USER DATA SET HORHA ----->

const setDataInFb = async () => {
 
  try {
    //  FIRST AUTHENTICATION  FIREBASE
                         //   funct Call                  refernce & User Email   & // User Password
    let storedInFb = await createUserWithEmailAndPassword(auth,signUpForm.email, signUpForm.password)
   let userId = storedInFb.user.uid
   //  console.log(userId)
   

    //  SECOND STORED DATA FIREBASE FIRESTORED DATABASE                        
    let userDataStoredDB = await setDoc(doc(db, 'SignUpUser', userId), signUpForm)
    
    // console.log(userDataStoredDB);
    
    // SuceesFully Done BOth Work AUTHENTICATION AND DATBASE //

    //  After SignUp user in redirect to Login Page

    navigate('/login')
  } 
  catch (error) {
    // Sweet Alert 
   alert(error)
    console.log(error);
  }



}

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <form className="signup-form"onSubmit={signUpDone}>
        <input type="text" name="fullName" placeholder="Full Name" className="input-field" onChange={singupValueSet}/>
        <input type="email" name="email" placeholder="Email" className="input-field" onChange={singupValueSet} />
        <input type="password" name="password" placeholder="Password" className="input-field" onChange={singupValueSet}/>
        <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input-field" onChange={singupValueSet}/>
        <select name="gender" className="input-field" onChange={singupValueSet}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type="text" name="phone" placeholder="Phone Number" className="input-field" onChange={singupValueSet}/>
        <input type="text" name="country" placeholder="Country" className="input-field" onChange={singupValueSet}/>
        <input type="text" name="city" placeholder="City" className="input-field" onChange={singupValueSet}/>
        <button type="submit" className="submit-button">Sign Up</button>
        <div className="social-login">
          <button type="button" className="google-button">Sign Up with Google</button>
          <button type="button" className="facebook-button">Sign Up with Facebook</button>
        </div>
        <div className="msg">
            <p>Already have an account? <Link to='/login'>Login</Link></p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
