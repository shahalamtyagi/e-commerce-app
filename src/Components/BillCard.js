import "./BillCard.css";

export const BillCard =  ()=>{
return(
    <div className="cartpage">
    <div className="cart-page-wrapper">
      <h3>
        <b className="price-text">PRICE-DETAILS</b>
      </h3>
      <div className="blank-div">
        <p>Price:</p>
        <p>6754</p>
      </div>
      <div className="item-price">
       
      </div>
      <div className="blank-div-2">
      <p>TOTAL-AMOUNT =</p>
        <p>2345</p>
      </div>
      <p>You will save 55% on this order</p>
      <a href="/">
        <button className="proceed-btn">PROCEED TO SHIPPING</button>
      </a>
    </div>
  </div>
)
}