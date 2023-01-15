import React from "react";

const Loading = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading