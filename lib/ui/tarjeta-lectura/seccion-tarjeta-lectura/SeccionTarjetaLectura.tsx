import React from "react";

import './SeccionTarjetaLectura.css';

interface SeccionTarjetaLecturaProps {
    title: string;
    children: React.ReactNode;
}

const SeccionTarjetaLectura: React.FC<SeccionTarjetaLecturaProps> = ({ title, children }) => {
    return (
        <>
            <div className="section_header_qy">
                <span>{title}</span>
            </div>
            <div className="section_container_qy">
                {children}
            </div>
        </>
    );
};

export { SeccionTarjetaLectura };
