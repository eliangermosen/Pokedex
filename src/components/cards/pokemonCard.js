import pikachu from "../../assets/images/pikachu-card.svg"

const pokemonCard = () => (
    <article className="content-card">
        <figure className="fig-card">
            <img src={pikachu} alt="Pokemon" className="img-card" />
        </figure>
        <div className="inf-card">
            <h2 className="inter-bold name-card">Pikachu</h2>
            <h3 className="inter-medium number-card">#25</h3>
        </div>
    </article>
)

export default pokemonCard