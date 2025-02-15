import React from "react";
import { NavDropdown } from "react-bootstrap";

import { FaBell } from "react-icons/fa";

import './NotificacionUsuario.css'

const NotificacionUsuario: React.FC = () => {
  return (
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
  );
};

export { NotificacionUsuario };
