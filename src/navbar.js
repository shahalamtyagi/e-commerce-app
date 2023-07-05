import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import "./navbar.css";
export const EcommerceNavbar = () => {
  return (
    <div className="e-commerce-navbar-wrapper">
      <h1>E-SHOP</h1>
      <div className="e-commerce-link-wrapper">
        <span>
          <AiOutlineSearch className="search-icon" />
        </span>
        <input
          type="search"
          className="e-navbar-input"
          placeholder="Search for product, brand..."
        />

        <a className="e-navbar-link" href="/">
          <span>
            <CgProfile className="e-commerce-icon" />
          </span>
          Profile
        </a>
        <a className="e-navbar-link" href="/">
          <span>
            <AiOutlineHeart className="e-commerce-icon" />
          </span>
          Wishlist
        </a>
        <a className="e-navbar-link" href="/">
          <span>
            <BsBag className="e-commerce-icon" />
          </span>
          Bag
        </a>
      </div>
    </div>
  );
};
