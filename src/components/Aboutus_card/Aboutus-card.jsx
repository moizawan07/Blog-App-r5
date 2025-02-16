function AboutUsCard({id,optional}){
    return(
        <div className="Au-card" id={id}>
            <h1>01</h1>
            <h2>Brainstorming</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sunt fugit consectetur modi nam. Facere ea beatae et tenetur, esse, harum sequi doloremque omnis.  molestiae. Libero, numquam.</p>
          {optional && <b>{optional}</b>}
        </div>
    )
}
export default AboutUsCard;