import React from "react";
import { useState, useEffect } from "react";
import { useFinalizarSesion } from "../../auth/hooks/FinSesionHook";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";
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
import "../styles/MenuLateral.css";
import { urlCertificadoLaboral, urlBase } from "../../utils/Url";

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
            src="/logo-unp-gris.png"
            alt="Logo"
            className="icon logo-image"
          />
          <div className="logo-name">EI-UNP</div>
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
              href="https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000&redirect_uri=https%3a%2f%2foutlook.office365.com%2fowa%2f&resource=00000002-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid&msafed=1&msaredir=1&client-request-id=f8488f2f-33b7-d769-3dc8-fe71d263f531&protectedtoken=true&claims=%7b%22id_token%22%3a%7b%22xms_cc%22%3a%7b%22values%22%3a%5b%22CP1%22%5d%7d%7d%7d&nonce=638372347486593361.36439678-d731-49f6-a49f-cc0594f2abb0&state=Dcs7EoAgDEVR0HE5kc8LCVkO4NBaun1T3NPdGEI4vcOL2Qkq6NAKVu7SDJByQxgm2ulRFGLbQsOltXIz3nXMmaO_V3q_kX4"
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
            <a href={`${urlBase}${urlCertificadoLaboral}`}>
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
