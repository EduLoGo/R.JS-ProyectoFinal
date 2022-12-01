import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="container">
      <div className="row">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/"><img src={"images/alma_logo.jpg"} alt={"Alma Gourmet"} width={32}/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/hamburguesas">Hamburguesas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/empanadas">Empanadas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/sandwichs">Sandwichs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/pizzas">Pizzas</a>
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
    /* <div className="container">
      <div className="row">
        <div className="col-md-6">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Navbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Pricing</a>
                  </li>
                </ul>
              </div>
            </div>  
          </nav>
        </div>
        <div className="col-md-6 d-flex justify-content-end align-items-center">
          <CartWidget />
        </div>
      </div>
    </div> */


export default NavBar;