import React from "react";

import { NotificacionUsuario } from "../notificacion-usuario/NotificacionUsuario";

import './IconosSistema.css';
import { IconType } from "react-icons";

export interface IconoSistema {
    icon: IconType;
    action: (...args: any[]) => any;
    label?: string;
}

interface IconosSistemaProps {
    elements?: IconoSistema[];
}

const IconosSistema: React.FC<IconosSistemaProps> = ({ elements }) => {
    return (
        <div className="iconos-sistema-container">
            {elements && elements.slice(0, 5).map((element, index) => (
                <div className="icono-sistema-tooltip-container">
                    <element.icon
                        key={index}
                        className="iconos-sistema-icon"
                        onClick={element.action}
                    />
                    {element.label && (
                        <span className="icono-sistema-tooltip-text">{element.label}</span>
                    )}
                </div>
            ))}
            <div
                style={{
                    border: '1px #ebebeb solid',
                    marginTop: '9px',
                    marginBottom: '2px',
                    borderRadius: '10px'
                }}
            />
            <div>
                <NotificacionUsuario />
            </div>
        </div>
    );
};

export { IconosSistema };
