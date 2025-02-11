import "./card.css"

function Card({imgSrc,role,date,title}){
  return(
    <div className="Card-main">
       <img src={imgSrc} alt="Card image"/>

       <p className="firstP">
        <span className="Leftt">{role}</span>
        <span className="Rightt">{date}</span>
       </p>

       <h1>{title}</h1>

       <p className="secondP">
        Lorem ipsum dolor sit amet consectetur labore amet incidunt numquam illum. Consequuntur aspernatur expedita repellendus asperiores maxime.
       </p>
       
      <b>Read More...</b>
    </div>
  )
}

export default Card;