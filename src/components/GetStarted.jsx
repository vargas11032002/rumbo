import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imgDetail from '../assets/images/gallery-img-1.png';
import imgDetail2 from '../assets/images/gallery-img-2.png';

const GetStarted = () => {
    return (
        <Container fluid>
            <Row className="py-10 px-2">
                <Col xs={12} sm={8} md={6} className="d-flex flex-column justify-content-center">
                    <article className="px-4">
                        <h2 className="mb-4">Acceso a todas las rutas a nivel regional</h2>
                        <p style={{ fontSize: '1.1rem', textAlign: 'start', lineHeight: '1.5', color: '#515151', marginTop: '1.5rem' }}>
                            El propósito de este proyecto es actualizar de manera ágil y publicitaria el servicio de transporte, utilizando las nuevas tecnologías, dándole al usuario la facilidad de conocer horarios, despachos, vehículos y conductores. Con el fin de mitigar el porcentaje de la falta del conocimiento de qué ruta se debe ir, en algunos casos a los visitantes a nuestro municipio y el transporte con su respectiva hora de salida, dando así una gran alternativa para todos. Mejorando la percepción por parte de los usuarios.
                        </p>
                    </article>
                </Col>
                <Col xs={12} sm={4} md={6}>
                    <img src={imgDetail} alt="" style={{ width: '100%' }} />
                </Col>
                <Col xs={12} sm={4} md={6} className="order-md-3">
                    <img src={imgDetail2} alt="" style={{ width: '100%' }} />
                </Col>
                <Col xs={12} sm={8} md={6} className="order-md-4">
                    <article className="px-4">
                        <h2 className="mb-4">¿Por qué elegirnos?</h2>
                        <p style={{ fontSize: '1.1rem', textAlign: 'start', lineHeight: '1.5', color: '#515151', marginTop: '1.5rem' }}>
                            Estamos comprometidos con un excelente servicio de transporte público.
                        </p>
                    </article>
                </Col>
            </Row>
        </Container>
    );
};

export default GetStarted;
