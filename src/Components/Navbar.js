import { CgProfile } from "react-icons/cg";
import "./Navbar.css";
import { BagIcon, WishIcon } from "./Wishicon";
export const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <h1 className="logo-headding">E-SHOP</h1>
      <div className="navbar-item-wrapper">
        <a href="/" className="navbar-item-link">Men</a>
        <a href="/" className="navbar-item-link">Women</a>
        <a href="/" className="navbar-item-link">Kids</a>
        <a href="/" className="navbar-item-link">Home</a>
        <a href="/" className="navbar-item-link">Beauty</a>
        <a href="/" className="navbar-item-link">Studio</a>
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
          <CgProfile className="navbar-icon"  />
        </a>
        <a className="navbar-link" href="/">
          <WishIcon className="navbar-icon"/>
        </a>
        <a className="navbar-link" href="/">
          <BagIcon className="navbar-icon" />
        </a>
      </div>
    </div>
  );
};
