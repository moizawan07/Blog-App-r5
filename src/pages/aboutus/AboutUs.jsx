import './about.css'
import AboutCard from '../../components/Aboutus_card/Aboutus-card'



function AboutUs (){
    return(
        <div className='About-us-Main'>

          {/* Section 1  */}
         <div className="AU-section1">
            <b>ABOUT US</b>
            <h1>Creative Blog Writing  and <br /> Publishing Site</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit magni unde neque nisi aliquam dolore voluptatem. Consequatur, ipsam. Molestiae, amet? Non architecto ipsa consequatur consectetur adipisicing elit. Sit magni unde neque nisi aliquam veniam aperiam accusantium nihil eum quasi.</p>
         </div>
         {/* Section 2 */}
         <div className="AU-section2">
           <img src='/assets/Aboutus herosectionimg.png' alt="AboutMianPic" />
         </div>
         {/* Section 3 */}
         <div className="AU-section3">
            <div className="au-sec3-left">
              <b>HOW WE WORK</b>
              <h1>I Will Show You How <br /> Our Team Work</h1>
            </div>
            <div className="au-sec3-right">
             <p> Bring to the table win -win market  Strategies to ensure <br /> perfect article</p>
            </div>
         </div>
         {/* Section4 */}
         <div className="AU-section4">
           <AboutCard  id='cardBlue' optional='Learn More'/>
           <AboutCard />
           <AboutCard />
         </div>
        </div>
    )
}
export default AboutUs;