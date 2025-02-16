import React from "react";

import { CardBody } from "react-bootstrap";
import './SeccionTarjeta.css';

export interface SeccionTarjetaProps {
    isGray?: boolean;
    children: React.ReactNode;
    isLast?: boolean;
    hasPaddingTop?: boolean;
}

const SeccionTarjeta: React.FC<SeccionTarjetaProps> = ({ isGray = false, children, isLast = false, hasPaddingTop = true }) => {
    const childrenArray = React.Children.toArray(children);
    const firstChildIsSubtitulo = childrenArray[0] &&
        React.isValidElement(childrenArray[0]) &&
        (childrenArray[0].type as any).displayName === 'Subtitulo';

    return (
        <CardBody className={
            `${isGray ? 'tarjeta-container-section' : ''} 
            ${(firstChildIsSubtitulo || !hasPaddingTop) ? 'pt-0' : ''}`
        }
            style={{
                borderBottomLeftRadius: isLast ? '12px' : '',
                borderBottomRightRadius: isLast ? '12px' : ''
            }}
        >
            {children}
        </CardBody>
    );
};

SeccionTarjeta.displayName = 'SeccionTarjeta';

export { SeccionTarjeta };
