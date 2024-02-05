import React, { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const Rutas = () => {
  const [horariosVisible, setHorariosVisible] = useState({
    pitalito: false,
    neiva: false,
    timana: false
    // Agrega más rutas según sea necesario
  });

  const toggleHorarios = (ruta) => {
    setHorariosVisible({
      ...horariosVisible,
      [ruta]: !horariosVisible[ruta]
    });
  };

  const horarios = {
    pitalito: [
      { hora: '6:00 AM', tipoCarro: 'Bus' },
      { hora: '8:00 AM', tipoCarro: 'Bus' },
      { hora: '10:00 AM', tipoCarro: 'Bus' },
    ],
    neiva: [
      { hora: '7:00 AM', tipoCarro: 'Bus' },
      { hora: '9:00 AM', tipoCarro: 'Bus' },
      { hora: '11:00 AM', tipoCarro: 'Bus' },
    ],
    timana: [
      { hora: '7:30 AM', tipoCarro: 'Bus' },
      { hora: '9:30 AM', tipoCarro: 'Bus' },
      { hora: '11:30 AM', tipoCarro: 'Bus' },
    ]
    // Agrega más horarios según sea necesario
  };

  return (
    <div className="container">
      <h2 className="mt-4">Rutas entre Garzón y alrededores</h2>
      <ul className="list-group">
        <li className="list-group-item">
          Garzón - Pitalito
          <Button className="ms-2" onClick={() => toggleHorarios('pitalito')}>
            {horariosVisible['pitalito'] ? 'Ocultar Horarios' : 'Ver Horarios'}
          </Button>
          {horariosVisible['pitalito'] && (
            <ListGroup className="mt-3">
              {horarios['pitalito'].map((horario, index) => (
                <ListGroup.Item key={index}>
                  Hora: {horario.hora}, Tipo de carro: {horario.tipoCarro}
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </li>
        <li className="list-group-item">
          Garzón - Neiva
          <Button className="ms-2" onClick={() => toggleHorarios('neiva')}>
            {horariosVisible['neiva'] ? 'Ocultar Horarios' : 'Ver Horarios'}
          </Button>
          {horariosVisible['neiva'] && (
            <ListGroup className="mt-3">
              {horarios['neiva'].map((horario, index) => (
                <ListGroup.Item key={index}>
                  Hora: {horario.hora}, Tipo de carro: {horario.tipoCarro}
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </li>
        <li className="list-group-item">
          Garzón - Timaná
          <Button className="ms-2" onClick={() => toggleHorarios('timana')}>
            {horariosVisible['timana'] ? 'Ocultar Horarios' : 'Ver Horarios'}
          </Button>
          {horariosVisible['timana'] && (
            <ListGroup className="mt-3">
              {horarios['timana'].map((horario, index) => (
                <ListGroup.Item key={index}>
                  Hora: {horario.hora}, Tipo de carro: {horario.tipoCarro}
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </li>
        {/* Agrega más rutas según sea necesario */}
      </ul>
    </div>
  );
};

export default Rutas;
