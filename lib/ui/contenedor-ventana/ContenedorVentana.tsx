import React from "react";

import './ContenedorVentana.css';

interface ContenedorVentanaProps {
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

const ContenedorVentana: React.FC<ContenedorVentanaProps> = ({ style, children }) => {
    return (
        <div className="container-ecosistema-unp" style={style}>
            {children}
        </div>
    );
};

export { ContenedorVentana };
