import './section4.css'
import Button from '../button/Button'
import Vector  from "../../assets/Vector.png"
import MaskGroup  from "../../assets/Mask group.png"



function Section4 (){
    return(
        <div className='section4-main'>
             <img className='Vector_img2' src={Vector} alt="Vector-img"/>

             <h1>Get Our Story delivered from <br /> us to you inbox weekly.</h1>

               <div className="input-btn-main-flex">
                   <input type="text" placeholder='Your Email' /> 
                  <Button btnName='Get Started'/>
               </div>
                  <p>Get a responce tommorow if ypu submit by 9pm today if we received after <br />
                      9pm will get a responce the following day
                  </p>

             <img className='mask-img2' src={MaskGroup} alt="MaskgroupImg" />
        </div>
    )
}

export default Section4;