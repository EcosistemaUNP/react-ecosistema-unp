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
        <FaBell style={{ 
          width: "25px", 
          height: "25px",
          color: '#142338'
        }} />
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
