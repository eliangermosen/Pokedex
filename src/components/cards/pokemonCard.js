// import pikachu from "../../assets/images/pikachu-card.svg"

const pokemonCard = ({number,name,avatar}) => {

    const handleCard = (name) => {
        // e.preventDefault();
        console.log(name);
        window.location.href=`/pokemon/${name}`;
    };

    const capitalizeFirstLetter = (name) => {
        // converting first letter to uppercase
        return name.charAt(0).toUpperCase() + name.slice(1);
    };

    return(
        // <section className="container-card">
            <article className="content-card" onClick={()=>handleCard(name)}>
                <figure className="fig-card">
                    <img src={avatar} alt={name} className="img-card" />
                </figure>
                <div className="inf-card">
                    <h2 className="inter-bold name-card">{capitalizeFirstLetter(name)}</h2>
                    <h3 className="inter-medium number-card">#{number}</h3>
                </div>
            </article>
        // </section>
    )
}

export default pokemonCard