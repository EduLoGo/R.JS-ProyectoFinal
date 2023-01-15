import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const {cart, removeItem, clear, sumTotal, cartTotal} = useContext(CartContext)

    if (cartTotal() === 0){
        return (
            <div className='container text-center mt-5'>
                <div className="row justify-content-md-center">
                    <div className="col-md-8 text-center">
                        <div className="alert alert-danger text-center" role="alert">
                            ¡No hay productos cargados en el carrito!
                        </div>
                        <Link to={"/"}><button type="button" className="btn btn-secondary col-2">Ir al Menu</button></Link>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className='container mt-5'>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                    <table className="table table-responsive-md">
                        <thead>
                            <tr className="text-center">
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Quitar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr className="text-center align-middle" key={item.id}>
                                    <td><img src={item.picture} alt={item.tittle} height={40} /></td>
                                    <td>{item.title}</td>
                                    <td>{item.cantidad}</td>
                                    <td>${item.price * item.cantidad}</td>
                                    <td><Link onClick={() => {removeItem(item.id)}}> <img src={"/images/eliminar.png"} alt={"Eliminar Producto"} width={24} /></Link></td>
                                </tr>
                            ))}
                                <tr className="text-center align-middle">
                                    <td colSpan={3}><b>Total a Pagar:</b></td>
                                    <td><b>${sumTotal()}</b></td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <th scope="col" className="text-center"><Link onClick={clear} className="btn btn-danger" title="Vaciar Carrito">Vaciar Carrito</Link></th>
                                    <th scope="col" className="text-end" colSpan={4}><Link to={"/checkout"} className="btn btn-danger" title="Finalizar Compra">Finalizar Compra</Link></th>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;