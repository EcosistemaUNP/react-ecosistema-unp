import React, { useState } from 'react';

import { IconType } from 'react-icons';

import { FaArrowsRotate, FaScaleBalanced, FaTriangleExclamation, FaUser, FaUsers } from 'react-icons/fa6';

import './IconoTabla.css';

interface IconTooltip {
    icon: IconType;
    color: string;
    tooltipText: string;
}

interface IconoTablaProps {
    tipoSolicitud: string;
    porGestionar?: boolean;
    customIcon?: IconTooltip;
}

const IconoTabla: React.FC<IconoTablaProps> = ({ tipoSolicitud, porGestionar = false }) => {

    const [showTooltip, setShowTooltip] = useState(false);

    let tooltipText = '';
    let tooltipColor = {};
    let Icon = null;
    let iconColor = { color: !porGestionar ? '#287cd1' : '#c8c8c8' };

    const individualColor = '#28a19d';
    const colectivoColor = '#ed7e3e';
    const juridicoColor = '#3e52edf8';
    const emergenciaColor = '#ed3e49f8';
    const reasignacionColor = '#d4c146';

    const nuevoColor = '#666666f4';

    switch (tipoSolicitud) {
        case 'Individual':
            tooltipText = !porGestionar ? 'Individual' : 'Nuevo registro';
            tooltipColor = { backgroundColor: !porGestionar ? individualColor : nuevoColor, color: '#f7f7f7' };
            Icon = FaUser;
            break;
        case 'Colectivo':
            tooltipText = !porGestionar ? 'Colectivo' : 'Nuevo registro';
            tooltipColor = { backgroundColor: !porGestionar ? colectivoColor : nuevoColor, color: '#f7f7f7' };
            Icon = FaUsers;
            break;
        case 'Jurídico':
            tooltipText = !porGestionar ? 'Jurídico' : 'Nuevo registro';
            tooltipColor = { backgroundColor: !porGestionar ? juridicoColor : nuevoColor, color: '#f7f7f7' };
            Icon = FaScaleBalanced;
            break;
        case 'Emergencia':
            tooltipText = !porGestionar ? 'Emergencia' : 'Nuevo registro';
            tooltipColor = { backgroundColor: !porGestionar ? emergenciaColor : nuevoColor, color: '#f7f7f7' };
            Icon = FaTriangleExclamation;
            break;
        case 'Reasignación':
            tooltipText = !porGestionar ? 'Reasignación' : 'Nuevo registro';
            tooltipColor = { backgroundColor: !porGestionar ? reasignacionColor : nuevoColor, color: '#f7f7f7' };
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
                    ...iconColor,
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
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
                        opacity: showTooltip ? 1 : 0,
                        visibility: showTooltip ? "visible" : "hidden",
                        zIndex: 1000,
                        transition: "opacity 0.3s ease, visibility 0.3s ease",
                        ...tooltipColor
                    }}
                >
                    {tooltipText}
                </div>
            )}
        </div>
    );
};

export { IconoTabla };
