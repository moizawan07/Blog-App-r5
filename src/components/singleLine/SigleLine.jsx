import './singleline.css'
import Button from '../button/Button'

function SingleLine ({heading}){
    return(
        <>
           <div className="singleline-main">
               <h1>{heading}</h1>
               <Button btnName='View All' />
           </div>
        </>
    )
}
export default SingleLine;