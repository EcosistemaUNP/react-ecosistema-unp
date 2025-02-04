import React from "react";

import { Card, CardBody, CardHeader } from "react-bootstrap";
import '../styles/Tarjeta.css';

interface TarjetaProps {
    title: string;
    children: React.ReactNode;
}

const Tarjeta: React.FC<TarjetaProps> = ({ title, children }) => {
    return (
        <Card className="border-0 shadow mt-4 tarjeta-unp">
            <CardHeader className="d-flex justify-content-between align-items-center bg-unp text-light py-3 tarjeta-header-unp">
                {title}
            </CardHeader>
            <CardBody>
                {children}
            </CardBody>
        </Card>
    );
};

export { Tarjeta };
