import React from 'react'
import { Encabezado, IconoTipoSolicitud, Subtitulo } from '../../lib/ui'
import { FaHouse } from 'react-icons/fa6'
import { VentanaTabs } from '../../lib/shared/components/VentanaTabs'
import { TabVentana } from '../../lib/shared/components/TabVentana'
import { Tabla } from './Tabla'
import { TablaShared } from './TablaShared'
import { PageOne } from './PageOne'
import { PageTwo } from './Paginador'

const Tabs: React.FC = () => {
    return (
        <VentanaTabs>
            <TabVentana eventKey="demo7" title={'Pestaña 7'}>
                <PageOne />
            </TabVentana>
            <TabVentana eventKey="demo" title={'Pestaña 1'}>
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
            </TabVentana>
            <TabVentana eventKey="demo6" title={'Pestaña 6'}>
                <TablaShared />
            </TabVentana>
            <TabVentana eventKey="demo9" title={'Pestaña 9'}>
                <Tabla />
            </TabVentana>
            <TabVentana eventKey="demo10" title={'Pestaña 10'}>
                <PageTwo />
            </TabVentana>
        </VentanaTabs>
    )
}

export { Tabs }