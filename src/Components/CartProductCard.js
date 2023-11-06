import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../Context";

export const CartProductCard = (props) => {
  const Context = useContext(AppContext);
  const { dispatch, state } = Context;
  const { item, cartDeleteHandler, cartArray } = props;

  const wishlistApiUrl = "/api/user/wishlist";

  const requestBody = {
    product: item,
  };

  const encodedToken = localStorage.getItem("encodedToken");

  const requestHeaders = {
    headers: {
      authorization: encodedToken,
    },
  };

  const movetoWishlistHandler = async () => {
    const res = await axios.post(wishlistApiUrl, requestBody, requestHeaders);
    dispatch({ type: "wish-Item", payload: res.data.wishlist });
    cartDeleteHandler();
  };

  async function cartItemIncreaseHandler(_id, type) {
    const postApiUrl = `/api/user/cart/${_id}`;
    const encodedToken = localStorage.getItem("encodedToken");

    const requestHeaders = {
      headers: {
        authorization: encodedToken,
      },
    };

    const requestBody = {
      action: {
        type: type,
      },
    };

    const response = await axios.post(postApiUrl, requestBody, requestHeaders);
    cartArray(response.data.cart);
  }

  async function removeFromCartHandler(_id) {
    const encodedToken = localStorage.getItem("encodedToken");

    const requestHeaders = {
      headers: {
        authorization: encodedToken,
      },
    };

    const cartlistdeleteApiUrl = `/api/user/cart/${_id}`;
    const res = await axios.delete(cartlistdeleteApiUrl, requestHeaders);
    dispatch({
      type: "cartItem",
      payload: res.data.cart,
    });

    cartDeleteHandler();
  }
  const inWishlist = state.wishListArray.some((pro) => pro._id === item._id);
  return (
    <div className="e-card-container">
      <div className="e-image-card-wrapper">
        <img className="e-card-image" src={item.src} alt="no img" />
      </div>
      <div className="e-card-headding">
        <p className="image-name">
          <b className="e-card-title">{item.title}</b>
        </p>
        <p>Hans Garments</p>
        <p className="e-card-price">{item.price}</p>
        <div>
          <div className="quantity-btn">
            <b>Quantity :</b>

            <button
              disabled={item.qty === 1}
              className="quantity-minus-btn"
              onClick={() => cartItemIncreaseHandler(item._id, "decrement")}
            >
              -
            </button>
            <spam>{item.qty}</spam>

            <button
              className="quantity-plus-btn"
              onClick={() => cartItemIncreaseHandler(item._id, "increment")}
            >
              +
            </button>
          </div>
        </div>

        <div className="e-card-btn">
          <button
            className="Cancle-Btn"
            onClick={() => cartDeleteHandler(item._id)}
          >
            Remove from cart
          </button>
          {inWishlist ? (
            <button
              className="Cancle-Btn"
              onClick={() => removeFromCartHandler(item._id)}
            >
              Move to wishlist
            </button>
          ) : (
            <button className="Cancle-Btn" onClick={movetoWishlistHandler}>
              Move to wishlist
            </button>
          )}
          {/* <button className="Cancle-Btn" onClick={movetoWishlistHandler}>Move to wishlist</button> */}
        </div>
      </div>
    </div>
  );
};
