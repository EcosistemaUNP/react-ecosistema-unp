import React from "react";

import { Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

interface TabVentanaProps {
  eventKey: string;
  title: string;
  children: React.ReactNode;
}

const TabVentana: React.FC<TabVentanaProps> = ({
  eventKey,
  title,
  children,
}) => {
  return (
    <Tab eventKey={eventKey} title={title}>
      {children}
    </Tab>
  );
};

export default TabVentana;
