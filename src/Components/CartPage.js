import { Layout } from "./Layout"
import "./CartPage.css"
export const CartPage = ()=>{
    return(
        <Layout>
            <div className="cartpage">
            <h1>MY CART ( 0 )</h1>
                <div className="cart-page-wrapper">
                    <h3><b>PRICE-DETAILS</b></h3>
                    <div className="blank-div"></div>
                    <div className="item-price">
                        <p className="total-price">TOTAL-AMOUNT</p>
                        <p>(0)</p>
                    </div>
                        <div className="blank-div"></div>
<p>You will save 55% on this order</p>
<a href="/">
<button className="proceed-btn">PROCEED TO SHIPPING</button>

</a>
                </div>


            </div>
        </Layout>
    )
}