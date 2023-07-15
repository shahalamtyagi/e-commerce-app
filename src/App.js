import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./Components/LandingPage";
import { ProductPage } from "./Components/Productpage";
// import { Layout } from "./Components/Layout";

function App() {
  return (
   <Router>
    <Routes>
    <Route path="/" Component={LandingPage} />
    <Route path="Productpage" Component={ProductPage} />
    </Routes>
   </Router>
  );
}

export default App;
