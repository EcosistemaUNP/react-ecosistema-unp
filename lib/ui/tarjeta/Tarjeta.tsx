import React from "react";

import { Button, Card, CardBody, CardHeader, Row } from "react-bootstrap";
import './Tarjeta.css';
import { SeccionTarjeta } from "../seccion-tarjeta/SeccionTarjeta";

interface TarjetaProps {
    title: string;
    children: React.ReactNode;
    method?: string;
    validated?: boolean;
    onSubmit?: any;
    hasBody?: boolean;
}

const btnSendStyle = {
    color: "#f3f3f3",
    backgroundColor: "#38a729",
    borderColor: "#33a024",
    marginTop: "20px",
    marginBottom: "15px",
    width: "100px",
};

const Tarjeta: React.FC<TarjetaProps> = ({
    title,
    children,
    method = 'GET',
    validated = false,
    onSubmit = () => { },
    hasBody = true
}) => {
    return (
        <Card className="border-0 mb-4 tarjeta-unp">
            <CardHeader className="d-flex justify-content-between align-items-center bg-unp text-light py-3 tarjeta-header-unp">
                {title}
            </CardHeader>
            <form
                method={method}
                onSubmit={onSubmit}
                noValidate
                className={validated ? "was-validated" : ""}
            >
                {hasBody ? (
                    <CardBody className="pt-0">
                        {children}

                        {method !== "GET" && (
                            <Row className="d-flex justify-content-end me-0">
                                <Button style={btnSendStyle} type="submit">
                                    Enviar
                                </Button>
                            </Row>
                        )}
                    </CardBody>
                ) : (
                    <>
                        {children}
                        {method !== "GET" && (
                            <SeccionTarjeta>
                                <Row className="d-flex justify-content-end me-0">
                                    <Button style={btnSendStyle} type="submit">
                                        Enviar
                                    </Button>
                                </Row>
                            </SeccionTarjeta>
                        )}
                    </>
                )}
            </form>
        </Card>
    );
};

export { Tarjeta };
