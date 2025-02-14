import React from "react";

import { Logo } from "../logo/Logo";

import './Encabezado.css';

interface EncabezadoProps {
  title?: string;
  subtitle: string;
}

const Encabezado: React.FC<EncabezadoProps> = ({ title = '', subtitle = '' }) => {
  return (
    <div className="title-container">
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
