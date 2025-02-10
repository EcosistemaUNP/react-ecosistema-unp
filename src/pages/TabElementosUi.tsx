import React from 'react'
import { Encabezado, IconoTipoSolicitud, Subtitulo } from '../../lib/ui'
import { FaHouse } from 'react-icons/fa6'

const TabElementosUi: React.FC = () => {
    return (
        <>
            <Encabezado subtitulo={'Dependencia de la UNP'} />
            <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
            <Encabezado titulo='Título' subtitulo='Subtítulo' />
            <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
            <Encabezado subtitulo={'Subtítulo'} />
            <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
            <IconoTipoSolicitud tipoSolicitud='Individual' />
            <IconoTipoSolicitud tipoSolicitud='Individual' porGestionar={true} />
            <IconoTipoSolicitud tipoSolicitud='Colectivo' />
            <IconoTipoSolicitud tipoSolicitud='Colectivo' porGestionar={true} />
        </>
    )
}

export { TabElementosUi }