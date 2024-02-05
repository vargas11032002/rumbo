import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Details = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Simular envío de datos
    setIsLoading(true);
    setTimeout(() => {
      alert("Datos enviados: " + JSON.stringify(Object.fromEntries(formData)));
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2>Tu opinión nos importa</h2>
          <p>Califica tu servicio, presenta queja, reclamo o felicitación.</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control type="text" placeholder="Nombre completo" name="name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="cedula">
              <Form.Label>Número de cedula</Form.Label>
              <Form.Control type="text" placeholder="Número de cedula" name="cedula" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="Correo electrónico" name="email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Número telefónico</Form.Label>
              <Form.Control type="text" placeholder="Número telefónico" name="phone" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="placa">
              <Form.Label>Placa vehicular</Form.Label>
              <Form.Control type="text" placeholder="Placa vehicular" name="placa" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="mensaje">
              <Form.Label>Ingresa tu mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Ingresa tu mensaje" name="mensaje" required />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? "Enviando..." : "Enviar"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
