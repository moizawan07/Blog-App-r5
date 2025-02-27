import { useState } from "react";
import "./signUp.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [signUpForm , setSignUpForm] = useState({
    fullName : '',
    email : '',
    password : '',
    confirmPassword : '',
    gender : '',
    phone : '',
    country : '',
    city : '',
    date : '',
  })

  console.log(signUpForm);
  

 const singupValueSet = (e) => {           // Set the Sate By Input Value
  setSignUpForm({...signUpForm, [e.target.name] : e.target.value})
 }

 const signUpDone = (event) => {
  event.preventDefault()

  let {fullName, email, password, confirmPassword,              // Destruting here
       gender , phone , country , city} = signUpForm; 
 
 
 if(fullName && email && password && confirmPassword &&                     //First Check all Values HA YA NHI
    gender && phone && country && city)
    {
     
       
    }
    else{                                        // Check All Values Else
        toast.error("FILL ALL THE FIELDS", {
          position: "bottom-left",
          autoClose: 3000, // 3 seconds
          hideProgressBar: false,
          closeOnClick: true,

        })}
 

      
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
