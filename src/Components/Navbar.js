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
      <h1 className="logo-headding">E-SHOP</h1>
      <div>
      <Link className="product-link"href=""><b>Product</b></Link>
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
        <a className="navbar-link" href="/">
          <CgProfile className="navbar-icon" />
        </a>
        <a className="navbar-link" href="/">
          <WishIcon className="navbar-icon" />
        </a>
        <a className="navbar-link" href="/">
          <BagIcon className="navbar-icon" />
        </a>
      </div>
    </div>
  );
};
