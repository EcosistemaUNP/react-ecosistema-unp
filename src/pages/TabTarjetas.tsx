import React from 'react'
import { ContenedorTarjeta, SeccionTarjeta, Subtitulo, Tarjeta, TarjetaAgregar } from '../../lib/ui'
import { FaHouse } from 'react-icons/fa6'
// import { BarraAccesibilidad } from '../../lib/accessibility'

const TabTarjetas: React.FC = () => {

  const click = () => {
    console.log('Hola!');
  }

  return (
    <>
      <Tarjeta title='Título de la tarjeta' hasBody={false}>
        <SeccionTarjeta>
          <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
          <TarjetaAgregar onClose={() => console.log('Hola')} title='Nuevo elemento 1' isGray={true}>
            Contenido de la tarjeta para agregar
            <br />
            Input
            <br />
            Input
          </TarjetaAgregar>
          <TarjetaAgregar onClose={() => console.log('Hola')} title='Nuevo elemento 2' isGray={true}>
            Contenido de la tarjeta para agregar
            <br />
            Input
            <br />
            Input
          </TarjetaAgregar>
          <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
          Contenido
          <ContenedorTarjeta>
            Contenido en el contenedor gris
          </ContenedorTarjeta>
          <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
          Contenido
        </SeccionTarjeta>
        <SeccionTarjeta isGray={true} isLast={true}>
          <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
          <ContenedorTarjeta isGray={false}>
            Contenido en el contenedor blanco
          </ContenedorTarjeta>
          Contenedor gris
          <TarjetaAgregar onClose={click}>
            Contenido de la tarjeta para agregar
            <br />
            Input
            <br />
            Input
          </TarjetaAgregar>
          <TarjetaAgregar onClose={click}>
            Contenido de la tarjeta para agregar
            <br />
            Input
            <br />
            Input
          </TarjetaAgregar>
        </SeccionTarjeta>
      </Tarjeta>

      <Tarjeta title='Título de la tarjeta dos'>
        <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
        <TarjetaAgregar onClose={() => console.log('Hola')} title='Nuevo elemento 1' isGray={true}>
          Contenido de la tarjeta para agregar
          <br />
          Input
          <br />
          Input
        </TarjetaAgregar>
        <TarjetaAgregar onClose={() => console.log('Hola')} title='Nuevo elemento 2' isGray={true}>
          Contenido de la tarjeta para agregar
          <br />
          Input
          <br />
          Input
        </TarjetaAgregar>
        <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
        Contenido
        <ContenedorTarjeta>
          Contenido en el contenedor gris
        </ContenedorTarjeta>
        <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
        Contenido
      </Tarjeta>

      {/* <BarraAccesibilidad /> */}
    </>
  )
}

export { TabTarjetas }