import React from 'react'
import img from "./LOGO1.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg amigo4 d-flex fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={img} className=' amigo'/>
          </a>
          <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item px-3">
                <a className="nav-link fs-4" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link fs-4" href="/product">Product</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link fs-4" href="/event">Event</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link fs-4" href='/about'>About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
