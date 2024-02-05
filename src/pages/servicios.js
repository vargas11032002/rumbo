import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { BiBus, BiCar } from "react-icons/bi";

const Content = () => {
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={6} md={3}>
          <Card className="my-3">
            <Card.Body>
              <BiBus fontSize="large" color="secondary" />
              <Card.Title>Comodidad</Card.Title>
              <Card.Text>
                Camionetas 4 x 4 full equipo, Bus escalera y camperos para el
                servicio rural, buses y busetas para el servicio Urbano.
              </Card.Text>
              <Button variant="primary">Ver más</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={3}>
          <Card className="my-3">
            <Card.Body>
              <BiCar fontSize="large" color="secondary" />
              <Card.Title>Parqueaderos</Card.Title>
              <Card.Text>Descripción del servicio de parqueaderos.</Card.Text>
              <Button variant="primary">Ver más</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Añade más columnas con Cards para los otros elementos */}
      </Row>
    </Container>
  );
};

export default Content;
