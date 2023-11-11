import axios from "axios";
import "./WishlistSelectedCard.css";
import { useContext } from "react";
import { AppContext } from "../Context";

export const WishListSelectedCard = (props) => {
  const context = useContext(AppContext);
  const { dispatch, state } = context;

  const { wishlistList } = props;
  // // //   const inWishList = state.cartListCart?.some((pro) => pro._id === item._id);

  const cartApiUrl = "/api/user/cart";
  const requestBody = {
    product: wishlistList,
  };

  const encodedToken = localStorage.getItem("encodedToken");

  const requestHeaders = {
    headers: {
      authorization: encodedToken,
    },
  };

  const movetocartHandler = async () => {
    const res = await axios.post(cartApiUrl, requestBody, requestHeaders);

    dispatch({ type: "cart-List-Cart", payload: res.data.cart });
    if (res.status === 201 || 200) {
      const response = await axios.get(cartApiUrl, requestHeaders);
      dispatch({ type: "cartItem", payload: response.data.cart });
    }
  };

  //     async function removeFromCartHandler(_id) {
  //       const cartlistdeleteApiUrl = `/api/user/cart/${_id}`;
  //       const res = await axios.delete(cartlistdeleteApiUrl, requestHeaders);

  //       if (res.status === 201 || 200) {
  //         const response = await axios.get(cartApiUrl, requestHeaders);

  //         dispatch({
  //           type: "cart-List-Cart",
  //           payload: response.data.cart,
  //         });
  //       }
  //     }

  const wishlistApiUrl = "/api/user/wishlist";

  const removeWishlistHandler = async (_id) => {
    const wishlistdeleteApiUrl = `/api/user/wishlist/${_id}`;

    const response = await axios.delete(wishlistdeleteApiUrl, requestHeaders);
    dispatch({
      type: "wish-Item",
      payload: response.data.wishlist,
    });
    if (response.status === 201 || 200) {
      const res = await axios.get(wishlistApiUrl, requestHeaders);
      dispatch({
        type: "wish-Item",
        payload: res.data.wishlist,
      });
    }
  };
  return (
    <div className="main-container-card">
      <img className="image-card" src={wishlistList.src} alt="watch image" />

      <div className="card-text-wrapper">
        <p className="image-name">
          <b className="title">{wishlistList.title}</b>
        </p>
        <p>{wishlistList.author}</p>
        <p className="image-cost">Offer-Price:{wishlistList.price}</p>
      </div>

      <div className="btn-wrapper">
        <div>
          <button type="btn" className="cart-btn" onClick={movetocartHandler}>
            Move to Cart
          </button>
          {/* <button type="btn" className="cart-btn" >
           Remove from Cart
          </button> */}

          <button
            type="btn"
            className="wishlist-btn"
            onClick={() => removeWishlistHandler(wishlistList._id)}
          >
            Remove wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
