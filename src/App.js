import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./Components/LandingPage";
import { ProductPage } from "./Components/Productpage";
import { Login } from "./Components/LoginPage";
import { SignupPage } from "./Components/SignInPage";
import { CartPage } from "./Components/CartPage";
import { WishlistPage } from "./Components/WishlistPage";
import { CardAddress } from "./Components/CardAddress";
import { AnyAddress } from "./Components/AnyAddress";
import { RadioButtonAddress } from "./Components/RadioButtonAddress";

// import { Layout } from "./Components/Layout";

function App() {
  return (
   <Router>
    <Routes>
    <Route path="/" Component={LandingPage} />
    <Route path="Productpage" Component={ProductPage} />
    <Route path="Landingpage" Component={LandingPage} />
    <Route path="Loginpage" Component={Login}/>
    <Route path="signuppage" Component={SignupPage}/>
    <Route path="CartPage" Component={CartPage}/>
    <Route path="wishlistpage" Component={WishlistPage}/>
    <Route path="signinpage" Component={Login}/>
    <Route path="snpage" Component={Login}/>
    {/* <Route path="select-address" Component={AnyAddress}/> */}
    <Route path="select-address" Component={RadioButtonAddress}/>

    <Route path="AnyAddress" Component={CardAddress }/>

    </Routes>
   </Router>
  );
}

export default App;
