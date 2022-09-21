// import pikachu from "../../assets/images/pikachu-card.svg"

const pokemonCard = ({number,name,avatar}) => {
    return(
        // <section className="container-card">
            <article className="content-card">
                <figure className="fig-card">
                    <img src={avatar} alt={name} className="img-card" />
                </figure>
                <div className="inf-card">
                    <h2 className="inter-bold name-card">{name}</h2>
                    <h3 className="inter-medium number-card">#{number}</h3>
                </div>
            </article>
        // </section>
    )
}

export default pokemonCard