import React from 'react'
import { Paginador, Subtitulo } from '../../lib/ui'
import { FaHouse, FaPerson } from 'react-icons/fa6'
import { Tarjeta } from '../../lib/cards'

const TabPaginador: React.FC = () => {

    const form = [
        {
            label: 'Uno',
            icon: FaPerson,
            content:
                <>
                    <Tarjeta title='Título de la tarjeta'>
                        <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                        Contenido de la tarjeta
                    </Tarjeta>
                </>,
            handleNextClick: () => console.log('Uno')
        },
        {
            label: 'Dos',
            icon: FaPerson,
            content:
                <>
                    <Tarjeta title='Título de la tarjeta'>
                        <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                        Contenido de la tarjeta
                    </Tarjeta>
                    <Tarjeta title='Título de la tarjeta'>
                        <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                        Contenido de la tarjeta
                    </Tarjeta>
                    <Tarjeta title='Título de la tarjeta'>
                        <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                        Contenido de la tarjeta
                    </Tarjeta>
                </>,
            handleNextClick: () => { return false; }
        },
        {
            label: 'Tres',
            icon: FaPerson,
            content:
                <>
                    <Tarjeta title='Título de la tarjeta'>
                        <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                        Contenido de la tarjeta
                    </Tarjeta>
                    <Tarjeta title='Título de la tarjeta'>
                        <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                        Contenido de la tarjeta
                    </Tarjeta>
                    <Tarjeta title='Título de la tarjeta'>
                        <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                        Contenido de la tarjeta
                    </Tarjeta>
                </>,
            handleNextClick: () => console.log('Tres')
        },
        {
            label: 'Cuatro',
            icon: FaPerson,
            content:
                <>
                    <Tarjeta title='Título de la tarjeta'>
                        <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                        Contenido de la tarjeta
                    </Tarjeta>
                </>,
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
        <>
            {/* <Tarjeta title='Título de la tarjeta'>
                <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                Contenido de la tarjeta
            </Tarjeta> */}
            <Paginador
                stepContent={form}
                onSubmit={() => console.log('Enviado!!!')}
                // canJump={false}
            />
        </>
    )
}

export { TabPaginador }