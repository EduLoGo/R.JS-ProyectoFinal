import React from "react";
import { useParams, Link } from "react-router-dom";

const ViewOrder = () => {
    const {numOrder} = useParams();

    return(
        <div className='container text-center mt-5'>
            <div className="row justify-content-md-center">
                <div className="col-md-8 text-center">
                    <div className="alert alert-success text-center mb-5" role="alert">
                        <h1>¡Muchas Gracias por tu Compra!</h1>
                        <p>Tu número de Comprobante es: <b>{numOrder}</b></p>
                    </div>
                    <Link to={"/"}><button type="button" className="btn btn-outline-secondary col-4">Volver a la Página Principal</button></Link>
                </div>
            </div>
        </div>
    )
}

export default ViewOrder