import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import "./Navbar.css";
import { BagIcon, WishIcon } from "./Wishicon";
import { AppContext } from "../Context";
export const Navbar = () => {
  const Context = useContext(AppContext);
  const { dispatch } = Context;

  const inputHandler = (e) => {
    dispatch({ type: "input_value", payload: e.target.value });
  };

  const [productapi, setproductapi] = useState([]);
  const api = "/api/categories";
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setproductapi(data.categories);
      });
  }, []);

  return (
    <div className="navbar-wrapper">
      <div>
        <Link to="/Landingpage" className="e-shop-link">
          <b>E-SHOP</b>
        </Link>
      </div>
      {/* <h1 className="logo-headding">E-SHOP</h1> */}
      <div>
        <Link to="/Productpage" className="product-link">
          <b>PRODUCT</b>
        </Link>
      </div>

      <div className="navbar-item-wrapper">
        {productapi.map((item) => {
          return (
            <Link to="Men" className="navbar-item-link" key={item.id}>
              {item.categoryName}
            </Link>
          );
        })}
      </div>

      <div className="input-wrapper">
        <input
          onChange={(e) => inputHandler(e)}
          type="search"
          className="navbar-input"
          placeholder="Search for product"
        />
        {/* {filteredData?.map((item) => {

    })} */}
      </div>

      <div className="link-wrapper">
        <Link to="/LoginPage" className="navbar-link">
          <CgProfile className="navbar-icon" />
        </Link>
        <Link to="/wishlistpage" className="navbar-link" href="/">
          <WishIcon className="navbar-icon" />
        </Link>
        <Link to="/CartPage" className="navbar-link" href="/">
          <BagIcon className="navbar-icon" />
        </Link>
      </div>
    </div>
  );
};
