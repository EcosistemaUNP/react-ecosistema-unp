import React from "react";

import { NotificacionUsuario } from "../notificacion-usuario/NotificacionUsuario";

import './IconosSistema.css';
import { IconType } from "react-icons";

export interface IconoSistema {
    icon: IconType;
    action: (...args: any[]) => any;
}

interface IconosSistemaProps {
    elements?: IconoSistema[];
}

const IconosSistema: React.FC<IconosSistemaProps> = ({ elements }) => {
    return (
        <div className="iconos-sistema-container">
            {elements && elements.slice(0,5).map((element, index) => (
                <element.icon
                    key={index}
                    className="iconos-sistema-icon"
                    onClick={element.action}
                />
            ))}
            <div style={{ marginLeft: '1rem' }}>
                <NotificacionUsuario />
            </div>
        </div>
    );
};

export { IconosSistema };
