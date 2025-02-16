import './section1.css'
import Bimg from '../../assets/section2Bigimg.png'
import Button from '../button/Button'

function Section1({mainClass,leftClass,rightClass}){
  return(
    <>
       <div className={mainClass}>
          <div className={leftClass}>
             <img src={Bimg} alt="bigImage"/>
          </div>
          <div className={rightClass}>
            <p>
                <span className='span1'>Development</span>
                <span  className='span2'>10 feb 2025</span>
            </p>
            <h1>How to make a Game Look More Attractive {rightClass === 'blog-section1-right' ? <br />: ''} with New Vr & Al Technology</h1>
            <p className='para'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore obcaecati molestiae nesciunt! Eaque sed architecto vero iure at quia voluptatem aliquam! At optio facere deserunt.
            </p>
            <Button btnName='Read More'/>
          </div>
        </div> 
    </>
  )
}
export default Section1;