import React from "react";

import { MenuLateral } from "./MenuLateral";
import NotificacionUsuario from "./NotificacionUsuario";

import { Tabs } from "react-bootstrap";
import '../../styles/Bootstrap.css';

interface VentanaUsuarioProps {
  children?: React.ReactElement | React.ReactElement[];
}

const VentanaTabs: React.FC<VentanaUsuarioProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [key, setKey] = React.useState<string | undefined>(undefined);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <React.Fragment>

      <NotificacionUsuario />

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
