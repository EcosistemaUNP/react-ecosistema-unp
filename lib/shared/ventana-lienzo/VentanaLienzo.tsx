// VentanaLienzo-V.0.1 --> desarrollador: andres.soto

import React from "react";
import { BrowserRouter } from "react-router-dom";

import BreadcrumbNav, { BreadcrumbItem } from "../breadcrumb/Breadcrumb.js";
import { MenuLateral } from "../menu-lateral/MenuLateral.js";

import './VentanaLienzo.css';
import NotificacionUsuario from "../notificacion-usuario/NotificacionUsuario.js";

interface VentanaLienzoProps {
  children?: React.ReactNode;
  items?: BreadcrumbItem[];
  extraInput?: React.ReactNode;
}

const VentanaLienzo: React.FC<VentanaLienzoProps> = ({ children, items, extraInput }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <BrowserRouter>
      <NotificacionUsuario />

      <MenuLateral onToggle={handleToggle} isOpen={menuOpen} />

      <div className={`${menuOpen ? "menu-open" : ""}`}>
        <div className={`main-section`}>
          <BreadcrumbNav items={items} extraInput={extraInput} />

          <div className="ventana-lienzo-container">
            {children}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export { VentanaLienzo };
