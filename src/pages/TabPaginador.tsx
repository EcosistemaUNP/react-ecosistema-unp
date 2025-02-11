import React from 'react'
import { Paginador, Subtitulo, Tarjeta } from '../../lib/ui'
import { FaHouse, FaPerson } from 'react-icons/fa6'

const TabPaginador: React.FC = () => {

    const form = [
        {
            label: 'Uno',
            icon: FaPerson,
            content:
                <>
                    <Tarjeta title='Título de la tarjeta'>
                        <Subtitulo icon={FaHouse} subtitulo={'Subtítulo...'} />
                        Contenido de la tarjeta
                    </Tarjeta>
                </>,
            handleNextClick: () => console.log('Uno')
        },
        {
            label: 'Dos',
            icon: FaPerson,
            content: <>Contenido de la página dos</>,
            handleNextClick: () => console.log('Dos')
        },
        {
            label: 'Tres',
            icon: FaPerson,
            content: <>Contenido de la página tres</>,
            handleNextClick: () => console.log('Tres')
        },
        {
            label: 'Cuatro',
            icon: FaPerson,
            content: <>Contenido de la página cuatro</>
            // handleNextClick: (e: any) => void;
        },
        {
            label: 'Cinco',
            icon: FaPerson,
            content: <>Contenido de la página cinco</>
            // handleNextClick: (e: any) => void;
        },
        {
            label: 'Seis',
            icon: FaPerson,
            content: <>Contenido de la página seis</>
            // handleNextClick: (e: any) => void;
        },
        {
            label: 'Siete',
            icon: FaPerson,
            content: <>Contenido de la página siete</>
            // handleNextClick: (e: any) => void;
        }
    ]
    return (
        <Paginador
            stepContent={form}
            onSubmit={() => console.log('Enviado!!!')}
            // canJump={true}
        />
    )
}

export { TabPaginador }