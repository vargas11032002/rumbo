import React from 'react';
import { Link } from 'react-router-dom';
import Get from '../components/GetStarted';
import Teg from '../components/GetInTouch';
import headerImg from '../assets/images/headerImg.png';


function Header() {
  return (
    <header className="container-fluid bg-light" style={{ minHeight: '80vh' }}>
      <div className="container d-flex justify-content-center align-items-center flex-wrap-reverse">
        <div className="col-md-6">
          <div className="text-start">
            <h1 className="fw-bold">Buscas cómo viajar seguro, cómodo y tranquilo.</h1>
            <p className="py-3" style={{ lineHeight: 1.6 }}>
              Todo esto al alcance de un clic.
            </p>
            <div className="d-flex">
              <Link
                to="/rutas-client"
                className="btn btn-primary me-2"
                style={{
                  borderRadius: 10,
                  padding: '8px 16px',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bus"
                  viewBox="0 0 16 16"
                  style={{ marginRight: '6px' }}
                >
                  <path d="M0 11.5v2h1v1.5a.5.5 0 0 0 .5.5H3v1h1V15h9v1h1v-1h1v1h1v-1h.5a.5.5 0 0 0 .5-.5V14h1v-2h-1.5V9h-2v1H3v-1H1v2H.5a.5.5 0 0 0-.5.5v1h-1v-1H0v-2zm1-8h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1v-1H1v1H0v-4a2 2 0 0 1 2-2zm1 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm12 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 9H3V9h2v2h6V9h2v4h-1v1h-1v-1H5v1H4v-1z" />
                </svg>
                Rutas
              </Link>
              <Link
                to="/servicios"
                className="btn btn-outline-primary"
                style={{
                  borderRadius: 10,
                  padding: '8px 16px',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                  style={{ marginRight: '6px' }}
                >
                  <path d="M11.742 9.344a5.5 5.5 0 1 0-1.397 1.398h-.001a.5.5 0 0 0 .793.607l3.723 3.724a.5.5 0 0 0 .886-.364v-.001l-3.723-3.724a.5.5 0 0 0-.606-.794zM2 6.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z" />
                </svg>
                Explorar
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src={headerImg}
            alt="headerImg"
            style={{ width: '100%', marginBottom: '-15px' }}
          />
        </div>
      </div>
      <Get/>
      <Teg/>
    </header>
    
  );
}

export default Header;
