import React, { useEffect, useState } from 'react'
import { TablaRegistros } from '../../lib/tables'
import { Button } from 'react-bootstrap';

const Tabla: React.FC = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const columns = [
        {
            key: 'tipoRuta',
            label: 'Solicitud',
            // renderComponent: (rowData: any) => (
            //   <IconTooltip
            //     solicitud={rowData.tipoRuta}
            //     estado={rowData.estadoRegistro}
            //   />
            // )
        },
        { key: 'numeroRegistro', label: 'Registro', hasModal: true },
        { key: 'numeroRadicado', label: 'Radicado' },
        { key: 'diasHabiles', label: 'Días hábiles' },
        { key: 'nombres', label: 'Nombres completos', hasModal: true },
        { key: 'nuip', label: 'NUIP' },
        { key: 'contacto', label: 'Contacto' },
        { key: 'ubicacion', label: 'Ubicación', hasModal: true }
    ];

    const renderModalContent = (row: Record<string, any>, column: any, onHide?: () => void) => {
        switch (column.key) {
            case "numeroRegistro":
                return (<Button onClick={onHide}>Cerrar</Button>);
            case "nombres":
                return (<></>);
            case "ubicacion":
                return (<></>);
            default:
                return <p>No hay información adicional disponible.</p>;
        }
      };

    useEffect(() => {
        setIsLoading(true);

        const fetchData = async () => {
            const response = await fetch('/assets/tableData.json');
            const result = await response.json();
            if (result) {
                setData(result);
                setIsLoading(false);
            } else {
                setIsLoading(false);
                return [];
            }
        }

        setTimeout(() => {
            fetchData();
        }, 2500)
    }, [])

    return (
        <>
            <TablaRegistros
                columns={columns}
                data={data}
                totalDias={25}
                title={'Título de la tabla'}
                subtitle={'Subtítulo de la tabla'}
                isLoading={isLoading}
                renderModalContent={renderModalContent}
                closeModalOut={true}
                extraInput={
                    <>
                        <Button variant='primary'>
                            Botón
                        </Button>
                    </>
                }
            />
        </>
    )
}

export { Tabla }