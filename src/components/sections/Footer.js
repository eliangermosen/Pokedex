import logo from "../../assets/images/logo.svg"
import twitter from "../../assets/images/twitter.svg"
import gmail from "../../assets/images/gmail.svg"
import linkedin from "../../assets/images/linkedin.svg"
import github from "../../assets/images/github.svg"

const Footer = () => (
     <footer>
        {/* <hr/> */}
        <section>
            <div className="content-logo-footer">
                <a href="/" className="f-logo">
                    <img src={logo} alt="Logo Pokemon"/>
                </a>
            </div>
            <div className="social">
                <h2 className="inter-bold connect">Connect With Me:</h2>
                <div className="links">
                    <a href="mailto:elianmtoribio@gmail.com" target="_blank" rel="noreferrer">
                        <img src={gmail} alt="Gmail Icon" />
                    </a>
                    <a href="https://twitter.com/elianmtg_" target="_blank" rel="noreferrer">
                        <img src={twitter} alt="Twitter Icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/elian-toribio-germosen-b19a5b203/" target="_blank"
                        rel="noreferrer">
                        <img src={linkedin} alt="LinkedIn Icon" />
                    </a>
                    <a href="https://github.com/Elianmtg/" target="_blank" rel="noreferrer">
                        <img src={github} alt="GitHub Icon" />
                    </a>
                </div>
            </div>
        </section>
    </footer>
)

export default Footer