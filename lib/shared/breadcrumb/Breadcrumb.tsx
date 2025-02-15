import React from "react";

import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";

import './Breadcrumb.css';

export interface BreadcrumbItem {
  label: string;
  link?: string;
}

interface BreadcrumbNavProps {
  items?: BreadcrumbItem[];
}

const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ items }) => {
  return (
    <div className="breadcrumb-container">
      <div
        className="breadcrumb-wrapper"
        style={{ 
          // Ajusta la posición de los elementos si se proporcionan links y hay un input extra
          justifyContent: items ? 'space-between' : 'end'
        }}
      >
        {/* Migas de Pan */}
        {items && (
          <Breadcrumb>
            {items.map((item, index) => (
              <BreadcrumbItem key={index} href={item.link} active={!item.link}>
                {item.label}
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        )}
      </div>
    </div>
  );
};

export { BreadcrumbNav };
