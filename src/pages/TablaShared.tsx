import React, { useEffect, useState } from 'react'
import { TablaRegistros } from '../../lib/tables'
import { Button } from 'react-bootstrap';
import { ContenidoModal } from '../../lib/ui/components/ContenidoModal';
import { FaBoxArchive, FaClockRotateLeft } from 'react-icons/fa6';
import { IconoTipoSolicitud } from '../../lib/ui';

const TablaShared: React.FC = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [showHistoricoCaso, setShowHistoricoCaso] = useState(false);
  const [showHistoricoSer, setShowHistoricoSer] = useState(false);
  const [showRemitir, setShowRemitir] = useState(false);

  const [isShowing, setIsShowing] = useState(false);

  const buttons = [
    {
      title: 'Contenido uno',
      icon: FaBoxArchive,
      onShow: () => { setShowHistoricoSer(true); setIsShowing(true); }
    },
    {
      title: 'Contenido dos',
      icon: FaClockRotateLeft,
      onShow: () => { setShowHistoricoCaso(true); setIsShowing(true); }
    }
  ];

  const columns = [
    {
      key: 'tipoRuta',
      label: 'Solicitud',
      renderComponent: (rowData: any) => (
        <IconoTipoSolicitud tipoSolicitud={rowData.tipoRuta} porGestionar={rowData.estadoRegistro !== 'en_gestion' ? true : false} />
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
          <>
            <ContenidoModal
              title={row.numeroRegistro}
              buttons={buttons}
              isShowing={isShowing}
              setIsShowing={setIsShowing}
            >
              {showHistoricoCaso ? (
                <>Contenido dos</>
              ) : showHistoricoSer ? (
                <>Contenido uno</>
              ) : showRemitir ? (
                <>Remitir</>
              ) : (
                <>
                  <Button onClick={onHide}>Cerrar</Button>
                  <br />
                  {/* <Button onClick={() => { setShowRemitir(true); setIsShowing(true) }}>Remitir</Button> */}
                </>
              )}
            </ContenidoModal>
          </>
        );
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
      const response = await fetch('/assets/tableDataShared.json');
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

  useEffect(() => {
    if (!isShowing) {
      setShowHistoricoCaso(false);
      setShowHistoricoSer(false);
      setShowRemitir(false);
    }
  }, [isShowing])

  return (
    <>
      <TablaRegistros
        columns={columns}
        data={data}
        totalDias={25}
        title={'Título de la tabla'}
        subtitle={'Subtítulo de la tabla'}
        isLoading={isLoading}
        isShared={true}
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

export { TablaShared }