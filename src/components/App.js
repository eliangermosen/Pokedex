//routes
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
//stylesheet
import "../styles/style.css"
// pages and sections
import Header from "./sections/Header";
// import Footer from "./sections/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Pokemon from "./pages/Pokemon";
import GitHub from "./sections/GitHub";

const App = () => (
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/search" element={<Search/>}></Route>
      <Route path="/pokemon/:pokemon" element={<Pokemon/>}></Route>
      <Route
        path="*"
        element={<Home/>}
      />
    </Routes>
    <GitHub/>
    {/* <Footer/> */}
  </BrowserRouter>
)

export default App;
