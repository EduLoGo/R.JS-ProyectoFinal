import React from "react";
import Item from "../Item/Item";
import './ItemList.css'

const ItemList = ({ productos }) => {
    return (
        <div className="text-center">
            <div className="row">
                {
                    productos.map(producto =>
                        <div className="col-md-4 mb-3" key={producto.id}>
                            <Item producto={producto} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ItemList;