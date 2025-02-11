import './section2.css'
import Bimg from '../../assets/section2Bigimg.png'
import Button from '../button/Button'

function Section2(){
  return(
    <>
       <div className="section2-container">
          <div className="s2left-con">
             <img src={Bimg} alt="bigImage"/>
          </div>
          <div className="s2right-con">
            <p>
                <span className='span1'>Development</span>
                <span  className='span2'>10 feb 2025</span>
            </p>
            <h1>How to make a Game Look More Attractive with New Vr & Al Technology</h1>
            <p className='para'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore obcaecati molestiae nesciunt! Eaque sed architecto vero iure at quia voluptatem aliquam! At optio facere deserunt.
            </p>
            <Button btnName='Read More'/>
          </div>
        </div> 
    </>
  )
}
export default Section2;