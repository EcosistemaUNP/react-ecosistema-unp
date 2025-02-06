import React from 'react'
import { ContenedorTarjeta, Subtitulo, Tarjeta, TarjetaAgregar } from '../../lib/ui'
import { FaHouse } from 'react-icons/fa6'
// import { BarraAccesibilidad } from '../../lib/accessibility'
const PageOne: React.FC = () => {
  return (
    <>
      <Tarjeta title='Título de la tarjeta' hasBody={false}>
        <ContenedorTarjeta>
          <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
          <TarjetaAgregar onClick={() => console.log('Hola')} title='Nuevo elemento'>
            Contenido de la tarjeta para agregar
            <br />
            Input
            <br />
            Input
          </TarjetaAgregar>
        </ContenedorTarjeta>
        <ContenedorTarjeta isGray={true}>
          <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
          Contenedor gris
          <TarjetaAgregar onClick={() => console.log('Hola')} title='Nuevo elemento'>
            Contenido de la tarjeta para agregar
            <br />
            Input
            <br />
            Input
          </TarjetaAgregar>
        </ContenedorTarjeta>
        <ContenedorTarjeta>
          Contenedor blanco
        </ContenedorTarjeta>
        <ContenedorTarjeta isGray={true} isLast={true}>
          Contenedor gris (isLast = true)
        </ContenedorTarjeta>
      </Tarjeta>

      <Tarjeta title='Título de la tarjeta dos'>
        Contenido de la tarjeta dos...
      </Tarjeta>

      {/* <BarraAccesibilidad /> */}
    </>
  )
}

export { PageOne }