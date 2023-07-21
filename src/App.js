import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./Components/LandingPage";
import { ProductPage } from "./Components/Productpage";
import { Login } from "./Components/LoginPage";
import { signupPage } from "./Components/SignInPage";
import { CartPage } from "./Components/CartPage";
import { WishlistPage } from "./Components/WishlistPage";
import {  UseReducer } from "./count";
// import { Layout } from "./Components/Layout";

function App() {
  return (
    // <div>
    // <UseReducer/>

  //   </div>
   <Router>
    <Routes>
    <Route path="/" Component={LandingPage} />
    <Route path="Productpage" Component={ProductPage} />
    <Route path="Landingpage" Component={LandingPage} />
    <Route path="Loginpage" Component={Login}/>
    <Route path="signinpage" Component={signupPage}/>
    <Route path="CartPage" Component={CartPage}/>
    <Route path="wishlistpage" Component={WishlistPage}/>
    <Route path="signuppage" Component={Login}/>
    </Routes>
   </Router>
  );
}

export default App;
