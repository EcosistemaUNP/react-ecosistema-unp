import React from "react";

import { SeccionTarjetaProps } from "./seccion-tarjeta/SeccionTarjeta";

import { Button, Card, CardBody, CardHeader } from "react-bootstrap";

import './Tarjeta.css';
import '../../styles/Bootstrap.css'

type MethodType = 'get' | 'post' | 'put';

interface TarjetaProps {
    title: string;
    header?: boolean;
    children: React.ReactNode;
    method?: MethodType;
    validated?: boolean;
    onSubmit?: (...args: any[]) => any;
    hasPaddingTop?: boolean;
}

const btnSendStyle = {
    marginBottom: "20px",
    width: "100px",
};

const Tarjeta: React.FC<TarjetaProps> = ({
    title,
    header = false,
    children,
    method = 'get',
    validated = false,
    onSubmit,
    hasPaddingTop = true
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
            <Card className="border-0 tarjeta-unp">
                <CardHeader
                    className="bg-unp text-light tarjeta-header-unp"
                    style={{
                        paddingTop: '1rem',
                        paddingBottom: '1rem',
                        fontSize: !header ? '1.075rem' : '1.125rem',
                        fontWeight: header ? 500 : '',
                        display: header ? 'flex' : '',
                        justifyContent: header ? 'center' : ''
                    }}
                >
                    {title}
                </CardHeader>

                {hasSeccionTarjeta ? (
                    processedChildren
                ) : (
                    <CardBody className={`${(firstChildIsSubtitulo || !hasPaddingTop) ? 'pt-0' : ''}`}>
                        {children}
                    </CardBody>
                )}

            </Card>
            {method === 'post' && (
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
