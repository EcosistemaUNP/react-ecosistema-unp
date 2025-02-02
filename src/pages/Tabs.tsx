import React from 'react'
import Encabezado from '../../lib/ui/components/Encabezado'
import { Subtitulo } from '../../lib/ui'
import { FaHouse } from 'react-icons/fa6'
import { VentanaTabs } from '../../lib/shared/components/VentanaTabs'
import { TabVentana } from '../../lib/shared/components/TabVentana'
import { Tabla } from './Tabla'

const Tabs: React.FC = () => {
    return (
        <VentanaTabs>
            <TabVentana eventKey="demo" title={'Pestaña 1'}>
                <Tabla />
            </TabVentana>
            <TabVentana eventKey="demo2" title={'Pestaña 2'}>
                <Encabezado dependencia={'Dependencia de la UNP'} />
                <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
                <Encabezado dependencia={'Dependencia de la UNP'} />
                <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
                <Encabezado dependencia={'Dependencia de la UNP'} />
                <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
            </TabVentana>
            <TabVentana eventKey="demo3" title={'Pestaña 3'}>
                Contenido de la pestaña tres
            </TabVentana>
        </VentanaTabs>
    )
}

export { Tabs }