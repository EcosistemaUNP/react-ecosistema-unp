import React from "react";

import './ContenedorTarjeta.css';
import { Container } from "react-bootstrap";

interface ContenedorTarjetaProps {
    isGray?: boolean;
    children: React.ReactNode;
}

const ContenedorTarjeta: React.FC<ContenedorTarjetaProps> = ({ isGray = true, children }) => {
    return (
        <Container
            className="contenedor-gris-tarjeta"
            style={{
                backgroundColor: isGray ? '#f7f7f7' : '#ffffff'
            }}
        >
            {children}
        </Container>
    );
};

export { ContenedorTarjeta };
