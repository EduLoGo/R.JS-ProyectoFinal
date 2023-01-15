import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore} from "firebase/firestore";
import { Navigate } from "react-router-dom";

const Checkout = () => {
    const { cart, clear, sumTotal } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [numOrden, setNumOrder] = useState("");

    const guardarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer: {name:nombre, phone:telefono, email:email},
            items: cart.map(i => ({id:i.id, title:i.title, price:i.price, quantity:i.cantidad, priceTotal: i.cantidad * i.price})),
            total: sumTotal(),
            buyDate: `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()} - ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        }
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then((resolve) => {
            setNumOrder(resolve.id);
            clear();
        })
    }

    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-10">
                    <table className="table table-responsive-md">
                        <thead>
                            <tr className="text-center">
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr className="text-center align-middle" key={item.id}>
                                    <td><img src={item.picture} alt={item.tittle} height={40} /></td>
                                    <td>{item.title}</td>
                                    <td>{item.cantidad}</td>
                                    <td>${item.price * item.cantidad}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-8">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre Completo:</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Juan Perez" onInput={(k) => {setNombre(k.target.value)}}></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telefono de Contacto:</label>
                            <input type="text" className="form-control" id="telefono" placeholder="Ingrese su número telefónico" onInput={(k) => {setTelefono(k.target.value)}}></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telefono de Contacto:</label>
                            <input type="email" className="form-control" id="email" placeholder="Ingrese su correo electrónico" onInput={(k) => {setEmail(k.target.value)}}></input>
                        </div>
                        <div className="text-center">
                            <button type="button" onClick={guardarOrden} className="btn btn-primary">Finalizar Pedido</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col text-center mt-5">
                    {numOrden ? <Navigate to={"/thankyou/" + numOrden} /> : ""}
                </div>
            </div>
        </div>
    )
}


export default Checkout