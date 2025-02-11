import './header.css'
import NavLogo from '../../assets/Navbar_logo.png'
import Button from '../button/Button'

function Header(){
    return(
        <>
           <header>
               <div className="logoName">
                   <img src={NavLogo} alt="Navbarlogo" />
                   <h2>Zarrin</h2>
               </div>
               <div className="Navbar">
                  <ul>
                    <li>Blog</li>
                    <li>About</li>
                  </ul>
                  <i className="fa-solid fa-magnifying-glass"></i>       {/*Icon */}
                  <Button btnName='Contact Us'/>                         {/* Button  ComPonent call */}
               </div>
                  <i id='bar_icon' className="fa fa-list" aria-hidden="true"></i>
           </header>
        </>
    )
}
export default Header;