import pikachu from "../../assets/images/pikachu-home.svg"

const Result = () => (
    <section className="content-poke">
        <article className="box1-poke">
            <div className="poke-name">
                <h1 className="inter-bold name-poke">Pikachu</h1>
                <span className="inter-medium values-rectangle">Electric</span>
                <span className="inter-medium values-rectangle">Electric</span>
            </div>
            <div className="physical">
                <div>
                    <h3 className="inter-bold">Height:</h3>
                    <div>
                    <span className="inter-medium values-rectangle">0.4m</span>
                    </div>
                </div>
                <div>
                    <h3 className="inter-bold">Weight:</h3>
                    <span className="inter-medium values-rectangle">6.0kg</span>
                </div>
            </div>
            <div className="group-habilities">
                <h3 className="inter-bold">Habilities:</h3>
                <div className="habilities">
                    <span className="inter-medium values-rectangle">Static</span>
                    <span className="inter-medium values-rectangle">lightning Rod</span>
                </div>
            </div>
            <div>
                <h3 className="inter-bold">Stats:</h3>
                <div className="first-row-stats">
                    <div className="power">
                        <span className="inter-medium values-round red">35</span>
                        <h4 className="inter-bold">HP</h4>
                    </div>
                    <div className="power">
                        <span className="inter-medium values-round yellow">55</span>
                        <h4 className="inter-bold">Attack</h4>
                    </div>
                    <div className="power">
                        <span className="inter-medium values-round red">40</span>
                        <h4 className="inter-bold">Defense</h4>
                    </div>
                </div>
                <div className="second-row-stats">
                    <div className="power">
                        <span className="inter-medium yellow values-round">50</span>
                        <h4 className="inter-bold">Special Attack</h4>
                    </div>
                    <div className="power">
                        <span className="inter-medium values-round yellow">50</span>
                        <h4 className="inter-bold">Special Defense</h4>
                    </div>
                    <div className="power">
                        <span className="inter-medium values-round green">90</span>
                        <h4 className="inter-bold">Velocity</h4>
                    </div>
                </div>
                {/* <div className="container-circle">
                    <span className="inter-medium values-round red">35</span>
                    <span className="inter-medium values-round yellow">55</span>
                    <span className="inter-medium values-round red">40</span>
                </div>
                <div className="container-value">
                    <h4 className="inter-bold">HP</h4>
                    <h4 className="inter-bold">Attack</h4>
                    <h4 className="inter-bold">Defense</h4>
                </div>
                <div className="container-circle">
                    <span className="inter-medium yellow values-round">50</span>
                    <span className="inter-medium values-round yellow">50</span>
                    <span className="inter-medium values-round green">90</span>
                </div>
                <div className="container-value">
                    <h4 className="inter-bold">Special Attack</h4>
                    <h4 className="inter-bold">Special Defense</h4>
                    <h4 className="inter-bold">Velocity</h4>
                </div> */}
                {/* <span className="inter-medium values-round red">35</span>
                <h4 className="inter-bold">HP</h4>
                <span className="inter-medium values-round yellow">55</span>
                <h4 className="inter-bold">Attack</h4>
                <span className="inter-medium values-round red">40</span>
                <h4 className="inter-bold">Defense</h4>
                <span className="inter-medium yellow values-round">50</span>
                <h4 className="inter-bold">Special Attack</h4>
                <span className="inter-medium values-round yellow">50</span>
                <h4 className="inter-bold">Special Defense</h4>
                <span className="inter-medium values-round green">90</span>
                <h4 className="inter-bold">Velocity</h4> */}
            </div>
        </article>
        <article className="box2-poke">
            <img src={pikachu} alt="Hi Pikachu"/>
        </article>
    </section>
)

export default Result