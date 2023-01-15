import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="mt-5">
            <footer className='text-white py-4 fondo05 mt-auto'>
                <div className= 'container'>
                    <nav className= 'row align-items-center'>
                        <Link to="/" className= 'col-12 col-md-4'><img className="logoFooter" src={"/images/alma_logo.jpg"} alt="Alma Gourmet Logo" /></Link>
                        <ul className= 'col-12 col-md-4 list-unstyled'>
                            <li className= 'font-weight-bold mb-2 text-center'>Alma Gourmet ™️</li>
                            <li className= 'text-center'>¡Te invitamos a conocer nuestras recetas hechas con mucho amor y de una manera diferente!</li>
                        </ul>
                        <ul className= 'col-12 col-md-4 list-unstyled'>
                            <li className= 'font-weight-bold mb-2 text-center'>Seguinos en las Redes</li>
                            <li className="d-flex justify-content-evenly">
                                <a rel="noreferrer" href="http://facebook.com" target="_blank"><i className="bi bi-facebook" /></a>
                                <a rel="noreferrer" href="http://instagram.com" target="_blank"><i className="bi bi-instagram" /></a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="text-center pt-3 copyright mt-4">
                    <p>Todos los derechos reservados © 2023 Copyright</p>    
                </div>
            </footer>
        </div>
    )
}

export default Footer