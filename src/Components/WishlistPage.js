import { Layout } from "./Layout"
import "./WishlistPage.css"
export const WishlistPage = ()=>{
    return(
        <Layout>
            <div className="wishlist-page">
                {/* <div className="wishlist-wrapper"> */}
                    <div className="wishlist-headding">
                        <h2>My Wishlist (0 items)</h2>
                        <div className="wishlist-product-list"></div>

                    </div>

                {/* </div> */}

            </div>
        </Layout>
    )
}