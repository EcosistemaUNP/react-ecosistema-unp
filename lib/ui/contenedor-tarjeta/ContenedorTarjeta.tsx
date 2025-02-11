import React from "react";

import { CardBody } from "react-bootstrap";
import './ContenedorTarjeta.css';

interface ContenedorTarjetaProps {
    isGray?: boolean;
    children: React.ReactNode;
    isLast?: boolean;
}

const ContenedorTarjeta: React.FC<ContenedorTarjetaProps> = ({ isGray = false, children, isLast = false }) => {
    return (
        <CardBody className={`${isGray ? 'tarjeta-container-section' : ''} ${isLast ? 'tarjeta-container-last' : ''} tarjeta-container`}>
            {children}
        </CardBody>
    );
};

export { ContenedorTarjeta };
