import { Layout } from "./Layout";

import "./CartPage.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { getData } from "./ResuableFunction";
import { AppContext } from "../Context";
import { CartProductCard } from "./CartProductCard";
import { BillCard } from "./BillCard";

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
      // console.log(cartItem);
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
    console.log(response);

dispatch({
  type: "delete-Cart-Value" , payload: cartDeleteHandler
})
    
  };

  

  return (
    <Layout>
      <div className="e-main-card-container">
        <BillCard  cartData= {cartItem}/>

        <div>
          {cartItem?.map((item) => {
            return (
              <CartProductCard
                item={item}
              setCartItem ={setCartItem}
                cartDeleteHandler={()=>cartDeleteHandler(item._id)}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
