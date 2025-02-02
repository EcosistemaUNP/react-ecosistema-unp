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
    ]

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
                subtitle={'Título de la tabla'}
                items={'Subtítulo de la tabla'}
                isLoading={isLoading}
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