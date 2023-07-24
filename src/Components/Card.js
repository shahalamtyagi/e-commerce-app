import { AiFillStar } from "react-icons/ai";
import "./Card.css";
import { postcall, getData } from "./ResuableFunction";
import { useEffect ,useState} from "react";

export const WatchCard = (props) => {
  const [ wishData , setwishData] = useState({});
  const { item } = props;
  const { price, title, author, src } = item;


  const addtoWishlistHandler = async()=>{
    const requestBody = {
      product: item,
    };
    const response = await postcall(wishlistApiUrl,requestBody)
    console.log(response);
  }
  

  const wishlistApiUrl = "/api/user/wishlist"
  useEffect(()=>{
    getData(wishlistApiUrl, setwishData);
        console.log(wishData);
  },[])

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
          <button type="btn" className="cart-btn">
            Add to Cart
          </button>
        </div>
        <div>
          <button onClick={addtoWishlistHandler} type="btn" className="wishlist-btn">
            Add to Wishlist
          </button>
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
