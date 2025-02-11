import React from "react";

import { IconType } from "react-icons";

interface SubtituloProps {
  subtitulo: string;
  icon: IconType;
}

const divStyle = {
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  marginTop: '1.2rem',
  marginBottom: '0.9rem'
}

const subtituloStyle = {
  fontColor: "#303d50s",
  fontSize: "1.1rem",
  fontWeight: "700",
  marginLeft: '0.66rem',
  color: '#303d50'
};

const iconStyle = {
  fontSize: "1.25rem",
  color: '#303d50'
};

const Subtitulo: React.FC<SubtituloProps> = ({
  subtitulo,
  icon: Icon,
}) => {
  return (
    <>
      <div style={divStyle}>
        <Icon style={iconStyle} />
        <span style={subtituloStyle}>{subtitulo}</span>
      </div>
    </>
  );
};

export { Subtitulo };
