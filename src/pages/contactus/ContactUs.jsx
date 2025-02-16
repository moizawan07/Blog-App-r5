import ContactUsCard from '../../components/contact_us-card/ContactUs-card';
import './contactus.css'


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
        </div>
    )
}
export default ContactUs;