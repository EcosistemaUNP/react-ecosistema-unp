import React from "react";

import { FaTrash } from "react-icons/fa6";
import { Button } from "react-bootstrap";

interface NuevoElementoProps {
    title?: string;
    children: React.ReactNode;
    onClose: (...args: any[]) => any;
    isGray?: boolean;
}

const titleStyle = {
    fontColor: "#303d50s",
    fontSize: "1.1rem",
    fontWeight: "700",
    // marginBottom: '6.66rem',
    color: '#303d50'
};

const NuevoElemento: React.FC<NuevoElementoProps> = ({ title, children, onClose, isGray = false }) => {
    return (
        <div 
        className="border border-gray-300 rounded-3" 
        style={{ 
            position: "relative", 
            padding: '1rem',
            marginTop: '0.5rem',
            marginBottom: '0.5rem',
            background: !isGray ? '#ffffff' : '#f7f7f7'
        }}
        >
            <Button
                variant="link"
                onClick={onClose}
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

export { NuevoElemento };
