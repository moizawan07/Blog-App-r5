import './section3.css'
import Card from '../Card/Card';
import SingleLine from '../singleLine/SigleLine';

// Images Imported Here...

function Section3(){

  const carddata = [
    {
      id : 1,
      imgSrc : "/assets/card1.png",
      role : 'Travel',
      date : '10 jan 2025',
      title : '8 Rules of Travlling in  Sea You Need To Know'
    },
    {
      id : 2,
      imgSrc : '/assets/card2.png',
      role : 'Development',
      date : '11 jan 2025',
      title : 'How to get a Strong Portfolio and get a Job in UI/UX'
    },
    {
      id : 3,
      imgSrc : '/assets/card3.png',
      role : 'Sports',
      date : '12 jan 2025',
      title : 'How to be Professinal Fottballer in 2025'
    },
    {
      id : 4,
      imgSrc : '/assets/card4.png',
      role : 'Travel',
      date : '13 jan 2025',
      title : 'Train Or Bus? Journey Which One Suit'
    },
    {
      id : 5,
      imgSrc : '/assets/card5.png',
      role : 'Development',
      date : '14 jan 2025',
      title : 'Best Website to reserch for your new Job'
    },
    {
      id : 6,
      imgSrc : '/assets/card6.png',
      role : 'Sports',
      date : '15 jan 2025',
      title : 'HOW to be a Dancer in 2025 With Popuar skills'
    },
    {
      id : 7,
      imgSrc : '/assets/card7.png',
      role : 'Travel',
      date : '16 jan 2025',
      title : 'Who is the Best Singer on Char? KNow him?'
    },
    {
      id : 8,
      imgSrc : '/assets/card8.png',
      role : 'Development',
      date : '17 jan 2025',
      title : 'How to Start Import Buniess from Home'
    },
    {
      id : 9,
      imgSrc : '/assets/card9.png',
      role : 'Sports',
      date : '18 jan 2025',
      title : 'Make Some Drink With Chocaltes Chocaltes with Milk'
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

        {/* Single Line Component */}
        <SingleLine  heading='Popular Post'/>
        
        {/* Mulitple Card Prints */}

         <div className="multiple_card-main">
            {
              carddata.map((item)=> {
               if(item.id > 3){
              return(  
                <Card
                imgSrc = {item.imgSrc}
                role=    {item.role}
                date=    {item.date}
                title=   {item.title}
               />
              )}
                
              })
            }
         </div>

        </>
    )
}

export default Section3;