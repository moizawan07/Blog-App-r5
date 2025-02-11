import './heroSection.css'
import Button from '../button/Button';
import HeroImg  from "../../assets/HeroSection.png"


function HeroSection(){
    return(
      <div className="HeroSectionContainer">
         <div className="heroLeft-con">
            <h4>Featured Post</h4>
            <h1>How Ai Will Changed The Future</h1>
            <p>Lorem ipsum dolor sit. Explicabo aspernatur dolor rem fugit fugiat, a, facere    harum provident modi quos minima quam, culpa doloremque eaque molestiae et at distinctio omnis.</p>
            <Button btnName='Read more'/>
         </div>
         <div className="heroRight-con">
           <img src={HeroImg} alt="Big image" />
         </div>
      </div>
    )
}
export default HeroSection;