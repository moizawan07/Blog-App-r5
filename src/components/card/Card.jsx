import "./card.css"
import DefaultCardImg from '../../assets/card2.png'
function Card({imgSrc,role,date,title,desc}){
  return(
    <div className="Card-main">
       <img src={imgSrc ? imgSrc : DefaultCardImg} alt="Card image"/>

       <p className="firstP">
        <span className="Leftt">{role}</span>
        <span className="Rightt">{date}</span>
       </p>

       <h1>{title}</h1>

       <p className="secondP"> {desc ||     // This Condition Agr Desc mil rhi props se to wo lg gai gi wrna deafaut lorem ipsum 
        "Lorem ipsum dolor sit amet consectetur labore amet incidunt numquam illum. Consequuntur aspernatur expedita repellendus asperiores maxime."}
       </p>
       
      <b>Read More...</b>
    </div>
  )
}

export default Card;