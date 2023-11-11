import { Layout } from "./Layout"
import "./CardAddress.css"

 export const CardAddress = ()=>{
    return(
        <Layout>
                <div className="main-card-address-wrapper">

            <div className="card-address-container">
            <h2>Select Address</h2>

                <label for= "first-name">NAME</label>
                <input type="text" id="Name"/>

                <label for= "mobile-number">MOBILE NUMBER</label>
                <input type="number" id="Name"/>

                <label for= "">PINCODE</label>
                <input type="number" id="Name"/>

                <label for= "">LOCALITY / AREA</label>
                <input type="text" id="Name" />


             

                <label for= "land-mark">LANDMARK</label>
                <input type="number" id="Name"/>

                <label for= "">DISTRICT/CITY</label>
                <input type="text" id="Name" />

                <label for= "">STATE</label>
                <input type="text" id="Name" />

                <div className="save-btn-container">
                    <button className="save-btn">SAVE</button>
                </div>
            </div>
        </div>
         </Layout>
    )
   
    
    
}