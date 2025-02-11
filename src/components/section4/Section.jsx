import './section.css'
import Card from '../Card/Card';

// Images Imported Here...
import Card1 from '../../assets/card1.png'
import Card2 from '../../assets/card2.png'
import Card3 from '../../assets/card3.png'

function Section4(){

  const carddata = [
    {
      imgSrc : Card1,
      role : 'Travel',
      date : '10 jan 2025',
      title : '8 Rules of Travlling in  Sea You Need To Know'
    },
    {
      imgSrc : Card2,
      role : 'Development',
      date : '11 jan 2025',
      title : 'How to get a Strong Portfolio and get a Job in UI/UX'
    },
    {
      imgSrc : Card3,
      role : 'Sports',
      date : '12 jan 2025',
      title : 'How to be Professinal Fottballer in 2025'
    },
  ]

    return(
        <>
        <div className="three_Card-main">
          <Card
           imgSrc = {carddata[0].imgSrc}
           role={carddata[0].role}
           date={carddata[0].date}
           title={carddata[0].title}
          />
          <Card
           imgSrc = {carddata[1].imgSrc}
           role=    {carddata[1].role}
           date   = {carddata[1].date}
           title=   {carddata[1].title}
          />
          <Card
           imgSrc = {carddata[2].imgSrc}
           role=    {carddata[2].role}
           date=    {carddata[2].date}
           title=   {carddata[2].title}
          />

        </div>
        </>
    )
}

export default Section4;