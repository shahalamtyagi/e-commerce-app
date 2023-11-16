import { useEffect, useState } from "react";
import { Layout } from "./Layout";
import "./RadioButtonAddress.css";
import { getData } from "./ResuableFunction";
import axios from "axios";
export const RadioButtonAddress = () => {

  const [cardAddress, setCardAddress] = useState([]);

  const cardAddressApiUrl= "/api/user/address";
  const encodedToken = localStorage.getItem("encodedToken");

  const requestHeaders = {
    headers: {
      authorization: encodedToken,
    },
  };

 

  useEffect(()=>{
    async function cardAddressApi() {
      const cardAddressApiUrl =  "/api/user/address";
  
     
      const response = await axios.get(cardAddressApiUrl, requestHeaders)
      console.log(response);
    }
cardAddressApi(cardAddressApiUrl,setCardAddress)
  },[])
  // console.log(cardAddress);
  return (
    <Layout>
      <div className="main-radio-address-wrapper">
        <div className="radio-address-container">
          <input type="radio" />
          <div className="address-details">
            <h3>
              <b> Name :</b>
            </h3>
            <p>Email :</p>
            <p>Landmark :</p>
            <p>Phone No :</p>

            <p>Locality/Area :</p>
            <p>State :</p>
          </div>

          <div className="radio-address-btn-container">
            <button className="radio-address-edit-btn">Edit</button>
            <button className="radio-address-btn">Delete</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
