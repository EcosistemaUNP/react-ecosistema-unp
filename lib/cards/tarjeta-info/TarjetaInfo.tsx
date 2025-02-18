import React, { useState, useRef, useEffect } from "react";
import { FaCircleChevronDown, FaCircleChevronRight } from "react-icons/fa6";
import './TarjetaInfo.css';
import { IconType } from "react-icons";

interface TarjetaInfoProps {
    icon: IconType;
    label: string;
    children: React.ReactNode;
    show?: boolean;
}

const TarjetaInfo: React.FC<TarjetaInfoProps> = ({ icon: Icon, label, show = false, children }) => {
    const [showDatos, setShowDatos] = useState(show);
    const [height, setHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (showDatos && contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [showDatos]);

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

            <div
                className="tarjeta-info-children-container"
                style={{ height: `${height}px` }}
                ref={contentRef}
            >
                <div className="tarjeta-info-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export { TarjetaInfo };