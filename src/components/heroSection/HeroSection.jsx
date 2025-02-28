import './heroSection.css'
import Button from '../button/Button';



function HeroSection(){
    return(
      <>
        <img className='Vector_img' src='/assets/Vector.png' alt="Vector-img" />
      <div className="HeroSectionContainer">
         <div className="heroLeft-con">
            <h4>Featured Post</h4>
            <h1>How Ai Will <br /> Changed The Future</h1>
            <p>Lorem ipsum dolor sit. Explicabo aspernatur dolor rem fugit fugiat, a, facere    harum provident modi quos minima quam, culpa doloremque eaque molestiae et at distinctio omnis.  dolor rem fugit fugiat, a, facere  dolor rem fugit fugiat, a, facere</p>
            <Button btnName='Read more'/>
         </div>
         <div className="heroRight-con">
           <img src='/assets/HeroSection.png'  alt="Big image" />
         </div>
      </div>
      <img className='mask-img' src='/assets/Mask group.png' alt="MaskgroupImg" />
      </>
    )
}
export default HeroSection;