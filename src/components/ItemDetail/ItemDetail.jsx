import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from "../../context/CartContext"
import './ItemDetail.css'

const ItemDetail = ({item}) => {
    const { addItem } = useContext(CartContext);

    const onAdd = (cantidad) => {
        addItem(item, cantidad);
    }

    return(
        <div className='row mt-5 justify-content-center'>
            <div className='col-md-8 text-center carta'>
                <img src={item.picture} className="img-fluid imgFixed m-3" alt={item.title} />
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <h4><b>${item.price}</b></h4>
                <ItemCount stockDisp={item.stock} onAdd={onAdd}/>
                <Link to={"/"}><button type="button" className="btn btn-secondary m-4">Volver</button></Link>
            </div>
        </div>
    )
}

export default ItemDetail