import { Layout } from "./Layout";

import "./CartPage.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { getData } from "./ResuableFunction";
import { AppContext } from "../Context";
import { CartProductCard } from "./CartProductCard";
import { BillCard } from "./BillCard";
import { CardAddress } from "./CardAddress";

export const CartPage = () => {
  const Context = useContext(AppContext);
  const { dispatch, state } = Context;
  const [cartItem, setCartItem] = useState([]);

  const cartApiUrl = "/api/user/cart";

  const encodedToken = localStorage.getItem("encodedToken");

  const requestHeaders = {
    headers: {
      authorization: encodedToken,
    },
  };

  useEffect(() => {
    async function getCartData() {
      const response = await axios.get(cartApiUrl, requestHeaders);
      const cartProduct = response.data.cart;
      
      setCartItem(cartProduct);
      dispatch({
        type : "cartItem", payload:  cartProduct
      })
    }

    getCartData();
  }, []);

  const cartDeleteHandler = async (_id) => {
    const cartDeleteApiUrl = `/api/user/cart/${_id}`;
    const encodedToken = localStorage.getItem("encodedToken");
    const requestHeaders = {
      headers: {
        authorization: encodedToken,
      },
    };
    const response = await axios.delete(cartDeleteApiUrl, requestHeaders);
    setCartItem(response.data.cart)

dispatch({
  type: "cartItem" , payload: response.data.cart
})
    
  };

  

  return (
    <Layout>
      <div className="e-main-card-container">
        <BillCard  cartData= {cartItem}/>
        <CardAddress/>

        <div>
          {cartItem?.map((item) => {
            return (
              <CartProductCard
                item={item}
              cartArray ={setCartItem}
                cartDeleteHandler={()=>cartDeleteHandler(item._id)}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
