import React from 'react'
import { Encabezado, Subtitulo } from '../../lib/ui'
import { FaHouse } from 'react-icons/fa6'
import { VentanaTabs } from '../../lib/shared/components/VentanaTabs'
import { TabVentana } from '../../lib/shared/components/TabVentana'
import { Tabla } from './Tabla'
import { TablaShared } from './TablaShared'
import { PageOne } from './PageOne'

const Tabs: React.FC = () => {
    return (
        <VentanaTabs>
            <TabVentana eventKey="demo" title={'Pestaña 1'}>
                <PageOne />
            </TabVentana>
            <TabVentana eventKey="demo2" title={'Pestaña 2'}>
                <Encabezado subtitulo={'Dependencia de la UNP'} />
                <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
                <Encabezado titulo='Título' subtitulo='Subtítulo' />
                <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
                <Encabezado subtitulo={'Subtítulo'} />
                <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
            </TabVentana>
            <TabVentana eventKey="demo3" title={'Pestaña 3'}>
                <Tabla />
            </TabVentana>
            <TabVentana eventKey="demo4" title={'Pestaña 4'}>
                <TablaShared />
            </TabVentana>
        </VentanaTabs>
    )
}

export { Tabs }