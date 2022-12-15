import React from 'react';
import { useState } from 'react';

const ItemCount = ({stockDisp}) => {
    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockDisp);

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

    const onAdd = () => {
        if (counter <= stock){
            console.log(`Agregaste al carrito ${counter} de productos`)
            setStock(stock - counter);
            setCounter(1);
        }else{
            console.log(`No hay stock disponible`);
        }
        
    }

    return (
        <div className=''>
            <div className='d-flex justify-content-center gap-4 mt-3'>
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-secondary" onClick={restar}>-</button>
                    <button disable type="text" className="btn btn-dark">{counter}</button>
                    <button type="button" className="btn btn-secondary" onClick={sumar}>+</button>
                </div>
                <div>
                    <button type="button" className="btn btn-outline-primary" onClick={() => onAdd(counter)}>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;