import "./Wishicon.css"
import {AiOutlineHeart} from "react-icons/ai"
import{ BsBag} from "react-icons/bs"
export const WishIcon = ()=>{
    return(
        <div className="wish-icon-wrapper">
            <AiOutlineHeart className="wish-icon"/>
            <span className="wish-icon-value">2</span>
        </div>
        
    )
}

export const BagIcon = ()=>{
    return(
<div className="bag-icon-wrapper">
    <BsBag className="bag-icon"/>
    <span className="bag-icon-value">12</span>
</div>
    )
}