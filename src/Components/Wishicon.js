import "./Wishicon.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { useEffect, useState } from "react";
import { getData } from "./ResuableFunction";

export const WishIcon = () => {
  const [wishData, setwishData] = useState({});

  const wishlistApiUrl = "/api/user/wishlist";
  useEffect(() => {
    getData(wishlistApiUrl, setwishData);
    console.log(wishData);
  }, []);

  return (
    <div className="wish-icon-wrapper">
      <AiOutlineHeart className="wish-icon" />
      <span className="wish-icon-value">12</span>
    </div>
  );
};

export const BagIcon = () => {
  return (
    <div className="bag-icon-wrapper">
      <BsBag className="bag-icon" />
      <span className="bag-icon-value">43</span>
    </div>
  );
};
