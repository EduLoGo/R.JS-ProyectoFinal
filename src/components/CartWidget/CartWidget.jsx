import React from "react";
import "./CartWidget.css"

const CartWidget = () =>{
    return(
        <button type="button" className="btn__cart btn position-relative rounded-pill">
            <img src={"/images/cart.svg"} alt={"Carrito"}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">2</span>
        </button>
    )
}

export default CartWidget