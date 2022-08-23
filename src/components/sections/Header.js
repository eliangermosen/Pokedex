import logo from "../../assets/images/logo.svg"

const Header = () => (
    <header className = "backg-color">
        <a href="/" className="content-logo">
            <img src={logo} alt="Logo TvShow"/>
            {/* <h1 className="">Pokemon</h1> */}
        </a>
    </header>
)

export default Header