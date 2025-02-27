import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form">
        <input type="email" name="email" placeholder="Email" className="input-fieldl" />
        <input type="password" name="password" placeholder="Password" className="input-fieldl" />
        <button type="submit" className="submit-button">Login</button>
      </form>
      <div className="msg">
      <p>Do not have an account? <Link to='/signup'>Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;
