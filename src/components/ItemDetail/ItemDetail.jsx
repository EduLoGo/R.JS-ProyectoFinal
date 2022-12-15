import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {
    return(
        <div className='row'>
            <div className='col-md-6 offset-md-3 text-center'>
                <img src={item.picture} className="img-fluid imgFixed" alt={item.title} />
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p><b>${item.price}</b></p>
                <ItemCount stockDisp={item.stock}/>
                <Link to={"/"}><button type="button" className="btn btn-outline-secondary mt-5">Volver</button></Link>
            </div>
        </div>
    )
}

export default ItemDetail