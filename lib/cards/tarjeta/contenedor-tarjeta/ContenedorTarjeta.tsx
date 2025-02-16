import React from "react";

import './ContenedorTarjeta.css';

interface ContenedorTarjetaProps {
    isGray?: boolean;
    children: React.ReactNode;
}

const ContenedorTarjeta: React.FC<ContenedorTarjetaProps> = ({ isGray = true, children }) => {
    return (
        <div
            className="contenedor-gris-tarjeta"
            style={{
                backgroundColor: isGray ? '#f7f7f7' : '#ffffff'
            }}
        >
            {children}
        </div>
    );
};

export { ContenedorTarjeta };
