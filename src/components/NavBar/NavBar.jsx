import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container">
      <div className="row">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}><img src={"/images/alma_logo.jpg"} alt={"Alma Gourmet"} width={32}/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to={"/category/hamburguesas"}>Hamburguesas</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"category/empanadas"}>Empanadas</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"category/sandwichs"}>Sandwichs</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"category/pizzas"}>Pizzas</NavLink>
                </li>
              </ul>
              <div className="d-flex">
                <CartWidget />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
export default NavBar;