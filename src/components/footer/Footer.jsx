import './footer.css'
import NavLogo from '../../assets/Navbar_logo.png'



function Footer(){
    return (
        <div className='main-footer'>
          <div className="first-footer-line">
             <img src={NavLogo} alt="Footer-icon" />
             <h1>Zarrin</h1>
          </div>
          <div className="second-footer-line">
            <ul>
                <li>Home</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact Us</li>
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