import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({stockDisp, onAdd}) => {
    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockDisp);
    const [vendido, setVendido] = useState(false); 

    useEffect(() => {
        setStock(stockDisp);
    },[stockDisp])

    const restar = () => {
        if(counter>1){
            setCounter(counter - 1)
        }
    }

    const sumar = () => {
        if(counter < stock){
            setCounter(counter + 1)
        }   
    }

    const addToCart = (counter) => {
        setStock(stockDisp - counter);
        setCounter(1);
        setVendido(true);
        onAdd(counter);
    }

    return (
        <div className=''>
            <div className='d-flex justify-content-center gap-4 mt-3'>
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-secondary" onClick={restar}>-</button>
                    <button type="text" className="btn btn-dark">{counter}</button>
                    <button type="button" className="btn btn-secondary" onClick={sumar}>+</button>
                </div>
                <div>
                    {vendido ? <Link to={"/cart"} className="btn btn-primary">Finalizar Compra</Link> : <button className="btn btn-primary" onClick={() => {addToCart(counter)}}>Agregar al Carrito</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;