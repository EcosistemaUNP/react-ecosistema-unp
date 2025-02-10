import React from 'react'
import { ContenedorTarjeta, Subtitulo, Tarjeta, TarjetaAgregar } from '../../lib/ui'
import { FaHouse } from 'react-icons/fa6'
// import { BarraAccesibilidad } from '../../lib/accessibility'

const TabTarjetas: React.FC = () => {

  const click = () => {
    console.log('Hola!');
  }

  return (
    <>
      <Tarjeta title='Título de la tarjeta' hasBody={false}>
        <ContenedorTarjeta>
          <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
          <TarjetaAgregar onClose={() => console.log('Hola')} title='Nuevo elemento'>
            Contenido de la tarjeta para agregar
            <br />
            Input
            <br />
            Input
          </TarjetaAgregar>
          <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
          Contenido
          <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
          Contenido
        </ContenedorTarjeta>
        <ContenedorTarjeta isGray={true} isLast={true}>
          <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
          Contenedor gris
          <TarjetaAgregar onClose={click}>
            Contenido de la tarjeta para agregar
            <br />
            Input
            <br />
            Input
          </TarjetaAgregar>
        </ContenedorTarjeta>
      </Tarjeta>

      <Tarjeta title='Título de la tarjeta dos'>
        <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
        Contenido de la tarjeta dos...
      </Tarjeta>

      {/* <BarraAccesibilidad /> */}
    </>
  )
}

export { TabTarjetas }