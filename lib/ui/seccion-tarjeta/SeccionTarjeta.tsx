import React from "react";

import { CardBody } from "react-bootstrap";
import './SeccionTarjeta.css';

interface SeccionTarjetaProps {
    isGray?: boolean;
    children: React.ReactNode;
    isLast?: boolean;
}

const SeccionTarjeta: React.FC<SeccionTarjetaProps> = ({ isGray = false, children, isLast = false }) => {
    return (
        <CardBody className={`${isGray ? 'tarjeta-container-section' : ''} ${isLast ? 'tarjeta-container-last' : ''} tarjeta-container`}>
            {children}
        </CardBody>
    );
};

export { SeccionTarjeta };
