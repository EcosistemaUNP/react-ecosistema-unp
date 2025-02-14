import React from "react";

import { IconType } from "react-icons";

import './Subtitulo.css';

interface SubtituloProps {
  subtitle: string;
  icon?: IconType;
  extraInput?: React.ReactNode;
}

const Subtitulo: React.FC<SubtituloProps> = ({
  subtitle,
  icon: Icon,
  extraInput
}) => {
  return (
    <div className="subtitulo-contenedor-fila">
      <div className="subtitulo-contenedor-icon-subtitle">
        {Icon && (<Icon className="subtitulo-icon" />)}
        <span className="subtitulo-subtitle">{subtitle}</span>
      </div>
      {extraInput}
    </div>
  );
};

Subtitulo.displayName = "Subtitulo";

export { Subtitulo };
