import { useContext } from "react";
import "./BillCard.css";

export const BillCard = (props) => {
  const { cartData } = props;

  const totalPrice = cartData.reduce((initialValue, currentEle) => {
    const { price, qty } = currentEle;
    initialValue = initialValue + price * qty;
    return initialValue;
  }, 0);

  const cartPrice = cartData.reduce((initialValue, currentEle) => {
    const { price, qty } = currentEle;
    initialValue = price * qty;
    return initialValue;
  }, 0);

   return (
    <div className="cartpage">
      <div className="cart-page-wrapper">
        <h3>
          <b className="price-text">PRICE-DETAILS</b>
        </h3>
        <div className="blank-div">
        
        </div>
        <div className="cartPrice-container">
        {cartData.map((item) => {
          return (
            <p >
              {item.title}...,  {item.price}  (item {item.qty})
            </p>
          );
        })}
      </div>

       
        <div className="item-price"></div>
        <div className="blank-div-2">
          <p>TOTAL-AMOUNT =</p>
          <p>{totalPrice}</p>
        </div>
        <p>You will save 55% on this order</p>
        <a href="/">
          <button className="proceed-btn">PROCEED TO SHIPPING</button>
        </a>
      </div>
    </div>
  );
};
