import React from "react";

import { FaTrash } from "react-icons/fa6";
import { Button } from "react-bootstrap";
import '../styles/Tarjeta.css';

interface TarjetaAgregarProps {
    title?: string;
    children: React.ReactNode;
    onClick: () => void;
}

const titleStyle = {
    fontColor: "#303d50s",
    fontSize: "1.1rem",
    fontWeight: "700",
    // marginBottom: '6.66rem',
    color: '#303d50'
};

const TarjetaAgregar: React.FC<TarjetaAgregarProps> = ({ title, children, onClick }) => {
    return (
        <div 
        className="border border-gray-300 rounded-3" 
        style={{ 
            position: "relative", 
            padding: '1rem',
            marginTop: '0.5rem',
            marginBottom: '0.5rem',
            background: '#ffffff'
        }}
        >
            <Button
                variant="link"
                onClick={onClick}
                style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    padding: "0",
                    background: "transparent",
                    border: "none",
                }}
            >
                <FaTrash size={16} color="red" />
            </Button>

            {title && (
                <div>
                    <span style={titleStyle}>{title}</span>
                </div>
            )}

            {children}

        </div>
    );
};

export { TarjetaAgregar };
