import React from 'react'
import { Encabezado, IconoTipoSolicitud, Subtitulo } from '../../lib/ui'
import { FaBars, FaHouse } from 'react-icons/fa6'
import { Button } from 'react-bootstrap'

const TabElementosUi: React.FC = () => {
    return (
        <>
            <Encabezado titulo='Título' subtitulo='Subtítulo' />
            <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
            <Encabezado subtitulo={'Subtítulo'} />
            <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
            <Subtitulo icon={FaBars} subtitulo={'Iconos tabla'} />
            <IconoTipoSolicitud tipoSolicitud='Individual' />
            <IconoTipoSolicitud tipoSolicitud='Individual' porGestionar={true} />
            <br /><br />
            <IconoTipoSolicitud tipoSolicitud='Colectivo' />
            <IconoTipoSolicitud tipoSolicitud='Colectivo' porGestionar={true} />
            <br /><br />
            <IconoTipoSolicitud tipoSolicitud='Emergencia' />
            <IconoTipoSolicitud tipoSolicitud='Emergencia' porGestionar={true} />
            <br /><br />
            <IconoTipoSolicitud tipoSolicitud='Jurídico' />
            <IconoTipoSolicitud tipoSolicitud='Jurídico' porGestionar={true} />
            <br /><br />
            <IconoTipoSolicitud tipoSolicitud='Reasignación' />
            <IconoTipoSolicitud tipoSolicitud='Reasignación' porGestionar={true} />
            <Subtitulo icon={FaBars} subtitulo={'Botones'} />
            <Button variant='unp_primary'>Primario</Button>
            <br /><br />
            <Button variant='unp_secondary'>Secundario</Button>
            <br /><br />
            <Button variant='unp_tertiary'>Enviar</Button>
        </>
    )
}

export { TabElementosUi }