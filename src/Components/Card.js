import { AiFillStar } from "react-icons/ai";
import "./Card.css";
import { postcall, getData } from "./ResuableFunction";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../Context";

export const WatchCard = (props) => {
  const context = useContext(AppContext);
  const { dispatch, state } = context;
  const [wishData, setwishData] = useState([]);
  const [cartData, setcartData] = useState([]);

  const [cartName, setcartName] = useState("Add To Cart");

  const [wishlistName, setwishlistName] = useState("Add To Wishlist");

  const { item } = props;
  const { price, title, author, src, _id } = item;

  const inCart = state.setCartItem?.some((pro) => pro._id === item._id);
  console.log(inCart);



  const addtoWishlistHandler = async () => {
    const requestBody = {
      product: item,
    };
    const encodedToken = localStorage.getItem("encodedToken");

    const requestHeaders = {
      headers: {
        authorization: encodedToken,
      },
    };
    if (wishlistName === "Add To Wishlist") {
      const response = await postcall(wishlistApiUrl, requestBody);
      if (response.status === 201 || 200) {
        const response = await axios.get(wishlistApiUrl, requestHeaders);
        dispatch({
          type: "get_wishlist",
          payload: response.data.wishlist.length,
        });
        setwishlistName("Remove wishlist");
      }
    }
    if (wishlistName === "Remove wishlist") {
      const wishlistdeleteApiUrl = `/api/user/wishlist/${_id}`;
      const encodedToken = localStorage.getItem("encodedToken");
      const requestHeaders = {
        headers: {
          authorization: encodedToken,
        },
      };
      const response = await axios.delete(wishlistdeleteApiUrl, requestHeaders);

      if (response.status === 201 || 200) {
        dispatch({
          type: "get_wishlist",
          payload: response.data.wishlist.length,
        });
        setwishlistName("Add To Wishlist");
      }
    }
  };

  const wishlistApiUrl = "/api/user/wishlist";
  useEffect(() => {
    getData(wishlistApiUrl, setwishData);
  }, []);

  // for cart

  const cartApiUrl = "/api/user/cart";
  const requestBody = {
    product: item,
  };

  const encodedToken = localStorage.getItem("encodedToken");

  const requestHeaders = {
    headers: {
      authorization: encodedToken,
    },
  };

  const addtocartHandler = async () => {
    const res = await axios.post(cartApiUrl, requestBody , requestHeaders);
    if (res.status === 201 || 200) {
      const response = await axios.get(cartApiUrl, requestHeaders);
      dispatch({ type: "set-Cart-Item", payload: response.data.cart });
    }
    // const requestBody = {
    //   product: item,
    // };

    // const encodedToken = localStorage.getItem("encodedToken");

    // const requestHeaders = {
    //   headers: {
    //     authorization: encodedToken,
    //   },
    // };
    // if (cartName === "Add To Cart") {
    //   const response = await postcall(cartApiUrl, requestBody);
    //   if (response.status === 201 || 200) {
    //     const response = await axios.get(cartApiUrl, requestHeaders);
    //     dispatch({ type: "get_cartitem", payload: response.data.cart.length });
    //     setcartName("Remove from Cart");
    //   }
    // }

    // if (cartName === "Remove from Cart") {
    //   const cartlistdeleteApiUrl = `/api/user/cart/${_id}`;
    //   const encodedToken = localStorage.getItem("encodedToken");
    //   const requestHeaders = {
    //     headers: {
    //       authorization: encodedToken,
    //     },
    //   };
    //   const response = await axios.delete(cartlistdeleteApiUrl, requestHeaders);

    //   if (response.status === 201 || 200) {
    //     dispatch({
    //       type: "get_cartitem",
    //       payload: response.data.cart.length,
    //     });
    //     setcartName("Add To Cart");
    //   }
    // }
  };

  async function removeFromCartHandler() {
    const cartlistdeleteApiUrl = `/api/user/cart/${_id}`;
    const res = await axios.delete(cartlistdeleteApiUrl, requestHeaders);

    if (res.status === 201 || 200) {
      const response = await axios.get(cartApiUrl, requestHeaders);
      
      dispatch({
        type: "set-Cart-Item",
        payload: response.data.cart,
      });
    }
  }
  useEffect(() => {
    getData(cartApiUrl, setcartData);
  }, []);

  // for wishlistdelte method

  const wishlistdeleteHandler = async () => {
    const wishlistdeleteApiUrl = `/api/user/wishlist/${_id}`;
    const encodedToken = localStorage.getItem("encodedToken");
    const requestHeaders = {
      headers: {
        authorization: encodedToken,
      },
    };
    const response = await axios.delete(wishlistdeleteApiUrl, requestHeaders);

    if (response.status === 201 || 200) {
      dispatch({
        type: "get_wishlist",
        payload: response.data.wishlist.length,
      });
    }
  };

  const cartlistdeleteHandler = async () => {
    const cartlistdeleteApiUrl = `/api/user/cart/${_id}`;
    const encodedToken = localStorage.getItem("encodedToken");
    const requestHeaders = {
      headers: {
        authorization: encodedToken,
      },
    };
    const response = await axios.delete(cartlistdeleteApiUrl, requestHeaders);

    if (response.status === 201 || 200) {
      dispatch({
        type: "set-Cart-Item",
        payload: response.data.cart.length,
      });
    }
  };

  return (
    <div className="main-container-card">
      <img className="image-card" src={src} alt="watch image" />

      <div className="card-text-wrapper">
        <p className="image-name">
          <b className="title">{title}</b>
        </p>
        <p>{author}</p>
        <p className="image-cost">Offer-Price:{price}</p>
      </div>

      <div className="btn-wrapper">
        <div>
          {inCart ? (
            <button
              onClick={removeFromCartHandler}
              type="btn"
              className="cart-btn"
            >
              Remove From Cart
            </button>
          ) : (
            <button onClick={addtocartHandler} type="btn" className="cart-btn">
              Add To Cart
            </button>
          )}
        </div>
        <div>
          <button
            onClick={addtoWishlistHandler}
            type="btn"
            className="wishlist-btn"
          >
            {wishlistName}
          </button>
          {/* <button onClick={cartlistdeleteHandler}>Delete from wishlist</button> */}
        </div>
      </div>
    </div>
  );
};

export const ImgCard = () => {
  return (
    <div class="card">
      <img
        src="https://images.unsplash.com/flagged/photo-1568004614679-c938da0922fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob3BwaW5nJTIwY2FydHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBzaG9wcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60://images.unsplash.com/photo-1584953528649-b522a1b499b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60://plus.unsplash.com/premium_photo-1661372041123-1eda2823211e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hcmtldCUyMHBvaW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="Avatar"
      />
      <div class="container">
        <h4>
          <b>Summer & Winter</b>
        </h4>
        <p>Online Shopping is better</p>
      </div>
    </div>
  );
};

// export const AirpodCard = () =>{
//     return(
//         <div className="main-container">
//             <div className="card-container">
//                 <img className="card-img" src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="watch image"/>
//                 <h4 className="image-name">Airpods</h4>
//                 <p>Men multi function Airpods</p>
//                 <h5 className="image-cost">$70.10</h5>
//                 <div className=" star image-star">
//                     <i className="image-icon cheked"> <AiFillStar/></i>
//                     <i className="image-icon cheked"> <AiFillStar/></i>
//                     <i className="image-icon cheked"> <AiFillStar/></i>
//                     <i className="image-icon cheked"> <AiFillStar/></i>
//                     <i className="image-icon"> <AiFillStar/></i>
//                 </div>
//                 <div className="btn-container">
//                     <button type="btn" className="btn">Add to bag </button>
//                 </div>
//             </div>
//             </div>
//     )
// }

// export const ShoesCard = ()=>{
//     return(
//         <div className="main-container">
//         <div className="card-container">
//         <img className="card-img" src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="watch image"/>
//         <h4 className="image-name">Shoes</h4>
//         <p>Men multi function Shoes</p>
//         <h5 className="image-cost">$20.10</h5>
//         <div className=" star image-star">
//             <i className="image-icon cheked"> <AiFillStar/></i>
//             <i className="image-icon cheked"> <AiFillStar/></i>
//             <i className="image-icon cheked"> <AiFillStar/></i>
//             <i className="image-icon"> <AiFillStar/></i>
//             <i className="image-icon"> <AiFillStar/></i>
//         </div>
//         <div className="btn-container">
//             <button type="btn" className="btn">Add to bag</button>
//         </div>
//     </div>
//     </div>
//     )
// }
