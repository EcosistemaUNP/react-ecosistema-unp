import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { jwtDecode } from "jwt-decode";
import { useFinalizarSesion } from "../../auth/hooks/useFinalizarSesion.js";
import { urlCertificadoLaboral, urlBase } from "../../utils/Url.js";

import logo from '../../assets/img/ecosistema/logo_escudo_blanco.svg';

import {
  BiMenu,
  BiMenuAltRight,
  BiHome,
  BiLinkAlt,
  BiEnvelope,
  BiLogoRedux,
  BiErrorCircle,
  BiLogOut,
  BiAnalyse,
  BiBookAlt,
  BiMapPin,
  BiShieldPlus,
  BiSolidPlaneAlt,
  BiFile,
} from "react-icons/bi";
import "./MenuLateral.css";

interface MenuLateralProps {
  onToggle: () => void;
  isOpen: boolean;
}

interface DecodedToken {
  access_nuser: string;
  acces_linker: string;
}

const MenuLateral: React.FC<MenuLateralProps> = ({ onToggle, isOpen }) => {
  const [loading, setLoading] = useState(true);
  const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null);
  const sidebarClass = isOpen ? "sidebar-bar-panel open" : "sidebar-bar-panel";
  const navigate = useNavigate();
  const { FinSesion } = useFinalizarSesion();

  useEffect(() => {
    const storedUserToken = localStorage.getItem("user_token");
    if (storedUserToken) {
      const token = jwtDecode<DecodedToken>(storedUserToken);
      setDecodedToken(token);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const storedUserToken = localStorage.getItem("user_token");
      if (storedUserToken) {
        const token = jwtDecode<DecodedToken>(storedUserToken);
        setDecodedToken(token);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <></>;
  }

  const handleNavigate = () => {
    navigate("/sistema/usuario");
  };

  return (
    <div className={`container-fluid ${isOpen ? "menu-open" : ""}`}>
      <div className={sidebarClass}>
        <div className="logo_details">
          <img
            src={logo}
            alt="Logo"
            className="icon logo-image"
          />
          <div className="logo-name">EI - UNP</div>
          {isOpen ? (
            <BiMenuAltRight
              className="bx bx-menu i"
              id="btn"
              onClick={onToggle}
            />
          ) : (
            <BiMenu className="bx bx-menu i" id="btn" onClick={onToggle} />
          )}
        </div>
        <ul className="nav-list-panel">
          <li>
            <a href="">
              <BiHome className="bx bx-home i2" />
              <span className="link_name">Inicio</span>
            </a>
            <span className="tooltip">Inicio</span>
          </li>
          <li>
            <a href="">
              <BiMapPin className="bx bx-map-pin i2" />
              <span className="link_name">Mapa del proceso</span>
            </a>
            <span className="tooltip">Mapa del proceso</span>
          </li>
          <li>
            <a href="">
              <BiBookAlt className="bx bx-book-alt i2" />
              <span className="link_name">Manuales de usuario</span>
            </a>
            <span className="tooltip">Manual de usuario</span>
          </li>
          <div style={{ paddingLeft: "15px", paddingRight: "15px" }}>
            <hr style={{ borderTop: "1px solid white" }} />
          </div>
          <li>
            <a href="https://www.unp.gov.co/" target="_blank">
              <BiLinkAlt className="bx bx-link-alt i2" />
              <span className="link_name">Portal UNP</span>
            </a>
            <span className="tooltip">Portal UNP</span>
          </li>
          <li>
            <a
              href="https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000"
              target="_blank"
            >
              <BiEnvelope className="bx bx-envelope i2" />
              <span className="link_name">Correo institucional</span>
            </a>
            <span className="tooltip">Correo institucional</span>
          </li>
          <li>
            <a href="http://intranet.unp.gov.co/" target="_blank">
              <BiLogoRedux className="bx bxl-redux i2" />
              <span className="link_name">Acceso directo a Intranet</span>
            </a>
            <span className="tooltip">Acceso directo a Intranet</span>
          </li>
          <li>
            <a href="https://mesadeservicios.unp.gov.co/HEAT/" target="_blank">
              <BiErrorCircle className="bx bx-error-circle i2" />
              <span className="link_name">Mesa de servicios</span>
            </a>
            <span className="tooltip">Mesa de servicios</span>
          </li>
          <div style={{ paddingLeft: "15px", paddingRight: "15px" }}>
            <hr style={{ borderTop: "1px solid white" }} />
          </div>
          <li>
            <a href="">
              <BiShieldPlus className="bx i2" />
              <span className="link_name">Medida de emergencia</span>
            </a>
            <span className="tooltip">Medida de emergencia</span>
          </li>
          <li>
            <a href="">
              <BiAnalyse className="bx i2" />
              <span className="link_name">Acta de reunión</span>
            </a>
            <span className="tooltip">Acta de reunión</span>
          </li>
          <li>
            <a href="">
              <BiSolidPlaneAlt className="bx i2" />
              <span className="link_name">Solicitud de viáticos</span>
            </a>
            <span className="tooltip">Solicitud de viáticos</span>
          </li>
          <li>
            <a href={`${urlBase}${urlCertificadoLaboral}`} target="_blank">
              <BiFile className="bx i2" />
              <span className="link_name">Certificados laborales (OPS)</span>
            </a>
            <span className="tooltip">Certificados laborales (OPS)</span>
          </li>
        </ul>
        <div className="profile-content">
          <div className="profile">
            <div
              className="profile-detail"
              onClick={handleNavigate}
              style={{ cursor: "pointer" }}
            >
              {decodedToken && (
                <div className="name-job" style={{ marginTop: "3px" }}>
                  <div className="name">{decodedToken.access_nuser}</div>
                  <div className="job">{decodedToken.acces_linker}</div>
                </div>
              )}
            </div>
            <BiLogOut className="icon" onClick={FinSesion} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { MenuLateral };
