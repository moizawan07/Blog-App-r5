import { Link } from 'react-router-dom'
import './header.css'
import NavLogo from '../../assets/Navbar_logo.png'
import Button from '../button/Button'

function Header(){
    return(
        <>
           <header>
               <div className="logoName">
                   <img src={NavLogo} alt="Navbarlogo" />
                   <h1>Zarrin</h1>
               </div>
               <div className="Navbar">
                  <ul>
                   <Link to='blog'> <li>Blog</li> </Link>
                   <Link to='about'> <li>about Us</li> </Link>
                  </ul>
                  <i className="fa-solid fa-magnifying-glass"></i>       {/*Icon */}
              <Link to='contact'> <Button btnName='Contact Us'/> </Link>                       {/* Button  ComPonent call */}
               </div>
                  <i id='bar_icon' className="fa fa-list" aria-hidden="true"></i>
           </header>
        </>
    )
}
export default Header;