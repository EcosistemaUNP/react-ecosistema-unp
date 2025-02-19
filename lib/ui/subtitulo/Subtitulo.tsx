import React from "react";

import { IconType } from "react-icons";

import './Subtitulo.css';

interface SubtituloProps {
  subtitle: string;
  icon?: IconType;
  extraInput?: React.ReactNode;
  hasMargin?: boolean;
}

const Subtitulo: React.FC<SubtituloProps> = ({
  subtitle,
  icon: Icon,
  extraInput,
  hasMargin = true
}) => {
  return (
    <div
      className="subtitulo-contenedor-fila"
      style={{
        marginTop: hasMargin ? '1.2rem' : '',
        marginBottom: hasMargin ? '0.9rem' : ''
      }}
    >
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
