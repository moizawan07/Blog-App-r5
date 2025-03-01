import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import {auth} from '../../services/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
 const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  let navigate = useNavigate()

  // This Functiona ma User KI login Check Kr rha
 const loginInFB = async(e) => {
  e.preventDefault()
 
  try {
    let loginUserInfo = await signInWithEmailAndPassword(auth, email, password)
    // console.log(loginUserInfo);
    navigate('/')
  } 
  catch (error) {
    // console.log('Error', error);
    alert(error)
    
  }
 }



  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={loginInFB}>
        <input type="email"    onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" className="input-fieldl" />
        <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Password" className="input-fieldl" />
        <button type="submit" className="submit-button">Login</button>
      </form>
      <div className="msg">
      <p>Do not have an account? <Link to='/signup'>Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;
