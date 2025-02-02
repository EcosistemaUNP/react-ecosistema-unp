import React from "react";
import { NavDropdown } from "react-bootstrap";

import { FaBell } from "react-icons/fa";

import '../styles/NotificacionUsuario.css'

const NotificacionUsuario: React.FC = () => {
  return (
    <div className="position-absolute top-0 end-0" style={{
      marginTop: '9px'
    }}>
      <NavDropdown title={
        <FaBell className="icono-notificaciones" />
      }
      align='end'>
        <div style={{
          fontWeight: '400',
          padding: '1rem'

        }}>
          Notificaciones
        </div>
      </NavDropdown>

    </div>
  );
};

export default NotificacionUsuario;
