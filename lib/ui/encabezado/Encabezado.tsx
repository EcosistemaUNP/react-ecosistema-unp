import React from "react";

import { Logo } from "../logo/Logo";

import './Encabezado.css';

interface EncabezadoProps {
  title?: string;
  subtitle: string;
  hasMargin?: boolean;
}

const Encabezado: React.FC<EncabezadoProps> = ({ 
  title = '', 
  subtitle = '',
  hasMargin = true
}) => {
  return (
    <div 
    className="title-container"
    style={{
      marginTop: hasMargin ? '1.75rem' : '',
      marginBottom: hasMargin ? '1.75rem' : ''
    }}
    >
      <div className="logo-subtitle-container">
        <div className="red-section"></div>
        <Logo type="entidad" variant="unp" color="gris" height='62' />
      </div>
      <div className="subtitle-container">
        <span className="title">{title ? title : 'Unidad Nacional de Protección'}</span>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
};

export { Encabezado };
