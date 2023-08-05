import { useContext, useEffect, useState } from "react";
import "./Wishicon.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { createContext } from "react";
import axios from "axios";
import { AppContext } from "../Context";

export const WishIcon = () => {
  const [wishlistItem, setwishlistItem] = useState(0);
  const context = useContext(AppContext)
  const {state,dispatch} = context
  const getWishlistHandler = async () => {
   
    const wishlistApiUrl = "/api/user/wishlist";
    const encodedToken = localStorage.getItem("encodedToken");
    const requestHeaders = {
      headers: {
        authorization: encodedToken,
      },
      
    };

    const response = await axios.get(wishlistApiUrl, requestHeaders);
    setwishlistItem(response.data.wishlist.length);
  };
  useEffect(() => {
    getWishlistHandler();
  }, []);

  return (
    <div className="wish-icon-wrapper">
      <AiOutlineHeart className="wish-icon" />
      <span className="wish-icon-value">{state.wishlistitemcount}</span>
    </div>
  );
};

export const BagIcon = () => {
  const [cartlistItem, setcartlistItem] = useState(0);
  const context = useContext(AppContext)
  const {state,dispatch} = context
  const getcartlistHandler = async () => {
    const cartlistApiUrl = "/api/user/cart";
    const encodedToken = localStorage.getItem("encodedToken");
    const requestHeaders = {
      headers: {
        authorization: encodedToken,
      },
    };
    const response = await axios.get(cartlistApiUrl, requestHeaders);
    setcartlistItem(response.data.cart.length);
  };
  useEffect(() => {
    getcartlistHandler();
  }, []);
  return (
    <div className="bag-icon-wrapper">
      <BsBag className="bag-icon" />
      <span className="bag-icon-value">{state.countcartitem}</span>
    </div>
  );
};
