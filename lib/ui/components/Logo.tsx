import React, { useEffect, useState } from "react";

import unp_rojo from '../../assets/img/entidad/logo_unp_rojo.svg';
import unp_gris from '../../assets/img/entidad/logo_unp_gris.svg';
import unp_blanco from '../../assets/img/entidad/logo_unp_blanco.svg';

import unidad_rojo from '../../assets/img/entidad/logo_unidad_rojo.svg';
import unidad_gris from '../../assets/img/entidad/logo_unidad_gris.svg';
import unidad_blanco from '../../assets/img/entidad/logo_unidad_blanco.svg';

import min_interior_rojo from '../../assets/img/ministerio/logo_interior_rojo.svg';
import min_interior_gris from '../../assets/img/ministerio/logo_interior_gris.svg';
import min_interior_blanco from '../../assets/img/ministerio/logo_interior_blanco.svg';

import escudo_ei_azul from '../../assets/img/ecosistema/logo_escudo_azul.svg';
import escudo_ei_azul_sinfondo from '../../assets/img/ecosistema/logo_escudo_azul_sin_fondo.svg';
import escudo_ei_blanco from '../../assets/img/ecosistema/logo_escudo_blanco.svg';
import escudo_ei_blanco_sinfondo from '../../assets/img/ecosistema/logo_escudo_blanco_sin_fondo.svg';
import ecosistema_azul from '../../assets/img/ecosistema/logo_letras_azul.svg';
import ecosistema_blanco from '../../assets/img/ecosistema/logo_letras_blanco.svg';

import '../styles/Logo.css';

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

  const [logo, setLogo] = useState<string>();

  useEffect(() => {
    if (type === 'entidad') {
      if (variant === 'unp') {
        if (color === 'rojo') {
          setLogo(unp_rojo);
        } else if (color === 'gris') {
          setLogo(unp_gris);
        } else if (color === 'blanco') {
          setLogo(unp_blanco);
        }
      } else if (variant === 'unidad') {
        if (color === 'rojo') {
          setLogo(unidad_rojo);
        } else if (color === 'gris') {
          setLogo(unidad_gris);
        } else if (color === 'blanco') {
          setLogo(unidad_blanco);
        }
      }
    } else if (type === 'ministerio') {
      if (variant === 'interior') {
        if (color === 'rojo') {
          setLogo(min_interior_rojo);
        } else if (color === 'gris') {
          setLogo(min_interior_gris);
        } else if (color === 'blanco') {
          setLogo(min_interior_blanco);
        }
      }
    } else if (type === 'ecosistema') {
      if (variant === 'escudo') {
        if (color === 'azul') {
          setLogo(escudo_ei_azul);
        } else if (color === 'azul_sin_fondo') {
          setLogo(escudo_ei_azul_sinfondo);
        } else if (color === 'blanco') {
          setLogo(escudo_ei_blanco);
        } else if (color === 'blanco_sin_fondo') {
          setLogo(escudo_ei_blanco_sinfondo);
        }
      } else if (variant === 'letras') {
        if (color === 'azul') {
          setLogo(ecosistema_azul);
        } else if (color === 'blanco') {
          setLogo(ecosistema_blanco);
        }
      }
    }
  }, [])

  return (
    <img className="logo-unp" src={logo} alt="logo" height={height} />
  );
};

export { Logo };

// import React from "react";

// import '../styles/Logo.css';

// type LogoType = 'entidad' | 'ecosistema' | 'ministerio';

// type LogoEntidadVariant = 'unp' | 'unidad' | 'interior';
// type LogoEcosistemaVariant = 'escudo' | 'letras';

// type LogoEntidadColor = 'rojo' | 'gris' | 'blanco';
// type LogoEcosistemaColor = 'azul' | 'azul_sin_fondo' | 'blanco' | 'blanco_sin_fondo';

// interface LogoProps {
//   height?: string;
//   type: LogoType;
//   variant: LogoEntidadVariant | LogoEcosistemaVariant;
//   color: LogoEntidadColor | LogoEcosistemaColor;
// }

// const Logo: React.FC<LogoProps> = ({ height = '100px', type, variant, color }) => {

//   return (
//     <img className="logo-unp" src={`../../assets/img/${type}/logo_${variant}_${color}.svg`} alt="logo" height={height} />
//   );
// };

// export { Logo };
