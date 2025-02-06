import React, { useState } from 'react';

import { FaUser, FaUsers } from 'react-icons/fa6';

import '../styles/IconoTipoSolicitud.css';

interface IconoTipoSolicitudProps {
    tipoSolicitud: string;
    porGestionar?: boolean;
}

const IconoTipoSolicitud: React.FC<IconoTipoSolicitudProps> = ({ tipoSolicitud, porGestionar = false }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    let tooltipText = '';
    let color = {};
    let Icon = null;

    const baseColor = !porGestionar ? '#2f70d8' : '#D3D3D3';
    const iconColor = !porGestionar ? '#ffffff' : 'darkgray';

    switch (tipoSolicitud) {
        case 'Individual':
            tooltipText = !porGestionar ? 'Individual' : 'Nuevo registro';
            color = { backgroundColor: baseColor, color: iconColor };
            Icon = FaUser;
            break;
        case 'Colectivo':
            tooltipText = !porGestionar ? 'Colectivo' : 'Nuevo registro';
            color = { backgroundColor: baseColor, color: iconColor };
            Icon = FaUsers;
            break;
        default:
            return null;
    }

    const handleMouseEnter = () => setShowTooltip(true);
    const handleMouseLeave = () => setShowTooltip(false);

    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    ...color,
                }}
                className='icon-solicitud'
            >
                <Icon />
            </div>
            {showTooltip && (
                <div
                    style={{
                        position: "absolute",
                        top: "50%", 
                        left: "110%", 
                        transform: "translateY(-50%)", 
                        backgroundColor: "#333",
                        color: "#fff",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        fontSize: "0.9em",
                        whiteSpace: "nowrap",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)", 
                        opacity: showTooltip ? 1 : 0, 
                        visibility: showTooltip ? "visible" : "hidden", 
                        zIndex: 1000, 
                        transition: "opacity 0.3s ease, visibility 0.3s ease",
                    }}
                >
                    {tooltipText}
                </div>
            )}
        </div>
    );
};

export { IconoTipoSolicitud };
