// VentanaLienzo-V.0.1 --> desarrollador: andres.soto

import React from "react";
import { BrowserRouter } from "react-router-dom";

import { IconoSistema, IconosSistema } from "../iconos-sistema/IconosSistema.js";

import { BreadcrumbNav, BreadcrumbItem } from "../breadcrumb/Breadcrumb.js";
import { MenuLateral } from "../menu-lateral/MenuLateral.js";

import './VentanaLienzo.css';

interface VentanaLienzoProps {
  children?: React.ReactNode;
  items?: BreadcrumbItem[];
  extraInput?: IconoSistema[];
}

const VentanaLienzo: React.FC<VentanaLienzoProps> = ({ children, items, extraInput }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <BrowserRouter>
      <IconosSistema elements={extraInput} />

      <MenuLateral onToggle={handleToggle} isOpen={menuOpen} />

      <div className={`${menuOpen ? "menu-open" : ""}`}>
        <div className={`main-section`}>
          <BreadcrumbNav items={items} />

          <div className="ventana-lienzo-container">
            {children}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export { VentanaLienzo };
