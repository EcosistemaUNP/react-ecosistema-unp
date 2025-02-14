import React, { ReactNode } from "react";

import { Breadcrumb } from "react-bootstrap";

import './Breadcrumb.css';

interface BreadcrumbItem {
  label: string;
  link?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  rightComponent?: ReactNode;
}

const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ items, rightComponent }) => {
  return (
    <div className="breadcrumb-container"  >
      <div className="breadcrumb-wrapper">
        {/* Migas de Pan */}
        <Breadcrumb className="mb-0">
          {items.map((item, index) => (
            <Breadcrumb.Item key={index} href={item.link} active={!item.link}>
              {item.label}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>

        {/* Componente a la derecha */}
        <div className="mb-0">
          {rightComponent}
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbNav;
