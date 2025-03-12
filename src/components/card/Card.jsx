import { useEffect } from "react";
import "./card.css"



function Card({imgSrc,role,date,title,desc}){

//  let cDate = new Date();           // date  Set For THre User Card Who Cant Put a date
//  cDate = cDate.toDateString();
//  let mStored = cDate.slice(3,7)
//  let yStored = cDate.slice(10)
//  let finaldate = cDate.slice(8,10) +  mStored + yStored


  return(
 
    <div className="Card-main">
       <img src={imgSrc ? imgSrc : '/assets/card2.png'} alt="Card image"/>

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