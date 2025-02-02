import React from "react";

interface EncabezadoProps {
  dependencia: String;
}

const titleStyle = {
  borderLeft: "8px solid",
  borderLeftColor: "#d13c47",
  height: "65px",
  marginBottom: "20px",
  display: "flex",
  alignItems: "center",
  marginLeft: '0px'
};

const logoStyle = {
  height: "60px",
  marginLeft: "12px",
  marginRight: "15px",
  alignSelf: "center",
};

const Encabezado: React.FC<EncabezadoProps> = ({ dependencia }) => {
  return (
    <div style={titleStyle}>
      <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", }}>
        <img src="https://i.imgur.com/MYXJbgg.png" style={logoStyle} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "start", }}>
          <h4 className="d-none d-md-block" style={{ margin: "0px 0px 4px 0px", fontWeight: "700" }}> Unidad Nacional de Protección </h4>
          <h5 className="d-block d-md-none" style={{ margin: "0px 0px 4px 0px", fontWeight: "700", fontSize: '1rem' }}> Unidad Nacional de Protección </h5>
          <h6 className="d-none d-md-block" style={{ margin: "0px 0px 4px 0px", color: "#6b6b6b" }}> {dependencia} </h6>
          <h6 className="d-block d-md-none" style={{ margin: "0px 0px 4px 0px", fontSize: "0.8rem", color: "#6b6b6b" }}> {dependencia} </h6>
        </div>
      </div>
    </div>);
};

export default Encabezado;
