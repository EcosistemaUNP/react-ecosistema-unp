import React from 'react'
import Encabezado from '../../lib/ui/components/Encabezado'
import { Subtitulo } from '../../lib/ui'
import { FaHouse } from 'react-icons/fa6'
import { VentanaTabs } from '../../lib/shared/components/VentanaTabs'
import { TabVentana } from '../../lib/shared/components/TabVentana'

const Tabs: React.FC = () => {
    return (
        <VentanaTabs>
            <TabVentana eventKey="demo" title={'Pestaña 1'}>
                <Encabezado dependencia={'Dependencia de la UNP'} />
                <Subtitulo icon={FaHouse} subtitulo={'Demo de un subtítulo muy largo, y sigue...'} />
                <Encabezado dependencia={'Dependencia de la UNP'} />
                <Subtitulo icon={FaHouse} subtitulo={'Demo de un subtítulo muy largo, y sigue...'} />
                <Encabezado dependencia={'Dependencia de la UNP'} />
                <Subtitulo icon={FaHouse} subtitulo={'Demo de un subtítulo muy largo, y sigue...'} />
            </TabVentana>
            <TabVentana eventKey="demo2" title={'Pestaña 2'}>
                <Subtitulo icon={FaHouse} subtitulo={'Dependencia de la UNP'} />
                <Encabezado dependencia={'Demo de un subtítulo muy largo, y sigue...'} />
                <Subtitulo icon={FaHouse} subtitulo={'Dependencia de la UNP'} />
                <Encabezado dependencia={'Demo de un subtítulo muy largo, y sigue...'} />
                <Subtitulo icon={FaHouse} subtitulo={'Dependencia de la UNP'} />
                <Encabezado dependencia={'Demo de un subtítulo muy largo, y sigue...'} />
            </TabVentana>
            <TabVentana eventKey="demo3" title={'Pestaña 3'}>

            </TabVentana>
        </VentanaTabs>
    )
}

export { Tabs }