import React from 'react'
import { SeccionTarjetaLectura, Subtitulo, TarjetaLectura } from '../../lib/ui'
import { FaHouse, FaPerson } from 'react-icons/fa6'

const TabLectura: React.FC = () => {

    const form = [
        {
            label: 'Uno',
            icon: FaPerson,
            content:
                <>
                    <SeccionTarjetaLectura title='Título de la tarjeta'>

                        Contenido de la tarjeta
                    </SeccionTarjetaLectura>
                    <SeccionTarjetaLectura title='Título de la tarjeta'>
                        <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                        Contenido de la tarjeta
                    </SeccionTarjetaLectura>
                    <SeccionTarjetaLectura title='Título de la tarjeta'>
                        <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                        Contenido de la tarjeta
                    </SeccionTarjetaLectura>
                    <SeccionTarjetaLectura title='Título de la tarjeta'>
                        <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                        Contenido de la tarjeta
                    </SeccionTarjetaLectura>
                    <SeccionTarjetaLectura title='Título de la tarjeta'>
                        <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                        Contenido de la tarjeta
                    </SeccionTarjetaLectura>
                    <SeccionTarjetaLectura title='Título de la tarjeta'>
                        <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                        Contenido de la tarjeta
                    </SeccionTarjetaLectura>
                    <SeccionTarjetaLectura title='Título de la tarjeta'>
                        <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                        Contenido de la tarjeta
                    </SeccionTarjetaLectura>
                </>
        },
        {
            label: 'Dos',
            icon: FaPerson,
            content: <>
                <SeccionTarjetaLectura title='Título de la tarjeta'>
                    <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                    Contenido de la tarjeta
                </SeccionTarjetaLectura>
                <SeccionTarjetaLectura title='Título de la tarjeta'>
                    <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                    Contenido de la tarjeta
                </SeccionTarjetaLectura>
                <SeccionTarjetaLectura title='Título de la tarjeta'>
                    <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                    Contenido de la tarjeta
                </SeccionTarjetaLectura>
                <SeccionTarjetaLectura title='Título de la tarjeta'>
                    <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                    Contenido de la tarjeta
                </SeccionTarjetaLectura>
                <SeccionTarjetaLectura title='Título de la tarjeta'>
                    <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                    Contenido de la tarjeta
                </SeccionTarjetaLectura>
            </>
        },
        {
            label: 'Tres',
            icon: FaPerson,
            content: <>
                <SeccionTarjetaLectura title='Título de la tarjeta'>
                    <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                    Contenido de la tarjeta
                </SeccionTarjetaLectura>
                <SeccionTarjetaLectura title='Título de la tarjeta'>
                    <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                    Contenido de la tarjeta
                </SeccionTarjetaLectura>
                <SeccionTarjetaLectura title='Título de la tarjeta'>
                    <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                    Contenido de la tarjeta
                </SeccionTarjetaLectura>
            </>
        },
        {
            label: 'Cuatro',
            icon: FaPerson,
            content: <>
                <SeccionTarjetaLectura title='Título de la tarjeta'>
                    <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                    Contenido de la tarjeta
                </SeccionTarjetaLectura>
            </>
        },
        {
            label: 'Cinco',
            icon: FaPerson,
            content: <>
                <SeccionTarjetaLectura title='Título de la tarjeta'>
                    <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                    Contenido de la tarjeta
                </SeccionTarjetaLectura>
                <SeccionTarjetaLectura title='Título de la tarjeta'>
                    <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                    Contenido de la tarjeta
                </SeccionTarjetaLectura>
                <SeccionTarjetaLectura title='Título de la tarjeta'>
                    <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                    Contenido de la tarjeta
                </SeccionTarjetaLectura>
                <SeccionTarjetaLectura title='Título de la tarjeta'>
                    <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                    Contenido de la tarjeta
                </SeccionTarjetaLectura>
                <SeccionTarjetaLectura title='Título de la tarjeta'>
                    <Subtitulo icon={FaHouse} subtitle={'Subtítulo...'} />
                    Contenido de la tarjeta
                </SeccionTarjetaLectura>
            </>
        }
    ]
    return (
        <>
            <TarjetaLectura
                title='Subdirección de Evaluación de Riesgo'
                subtitle='Entrevista'
                headerContent={'Contenido del encabezado'}
                stepContent={form}
            />

            <br /><br />

            <TarjetaLectura
                title='Subdirección Especializada de Seguridad y Protección'
                subtitle='Entrevista'
                headerContent={'Contenido del enzabezado'}
            >
                <SeccionTarjetaLectura title='Sección de mi tarjeta'>
                    <Subtitulo icon={FaHouse} subtitle='Subtítulo aquí...' />
                    Contenido aquí
                </SeccionTarjetaLectura>
            </TarjetaLectura>
        </>
    )
}

export { TabLectura }