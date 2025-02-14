import React, { useState } from 'react';

import { IconType } from 'react-icons';

import { FaArrowsRotate, FaFolder, FaScaleBalanced, FaTriangleExclamation, FaUser, FaUsers } from 'react-icons/fa6';

import './IconoTabla.css';

interface IconTooltip {
    icon: IconType;
    color: string;
    tooltipText: string;
}

type IconoTablaProps = ({
    recordType: string;
    taken?: boolean;
    customIcon?: never;
} | {
    recordType?: never;
    taken?: boolean;
    customIcon: IconTooltip;
})

const IconoTabla: React.FC<IconoTablaProps> = ({ recordType, taken = true, customIcon }) => {

    const [showTooltip, setShowTooltip] = useState(false);

    let tooltipText = '';
    let tooltipColor = {};
    let Icon = null;
    let iconColor = { color: taken ? '#287cd1' : '#c8c8c8' };

    const individualColor = '#28a19d';
    const colectivoColor = '#ed7e3e';
    const juridicoColor = '#3e52edf8';
    const emergenciaColor = '#ed3e49f8';
    const reasignacionColor = '#edd958';
    const defaultColor = '#6b6e6e';

    const nuevoColor = '#666666f4';

    const getLuminance = (color: string): number => {
        const hex = color.replace(/^#/, '');
        const r = parseInt(hex.slice(0, 2), 16) / 255;
        const g = parseInt(hex.slice(2, 4), 16) / 255;
        const b = parseInt(hex.slice(4, 6), 16) / 255;
    
        // Calcula la luminancia
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    if (!customIcon) {
        switch (recordType) {
            case 'Individual':
                tooltipText = taken ? 'Individual' : 'Nuevo registro';
                tooltipColor = { 
                    backgroundColor: taken ? individualColor : nuevoColor, 
                    color: '#fcfcfc'
                };
                Icon = FaUser;
                break;
            case 'Colectivo':
                tooltipText = taken ? 'Colectivo' : 'Nuevo registro';
                tooltipColor = { 
                    backgroundColor: taken ? colectivoColor : nuevoColor, 
                    color: '#fcfcfc'
                };
                Icon = FaUsers;
                break;
            case 'Jurídico':
                tooltipText = taken ? 'Jurídico' : 'Nuevo registro';
                tooltipColor = { 
                    backgroundColor: taken ? juridicoColor : nuevoColor, 
                    color: taken ? getLuminance(juridicoColor) > 0.5 ? '#141414' : '#fcfcfc' : '#fcfcfc' 
                };
                Icon = FaScaleBalanced;
                break;
            case 'Emergencia':
                tooltipText = taken ? 'Emergencia' : 'Nuevo registro';
                tooltipColor = { 
                    backgroundColor: taken ? emergenciaColor : nuevoColor, 
                    color: taken ? getLuminance(emergenciaColor) > 0.5 ? '#141414' : '#fcfcfc' : '#fcfcfc' 
                };
                Icon = FaTriangleExclamation;
                break;
            case 'Reasignación':
                tooltipText = taken ? 'Reasignación' : 'Nuevo registro';
                tooltipColor = { 
                    backgroundColor: taken ? reasignacionColor : nuevoColor, 
                    color: taken ? getLuminance(reasignacionColor) > 0.5 ? '#141414' : '#fcfcfc' : '#fcfcfc' 
                };
                Icon = FaArrowsRotate;
                break;
            default:
                tooltipText = taken ? 'Registro' : 'Nuevo registro';
                tooltipColor = { 
                    backgroundColor: taken ? defaultColor : nuevoColor, 
                    color: taken ? getLuminance(defaultColor) > 0.5 ? '#141414' : '#fcfcfc' : '#fcfcfc' 
                };
                Icon = FaFolder;
                break;
        }
    } else {
        tooltipText = taken ? customIcon.tooltipText : 'Nuevo registro';
        tooltipColor = { 
            backgroundColor: taken ? customIcon.color : nuevoColor, 
            color: taken ? getLuminance(customIcon.color) > 0.5 ? '#141414' : '#fcfcfc' : '#fcfcfc' 
        };
        Icon = customIcon.icon;
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
                        padding: "8px 12px",
                        borderRadius: "8px",
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
