import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/favicon.png'; // Asegúrate de que la ruta del logo sea correcta

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Aquí se muestra el logo */}
        <Link className="navbar-brand me-auto" to="/">
          <img src={logo} alt="Logo de Tu Empresa" width="60" />
          <span className="logo-text">RUMBO</span> {/* Aquí se añade la palabra "Rumbo" */}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">P.Q.R.S</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/servicios">SERVICIOS</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
