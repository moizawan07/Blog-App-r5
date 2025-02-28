import { Link } from 'react-router-dom';
import './footer.css'




function Footer(){
    return (
        <div className='main-footer'>
          <div className="first-footer-line">
             <img src='/assets/Navbar_logo.png' alt="Footer-icon" />
             <h1>Zarrin</h1>
          </div>
          <div className="second-footer-line">
            <ul>
            <Link to='/'><li>Home</li> </Link>
            <Link to='blog'><li>Blog</li> </Link>
            <Link to='about'><li>About</li> </Link>
            <Link to='contact'><li>Contact Us</li> </Link>
            </ul>
          </div>
          <div className="Third-footer-line">
             <p>FB</p>
             <p>lG</p>
             <p>LN</p>
             <p>YT</p>
          </div>
          <hr />
          <b>Copy Right ideapeel © 2025 All Right Reserved</b>
        </div>
    )
}

export default Footer;