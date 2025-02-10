import React, { useState } from 'react';

import { FaArrowsRotate, FaScaleBalanced, FaTriangleExclamation, FaUser, FaUsers } from 'react-icons/fa6';

import '../styles/IconoTipoSolicitud.css';
// import { IconType } from 'react-icons';

// interface IconTooltip {
//     icon: IconType;
//     color: string;
//     tooltipText: string;
// }

interface IconoTipoSolicitudProps {
    tipoSolicitud: string;
    porGestionar?: boolean;
    // custom: IconTooltip;
}

const IconoTipoSolicitud: React.FC<IconoTipoSolicitudProps> = ({ tipoSolicitud, porGestionar = false }) => {
    const [showTooltip, setShowTooltip] = useState(false);


    let tooltipText = '';
    let color = {};
    let Icon = null;

    const baseColor = !porGestionar ? '#287cd1' : '#D3D3D3';
    // const iconColor = !porGestionar ? '#ffffff' : 'darkgray';

    switch (tipoSolicitud) {
        case 'Individual':
            tooltipText = !porGestionar ? 'Individual' : 'Nuevo registro';
            color = { backgroundColor: 'transparent', color: baseColor };
            Icon = FaUser;
            break;
        case 'Colectivo':
            tooltipText = !porGestionar ? 'Colectivo' : 'Nuevo registro';
            color = { backgroundColor: 'transparent', color: baseColor };
            // color = { backgroundColor: baseColor, color: iconColor };
            Icon = FaUsers;
            break;
        case 'Jurídico':
            tooltipText = !porGestionar ? 'Jurídico' : 'Nuevo registro';
            // color = { backgroundColor: !porGestionar ? '#652edb' : '#D3D3D3', color: iconColor };
            color = { backgroundColor: 'transparent', color: baseColor };
            Icon = FaScaleBalanced;
            break;
        case 'Emergencia':
            tooltipText = !porGestionar ? 'Emergencia' : 'Nuevo registro';
            // color = { backgroundColor: !porGestionar ? '#cf3c3c' : '#D3D3D3', color: iconColor };
            color = { backgroundColor: 'transparent', color: baseColor };
            Icon = FaTriangleExclamation;
            break;
        case 'Reasignación':
            tooltipText = !porGestionar ? 'Reasignación' : 'Nuevo registro';
            // color = { backgroundColor: !porGestionar ? '#ed874c' : '#D3D3D3', color: iconColor };
            color = { backgroundColor: 'transparent', color: baseColor };
            Icon = FaArrowsRotate;
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
                        backgroundColor: "#eb7575",
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
