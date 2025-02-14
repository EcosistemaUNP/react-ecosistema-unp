import React from "react";

import './Logo.css';

type LogoType = 'entidad' | 'ecosistema' | 'ministerio';

type LogoEntidadVariant = 'unp' | 'unidad' | 'interior';
type LogoEcosistemaVariant = 'escudo' | 'letras';

type LogoEntidadColor = 'rojo' | 'gris' | 'blanco';
type LogoEcosistemaColor = 'azul' | 'azul_sin_fondo' | 'blanco' | 'blanco_sin_fondo';

interface LogoProps {
  height?: string;
  type: LogoType;
  variant: LogoEntidadVariant | LogoEcosistemaVariant;
  color: LogoEntidadColor | LogoEcosistemaColor;
}

const Logo: React.FC<LogoProps> = ({ height = '100px', type, variant, color }) => {
  const path = `../../assets/img/${type}/logo_${variant}_${color}.svg`;
  const logo = new URL(path, import.meta.url).href;

  return (
    <img className="logo-unp" src={logo} alt={`Logo ${type}`} height={height} />
  );
};

export { Logo };
