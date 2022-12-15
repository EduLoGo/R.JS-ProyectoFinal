import React from "react";
import { arrayProductos } from '../../asyncMock'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {

    const [producto, setProducto] = useState([]);
    const {category} = useParams();

    useEffect (() => {
        arrayProductos(category).then(productos => {
            setProducto(productos);
        })
    },[category]);


    return (
        <div className="container py-5">
                <ItemList productos={producto} />
        </div>
    )
}

export default ItemListContainer;