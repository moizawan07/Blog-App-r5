import { Link } from 'react-router-dom'
import './header.css'
import Button from '../button/Button'
import { useRef } from 'react'

function Header({userlogin}){
    // console.log(userlogin);

//    Responsive navbar Code
let navMain = useRef(null)
    function navbarToggle(){
      console.log( navMain.current.classList.toggle("active"))   
    }
    
    return(
        <>
           <header>
               <div className="logoName">
                   <img src='/assets/Navbar_logo.png' alt="Navbarlogo" />
                   <h1>Zarrin</h1>
               </div>
               <div className="Navbar" ref={navMain}>

                  <ul>
                   <Link to='/'> <li>Home</li> </Link>
                   <Link to='blog'> <li>Blog</li> </Link>
                   <Link to='about'> <li>about Us</li> </Link>
               {userlogin && <Link to='profile'> <li>Profile</li> </Link>}    {/* Agr user mil Rha Props ma to tbhi Show hogii */}
                  </ul>

              <i className="fa-solid fa-magnifying-glass"></i>       {/*Icon */}
              <Link to='contact'><Button btnName='Contact Us'/> </Link>                       {/* Button  ComPonent call */}
           {!userlogin && <Link to='signUp'><Button btnName='SignUp/Login'/> </Link>}         {/* Button  ComPonent call */}
               </div>
                  <i id='bar_icon' className="fa fa-list"  onClick={navbarToggle}></i>
           </header>
        </>
    )
}
export default Header;