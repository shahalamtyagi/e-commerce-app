import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import "./Navbar.css";
import { BagIcon, WishIcon } from "./Wishicon";
export const Navbar = () => {
  const [productapi, setproductapi] = useState([]);
  const api = "/api/categories";
  useEffect(() => {
    fetch(api)
      .then((response)=>response.json())
      .then((data) => {
        setproductapi(data.categories);
      });
  },
  []);
  return (
    <div className="navbar-wrapper">
       <div>
      <Link to="/Landingpage"className="e-shop-link"><b>E-SHOP</b></Link>
      </div>
      {/* <h1 className="logo-headding">E-SHOP</h1> */}
      <div>
      <Link to="/Productpage"className="product-link"><b>PRODUCT</b></Link>
      </div>
      
      <div className="navbar-item-wrapper">
      {productapi.map((item) => {
        return (
          <Link to ="Men"className="navbar-item-link" key={item.id}>
            {item.categoryName}
          </Link>
        );
      })}
        {/* <a href="/" className="navbar-item-link">Women</a>
        <a href="/" className="navbar-item-link">Kids</a>
        <a href="/" className="navbar-item-link">Home</a>
        <a href="/" className="navbar-item-link">Beauty</a>
        <a href="/" className="navbar-item-link">Studio</a> */}
      </div>

      <div className="input-wrapper">
        <input
          type="search"
          className="navbar-input"
          placeholder="Search for product, brand..."
        />
      </div>

      <div className="link-wrapper">
        <Link to="/LoginPage" className="navbar-link">
          <CgProfile className="navbar-icon" />
        </Link>
        <Link to="/wishlistpage"className="navbar-link" href="/">
          <WishIcon className="navbar-icon" />
        </Link>
        <Link to="/CartPage" className="navbar-link" href="/">
          <BagIcon className="navbar-icon" />
        </Link>
      </div>
    </div>
  );
};
