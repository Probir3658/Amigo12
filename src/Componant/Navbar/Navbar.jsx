import React from "react";
import img from "./image/Amigologo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg amigo4 d-flex fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={img} alt="LOGO" className="amigo" />
          </a>
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item px-3">
                <a className="nav-link fs-4" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link fs-4" href="/product">
                  Product
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link fs-4" href="/event">
                  Event
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link fs-4" href="/about">
                  About Us
                </a>
              </li>
              {/* <li className="nav-item px-3">
                <a className="nav-link fs-4" href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-person-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                  </svg>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <div className="navbar-back"></div>
    </div>
  );
};

export default Navbar;
