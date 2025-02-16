import React from "react";

import { MenuLateral } from "../menu-lateral/MenuLateral.js";
import { IconoSistema, IconosSistema } from "../iconos-sistema/IconosSistema.js";

import { Tabs } from "react-bootstrap";

import '../../styles/Bootstrap.css';

interface VentanaUsuarioProps {
  children?: React.ReactNode;
  extraInput?: IconoSistema[];
}

const VentanaTabs: React.FC<VentanaUsuarioProps> = ({ children, extraInput }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [key, setKey] = React.useState<string | undefined>(undefined);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <React.Fragment>
      <IconosSistema elements={extraInput} />

      <MenuLateral onToggle={handleToggle} isOpen={menuOpen} />

      <div className={`${menuOpen ? "menu-open" : ""}`}>
        <div className={`main-section`}>
          <Tabs
            id="controlled-tab"
            activeKey={key}
            onSelect={(k: string | null) => setKey(k !== null ? k : undefined)}
          >
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return child;
              }
              return null;
            })}
          </Tabs>
        </div>
      </div>
    </React.Fragment>
  );
};

export { VentanaTabs };
