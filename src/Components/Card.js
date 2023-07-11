import "./Card.css";
export const WatchCard = () => {
  return (
    <div className="main-container">
      <div className="card-container">
        <img
          className="card-img"
          src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="watch image"
        />
        <h4 className="image-name">Watch</h4>
        <p>Men multi function watch</p>
        <h5 className="image-cost">$50.10</h5>
       
        <div className="btn-container">
          <button type="btn" className="btn">
            Add to Card
          </button>
          <button type="btn" className="btn">
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export const ImgCard = ()=>{
  return(
    <div className=" imgcard-main-wrapper">
      <div className="img-wrapper">
       <img src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"/>
       <div className="text-wrapper">
       <h3>New Brands</h3>
       <p>Summer Collection</p>
       <p>Check out our best Summer Collection to stay warm in style this season</p>
       </div>
      </div>
      <div className="img-wrapper">
       <img src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
       <div className="text-wrapper">
       <h3>New Brands</h3>
       <p>Summer Collection</p>
       <p>Check out our best Summer Collection to stay warm in style this season</p>
       </div>
      </div>
      
    </div>
  )
}

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
