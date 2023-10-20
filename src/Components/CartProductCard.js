import axios from "axios";

export const CartProductCard = (props) => {
  const { item, cartDeleteHandler} = props;

  async function cartItemIncreaseHandler  (_id , type) {
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
    const response = await axios.post(postApiUrl, requestBody ,requestHeaders )
    console.log(response);
  };
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
              className="quantity-plus-btn"
              onClick={() => cartItemIncreaseHandler(item._id , "increment")}
            >
              +
            </button>
            <spam>{item.qty}</spam>
            <button className="quantity-minus-btn"  onClick={() => cartItemIncreaseHandler(item._id , "decrement")}>-</button>
          </div>
        </div>

        <div className="e-card-btn">
          <button className="Cancle-Btn" onClick={cartDeleteHandler}>
            Remove from cart
          </button>

          <button className="Cancle-Btn">Add to wishlist</button>
        </div>
      </div>
    </div>
  );
};
