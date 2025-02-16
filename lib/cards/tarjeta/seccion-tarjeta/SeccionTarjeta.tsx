import React from "react";

import { CardBody } from "react-bootstrap";
import './SeccionTarjeta.css';

export interface SeccionTarjetaProps {
    isGray?: boolean;
    children: React.ReactNode;
    isLast?: boolean;
}

const SeccionTarjeta: React.FC<SeccionTarjetaProps> = ({ isGray = false, children, isLast = false }) => {
    const childrenArray = React.Children.toArray(children);
    const firstChildIsSubtitulo = childrenArray[0] &&
        React.isValidElement(childrenArray[0]) &&
        (childrenArray[0].type as any).displayName === 'Subtitulo';

    return (
        <CardBody className={
            `${isGray ? 'tarjeta-container-section' : ''} 
            ${isLast ? 'tarjeta-container-last' : ''} 
            ${firstChildIsSubtitulo ? 'pt-0' : ''}`
        }>
            {children}
        </CardBody>
    );
};

SeccionTarjeta.displayName = 'SeccionTarjeta';

export { SeccionTarjeta };
