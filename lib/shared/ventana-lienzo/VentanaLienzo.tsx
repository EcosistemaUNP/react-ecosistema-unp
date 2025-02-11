// VentanaLienzo-V.0.1 --> desarrollador: andres.soto

import React from "react";
import { BrowserRouter } from "react-router";

import { MenuLateral } from "../menu-lateral/MenuLateral.js";

interface VentanaLienzoProps {
  children?: React.ReactNode;
}

const VentanaLienzo: React.FC<VentanaLienzoProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <BrowserRouter>
      <MenuLateral onToggle={handleToggle} isOpen={menuOpen} />

      <div className={`${menuOpen ? "menu-open" : ""}`}>
        <div className={`main-section`} style={{ padding: '0.5rem' }}>{children}</div>
      </div>
    </BrowserRouter>
  );
};

export { VentanaLienzo };
