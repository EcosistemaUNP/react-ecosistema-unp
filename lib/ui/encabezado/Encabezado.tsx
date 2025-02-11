import React from "react";

import { Logo } from "../logo/Logo";

import './Encabezado.css';

interface EncabezadoProps {
  titulo?: string;
  subtitulo: string;
}

const Encabezado: React.FC<EncabezadoProps> = ({ titulo = '', subtitulo = '' }) => {
  return (
    <div className="title-container">
      <div className="logo-subtitle-container">
        <div className="red-section"></div>
        <Logo type="entidad" variant="unp" color="gris" height='62' />
      </div>
      <div className="subtitle-container">
        <span className="title">{titulo ? titulo : 'Unidad Nacional de Protección'}</span>
        <span className="subtitle">{subtitulo}</span>
      </div>
    </div>
  );
};

export { Encabezado };
