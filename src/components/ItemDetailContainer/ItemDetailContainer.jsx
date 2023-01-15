import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import Loading from '../Loading/Loading';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect (() => {
        const db = getFirestore();
        const archivo = doc(db,"items", id)
        getDoc(archivo).then((producto) => {
            if (producto.exists()) {
                setItem({id:producto.id, ...producto.data()})
                setLoading(false);
            }
        })
    }, [id]);

    return(
        <div className='container'>
            {loading ? <Loading/> : <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer 