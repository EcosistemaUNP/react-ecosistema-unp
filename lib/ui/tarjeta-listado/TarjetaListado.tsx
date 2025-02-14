import React from "react";
import { useNavigate } from "react-router-dom";

import { IconType } from "react-icons";

import { FaCircleCheck, FaClock } from "react-icons/fa6";
import { LiaDownloadSolid } from "react-icons/lia";
import './TarjetaListado.css';

interface Listado {
    label: string;
    icon: IconType;
    route: string;
    closed?: boolean;
    handleDownload?: any; // Corregir tipado
}

interface TarjetaListadoProps {
    sections: Listado[]
}

const TarjetaListado: React.FC<TarjetaListadoProps> = ({ sections }) => {

    const navigate = useNavigate();
    

    return (
        <div className='listado-tarjetas'>
            {sections.map((section, index) => (
                <div className='tarjeta-listado-row' key={index}>
                    <div
                        className='tarjeta-listado-container'
                        onClick={() => navigate(section.route)}
                    >
                        <div className='tarjeta-listado-label-container'>
                            <section.icon className='tarjeta-listado-process-menu' />
                            <span>{section.label}</span>
                        </div>
                        {'closed' in section && (
                            <div className="tarjeta-listado-state-container">
                                {section.closed ? (
                                    <FaCircleCheck style={{ color: '#3AB34A' }} />
                                ) : (
                                    <FaClock style={{ color: '#E2E2E2' }} />
                                )}
                            </div>
                        )}
                    </div>
                    {section.handleDownload && (
                        <div
                            className='tarjeta-listado-download-container'
                            onClick={(e) => {
                                e.stopPropagation();
                                section.handleDownload();
                            }}
                        >
                            <LiaDownloadSolid className='tarjeta-listado-download-icon' />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export { TarjetaListado };
