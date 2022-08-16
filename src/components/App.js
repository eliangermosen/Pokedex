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

const App = () => (
  <BrowserRouter>
    <Header/>
    <Routes>
      {/* <Route path="/" element={<Principal/>}></Route>
      <Route path="/terms" element={<TermsConditions/>}></Route> */}
      {/* <Route
        path="*"
        element={<NotFound/>}
      /> */}
    </Routes>
    {/* <Footer/> */}
  </BrowserRouter>
)

export default App;
