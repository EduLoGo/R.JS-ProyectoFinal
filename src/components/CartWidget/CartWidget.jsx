import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom';
import "./CartWidget.css"

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    if (cartTotal() === 0){
        return (
            <Link to={"/cart"} type="button" className="btn__cart btn position-relative rounded-pill">
            <img src={"/images/cart.png"} alt={"Carrito"}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
        </Link>
        )
    }

    return(
        <Link to={"/cart"} type="button" className="btn__cart btn position-relative rounded-pill">
            <img src={"/images/cart.png"} alt={"Carrito"}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
        </Link>
    )
}

export default CartWidget;