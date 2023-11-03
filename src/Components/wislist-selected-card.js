import axios from "axios";
import "./WishlistSelectedCard.css";
import { useContext } from "react";
import { AppContext } from "../Context";


export const WishListSelectedCard = (props) => {
//     const context = useContext(AppContext);
//   const { dispatch, state } = context;

  const { item, wishlistList}=props
// // //   const inWishList = state.cartListCart?.some((pro) => pro._id === item._id);
    

//     const cartApiUrl = "/api/user/cart";
//     const requestBody = {
//       product: item,
//     };
  
//     const encodedToken = localStorage.getItem("encodedToken");
  
//     const requestHeaders = {
//       headers: {
//         authorization: encodedToken,
//       },
//     };
  
//     const addtocartHandler = async () => {
//       const res = await axios.post(cartApiUrl, requestBody, requestHeaders);
//       if (res.status === 201 || 200) {
//         const response = await axios.get(cartApiUrl, requestHeaders);
//         dispatch({ type: "cart-List-Cart", payload: response.data.cart });
//       }
//     };
  
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


// const removeWishlistHandler = async (_id) => {
//     const wishlistdeleteApiUrl = `/api/user/wishlist/${_id}`;

//     const response = await axios.delete(wishlistdeleteApiUrl, requestHeaders);

 
//   };
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
      
         <button type="btn" className="cart-btn">
           Add to Cart
          </button>
          {/* <button type="btn" className="cart-btn" >
           Remove from Cart
          </button> */}

          <button type="btn" className="wishlist-btn" >
            Remove wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
