import React from 'react';
import { objetoProducto } from '../../asyncMock'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect (() => {
        objetoProducto(id).then(data => {
            setItem(data);
        })
    },[id]);

    return(
        <div className='container'>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer 