import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-4 px-2">
      <Container>
        <Row>
          <Col md={3}>
            <h5>FanarGame</h5>
            <p>Llámanos estamos para servirte: 3143668016</p>
            <p>Correo electrónico: ronaldalvarez172@gmail.com</p>
          </Col>
          <Col md={3}>
            <h5>Nuestros servicios</h5>
            <ul>
              <li>Creación de aplicativos</li>
              <li>Desarrollo de proyectos</li>
              <li>Investigación</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Nuestra Compañía</h5>
            <ul>
              <li>Gran Personal humano</li>
              <li>Dedicados con el desarrollo</li>
              <li>En beneficios de nuestra gente</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Nuestras Redes</h5>
            <div className="d-flex">
              <Link to="#" className="me-3">
                <img src="ruta/instagram-icon.png" alt="Instagram" />
              </Link>
              <Link to="#">
                <img src="ruta/facebook-icon.png" alt="Facebook" />
              </Link>
            </div>
            <p>&copy; 2022 HBSales Inc.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
