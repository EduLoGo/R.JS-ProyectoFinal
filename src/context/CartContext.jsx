import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, cantidad) =>{
        if (isInCart(item.id)) {
            let pos = cart.findIndex(x => x.id === item.id);
            cart[pos].cantidad += cantidad;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, cantidad:cantidad}]);
        }
    }

    const removeItem = (id) => {
        const productos = cart.filter(item => item.id !== id);
        setCart(productos);
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) =>{
        return cart.some(item => item.id === id);
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total += item.cantidad, 0)
    }

    const sumTotal = () => {
        return cart.reduce((total, item) => total += item.cantidad * item.price, 0)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartTotal, sumTotal}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;