import { useState, useEffect } from "react";
import { CartPage } from "./CartPage";
import { Layout } from "./Layout";

import "./WishlistPage.css";
import axios from "axios";
import { ImgCard, WatchCard } from "./Card";
import { WishListSelectedCard } from "./wislist-selected-card";
export const WishlistPage = () => {
  const [wishlistItem, setWishListItem] = useState([]);
  const wishlistApiUrl = "/api/user/wishlist";

  const encodedToken = localStorage.getItem("encodedToken");

  const requestHeaders = {
    headers: {
      authorization: encodedToken,
    },
  };

  useEffect(() => {
    async function getCartData() {
      const response = await axios.get(wishlistApiUrl, requestHeaders);
      const wishlistProduct = response.data.wishlist;

      setWishListItem(wishlistProduct);
    }

    getCartData();
  }, []);

  return (

    <Layout>
        <div className="wishlist-page-container">
      {wishlistItem?.map((wishItem) => {
        return <WishListSelectedCard  wishlistList={wishItem}/>;

      })}
      </div>
    </Layout>
  );
};
