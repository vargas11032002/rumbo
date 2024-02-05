import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GetInTouch = () => {
    return (
        <section className="d-flex flex-column justify-content-center align-items-center py-10 mx-6">
            <h2 className="mb-4">Fiabilidad, Responsabilidad, Excelencia, Innovacion, Puntualidad</h2>
            <p className="text-center">
                ¡ A la hora de tomar tu transporte debes estar seguro de quien te lleva y qué tan seguro es !
            </p>
            <Button
                as={Link}
                to="/about"
                variant="contained"
                size="medium"
                className="text-uppercase py-2 px-4 mt-3 mb-2 rounded-pill"
                style={{ backgroundColor: '#ffff' }}
            >
                Solicitud P.Q.R.S
            </Button>
        </section>
    );
};

export default GetInTouch;
