import React, { useState } from "react";

import { FaCircleChevronDown, FaCircleChevronRight } from "react-icons/fa6";

import './TarjetaInfo.css';

interface TarjetaInfoProps {
    icon: any;
    label: string;
    children: React.ReactNode;
    show?: boolean
}

const TarjetaInfo: React.FC<TarjetaInfoProps> = ({ icon: Icon, label, show = false, children }) => {

    const [showDatos, setShowDatos] = useState(show);

    return (
        <div className='tarjeta-info-container'>
            <div className='tarjeta-info-titulo-container'>
                <div className='tarjeta-info-label-container'>
                    <Icon className='tarjeta-info-icon' />
                    <span>{label}</span>
                </div>

                <div className="tarjeta-info-show-container">
                    {showDatos ?
                        <FaCircleChevronDown
                            className="tarjeta-info-show-button"
                            onClick={() => setShowDatos(!showDatos)}
                        />
                        :
                        <FaCircleChevronRight
                            className="tarjeta-info-show-button"
                            onClick={() => setShowDatos(!showDatos)}
                        />
                    }
                </div>
            </div>

            <div className={`tarjeta-info-children-container ${showDatos ? 'open' : ''}`}>
                {children}
            </div>

        </div>
    );
};

export { TarjetaInfo };
