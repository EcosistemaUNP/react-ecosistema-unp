import React from "react";

import logo from '../../assets/img/logo.png';

import '../styles/Encabezado.css';

interface EncabezadoProps {
  titulo?: string;
  subtitulo: string;
}

const Encabezado: React.FC<EncabezadoProps> = ({ titulo = '', subtitulo = '' }) => {
  return (
    <div className="title-container">
      <div className="logo-subtitle-container">
        <div className="red-section"></div>
        <img className="img-logo" src={logo} alt="logo" />
      </div>
      <div className="subtitle-container">
        <span className="title">{titulo ? titulo : 'Unidad Nacional de Protección'}</span>
        <span className="subtitle">{subtitulo}</span>
      </div>
    </div>
  );
};

export { Encabezado };
