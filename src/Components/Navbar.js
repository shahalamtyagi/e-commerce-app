import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <h1>E-SHOP</h1>
      <div className="navbar-item-wrapper">
        <a className="navbar-item-link"href="/">Men</a>
        <a className="navbar-item-link"href="/">Women</a>
        <a className="navbar-item-link"href="/">Kids</a>
        <a className="navbar-item-link"href="/">Home & Living</a>
        <a className="navbar-item-link"href="/">Beauty</a>
        <a className="navbar-item-link"href="/">Studio</a>
      </div>
      <div className="link-wrapper">
        <span>
          <AiOutlineSearch className="search-icon" />
        </span>
        <input
          type="search"
          className="navbar-input"
          placeholder="Search for product, brand..."
        />

<a className="/" href="/">
          <span>
            <CgProfile className="profile-icon" />
          </span>
          
        </a>
        <a className="/" href="/">
          <span>
            <AiOutlineHeart className="heart-wish-icon" />
          </span>
         
        </a>
        <a className="/" href="/">
          <span>
            <BsBag className="bag-icon" />
          </span>
        
        </a>
</div>
       
        </div>

  );
};
