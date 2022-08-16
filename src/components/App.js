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
import Home from "./pages/Home";

const App = () => (
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      {/* <Route path="/search" element={<Search/>}></Route> */}
      {/* <Route path="/pokemon" element={<Pokemon/>}></Route> */}
      {/* <Route
        path="*"
        element={<Home/>}
      /> */}
    </Routes>
    {/* <Footer/> */}
  </BrowserRouter>
)

export default App;
