import React from "react";

import { SeccionTarjetaProps } from "./seccion-tarjeta/SeccionTarjeta";

import { Button, Card, CardBody, CardHeader } from "react-bootstrap";

import './Tarjeta.css';
import '../../styles/Bootstrap.css'

interface TarjetaProps {
    title: string;
    children: React.ReactNode;
    method?: string;
    validated?: boolean;
    onSubmit?: (...args: any[]) => any;
}

const btnSendStyle = {
    marginBottom: "20px",
    width: "100px",
};

const Tarjeta: React.FC<TarjetaProps> = ({
    title,
    children,
    method,
    validated = false,
    onSubmit
}) => {
    const childrenArray = React.Children.toArray(children);

    // Para detectar si el primer elemento es un sibtítulo
    const firstChildIsSubtitulo = childrenArray[0] &&
        React.isValidElement(childrenArray[0]) &&
        (childrenArray[0].type as any).displayName === 'Subtitulo';

    const secciones = childrenArray.filter(child =>
        React.isValidElement<SeccionTarjetaProps>(child) && (child.type as any).displayName === 'SeccionTarjeta'
    );
    const hasSeccionTarjeta = secciones.length > 0;

    const processedChildren = React.Children.map(children, (child, index) => {
        if (React.isValidElement<SeccionTarjetaProps>(child) && (child.type as any).displayName === 'SeccionTarjeta') {
            return React.cloneElement(child, {
                isGray: child.props.isGray ?? index % 2 === 1,
                isLast: child.props.isLast ?? index === secciones.length - 1
            });
        }
        return child;
    });

    return (
        <form
            method={method}
            noValidate
            onSubmit={onSubmit}
            className={validated ? "was-validated" : ""}
        >
            <Card className="border-0 mb-4 tarjeta-unp">
                <CardHeader className="d-flex justify-content-between align-items-center bg-unp text-light py-3 tarjeta-header-unp">
                    {title}
                </CardHeader>

                {hasSeccionTarjeta ? (
                    processedChildren
                ) : (
                    <CardBody className={`${firstChildIsSubtitulo ? 'pt-0' : ''}`}>
                        {children}
                    </CardBody>
                )}

            </Card>
            {method === 'POST' || method === 'post' && (
                <div style={{ display: 'flex', justifyContent: 'end' }}>
                    <Button variant="unp_send" style={btnSendStyle} type="submit">
                        Enviar
                    </Button>
                </div>
            )}
        </form>
    );
};

export { Tarjeta };
