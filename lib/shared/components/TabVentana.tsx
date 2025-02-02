import React from "react";

import { Tab } from "react-bootstrap";

import '../styles/Tabs.css';
import '../../styles/Bootstrap.css';

interface TabVentanaProps {
  eventKey: string;
  title: string;
  children?: React.ReactNode;
}

const TabVentana: React.FC<TabVentanaProps> = ({
  eventKey,
  title,
  children,
}) => {
  return (
    <Tab eventKey={eventKey} title={title} style={{
      border: '50%'
    }}>
      {children}
    </Tab>
  );
};

export { TabVentana };
