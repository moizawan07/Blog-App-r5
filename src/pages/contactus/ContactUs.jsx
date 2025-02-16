import './contactus.css'
import ContactUsCard from '../../components/contact_us-card/ContactUs-card';
import Mapimg from '../../assets/map.png'


function ContactUs(){

    return(
        <div className='Contact-main'>
            {/* Section1 */}
            <div className="CA-section1">
                <h1>Get In Touch</h1>
                <p>Contact us to publish your content and shpow ads to our <br />website and get a good reach</p>
            </div>
            {/*  Section 2 */}
            <div className="CA-section2">
                <ContactUsCard
                 icon= 'fa-solid fa-house'
                 head= 'Office'
                 info= 'Victoria Street London Uk'
                 />
                <ContactUsCard
                 icon= 'fa fa-envelope'
                 head= 'Email'
                 info= 'moiz@gmail.com'
                 />
                <ContactUsCard
                 icon= 'fa fa-envelope'
                 head= 'Phone'
                 info= '02154875'
                 />
            </div>
            {/* Section 3 */}
            <div className="CA-section3">
                <img src={Mapimg} alt="" />
            </div>
            <div className="CA-section4">
                <div className="firstline">
                    <div className="input-name">
                        <label htmlFor="nameinput">Name</label> <br />
                        <input type="text"  id='nameinput'/>
                    </div>
                    <div className="input-name">
                        <label htmlFor="emailinput">Email</label> <br />
                        <input type="email" id='emailinput' />
                    </div>
                </div>
                <div className="firstline">
                    <div className="input-name">
                        <label htmlFor="phoneinput">Phone</label> <br />
                        <input type="text"  id='phoneinput'/>
                    </div>
                    <div className="input-name">
                        <label htmlFor="subjectinput">Subject</label> <br />
                        <input type="email" id='subjectinput' />
                    </div>
                   </div>
                <div className="firstline">
                    <div className="input-name">
                        <label htmlFor="messageinput">Message</label> <br />
                        <textarea type="text"  id='messageinput' rows={9}/>
                    </div>
                </div>
                <div className="submit-btn">
                    <button>Send Message</button>
                </div>
            </div>
        </div>
    )
}
export default ContactUs;