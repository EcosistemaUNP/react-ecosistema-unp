import React, { useEffect, useState } from 'react'
import { TablaRegistros } from '../../lib/tables'
import { Button } from 'react-bootstrap';
import { ContenidoModal } from '../../lib/ui/contenido-modal/ContenidoModal';
import { FaBoxArchive, FaClockRotateLeft } from 'react-icons/fa6';
import { IconoTooltip } from '../../lib/ui';
import { TabElementosModal } from './TabElementosModal';

const Tabla: React.FC = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const modalContent = [
    {
      label: 'Contenido principal',
      content: (setView: (view: number) => void) => {
        return (
          <>
            Contenido principal
            <br /><br />
            <Button onClick={() => setView(3)} variant='unp_tertiary'>Ir al contenido cuatro</Button>
            <br /><br />
            <Button onClick={() => setView(4)} variant='unp_send'>Ir al contenido cinco</Button>
          </>
        )
      }

    },
    {
      label: 'Contenido dos',
      icon: FaClockRotateLeft,
      content: <>Contenido dos</>
    },
    {
      label: 'Contenido tres',
      icon: FaBoxArchive,
      content: <>Contenido tres</>
    },
    {
      label: 'Contenido cuatro',
      content: <>Contenido cuatro</>
    },
    {
      label: 'Contenido cinco',
      content: <>Contenido cinco</>
    }
  ];

  const columns = [
    {
      key: 'tipoRuta',
      label: 'Solicitud',
      renderComponent: (rowData: any) => (
        <IconoTooltip recordType={rowData.tipoRuta} />
      )
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
        return (
          <ContenidoModal
            title={row.numeroRegistro}
            modalContent={modalContent}
          />
        );
      case "nombres":
        return (
          <ContenidoModal title={row.numeroRegistro}>
            <TabElementosModal />
            <Button onClick={onHide}>Cerrar</Button>
          </ContenidoModal>
        );
      case "ubicacion":
        return (
          <>
          </>
        );
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