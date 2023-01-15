import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return (
        <div className="card text-center">
            <img src={producto.picture} className="imgnp-fluid imgFixed" alt={producto.title} />
            <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text"><b>${producto.price}</b></p>
                <Link to={"/item/" + producto.id}><button type="button" className="btn btn-secondary">Ver Más</button></Link>
            </div>
        </div>
    )
}

export default Item;