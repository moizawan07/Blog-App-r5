function ContactUsCard({icon, head,info}){
    return(
        <div className="contactus-card">
            <div className="contact-us-card-icon">
            <i class={icon}></i>
            </div>
              <h3>{head}</h3>
              <p>{info}</p>
        </div>
    )
}
export default ContactUsCard;