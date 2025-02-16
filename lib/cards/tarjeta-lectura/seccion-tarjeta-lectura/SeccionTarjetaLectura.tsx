import React from "react";

import './SeccionTarjetaLectura.css';

interface SeccionTarjetaLecturaProps {
    title: string;
    children: React.ReactNode;
    hasPaddingTop?: boolean;
}

const SeccionTarjetaLectura: React.FC<SeccionTarjetaLecturaProps> = ({ 
    title, 
    children,
    hasPaddingTop = true
}) => {
    // Identificación de subtítulo como primer componente para quitar padding superior
    const childrenArray = React.Children.toArray(children);
    const firstChildIsSubtitulo = childrenArray[0] &&
        React.isValidElement(childrenArray[0]) &&
        (childrenArray[0].type as any).displayName === 'Subtitulo';

    return (
        <>
            <div className="section_header_qy">
                <span>{title}</span>
            </div>
            <div style={{ padding: `${(firstChildIsSubtitulo || !hasPaddingTop) ? '0rem' : '1.25rem'} 1.25rem 1.25rem 1.25rem` }}>
                {children}
            </div>
        </>
    );
};

export { SeccionTarjetaLectura };
