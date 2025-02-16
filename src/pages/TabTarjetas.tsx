import React from 'react'
import { Subtitulo } from '../../lib/ui'
import { FaHouse } from 'react-icons/fa6'
import { ContenedorTarjeta, NuevoElemento, SeccionTarjeta, Tarjeta } from '../../lib/cards'
// import { BarraAccesibilidad } from '../../lib/accessibility'

const TabTarjetas: React.FC = () => {

  const click = () => {
    console.log('Hola!');
  }

  return (
    <>
      <Tarjeta title='Título de la tarjeta'>
        <SeccionTarjeta>
          <Subtitulo icon={FaHouse} subtitle={'Subtítulo aquí...'} />
          <NuevoElemento onClose={() => console.log('Hola')} label='Nuevo elemento 1' isGray={true}>
            Contenido de la tarjeta para agregar
            <br />
            Input
            <br />
            Input
          </NuevoElemento>
          <NuevoElemento onClose={click} label='Nuevo elemento 2' isGray={true}>
            Contenido de la tarjeta para agregar
            <br />
            Input
            <br />
            Input
          </NuevoElemento>
          <Subtitulo icon={FaHouse} subtitle={'Subtítulo aquí...'} />
          Contenido
          <ContenedorTarjeta>
            Contenido en el contenedor gris
          </ContenedorTarjeta>
          Contenido
        </SeccionTarjeta>
        <SeccionTarjeta> {/* Esta tarjeta es gris */}
          <Subtitulo icon={FaHouse} subtitle={'Subtítulo aquí...'} />
          <ContenedorTarjeta isGray={false}>
            Contenido en el contenedor blanco
          </ContenedorTarjeta>
          Contenedor gris
          <NuevoElemento onClose={click}>
            Contenido de la tarjeta para agregar
            <br />
            Input
            <br />
            Input
          </NuevoElemento>
          <NuevoElemento onClose={click}>
            Contenido de la tarjeta para agregar
            <br />
            Input
            <br />
            Input
          </NuevoElemento>
        </SeccionTarjeta>
      </Tarjeta>

      <Tarjeta title='Título de la tarjeta dos'>
        <Subtitulo icon={FaHouse} subtitle={'Subtítulo aquí...'} />
        <NuevoElemento onClose={() => console.log('Hola')} label='Nuevo elemento 1' isGray={true}>
          Contenido de la tarjeta para agregar
          <br />
          Input
          <br />
          Input
        </NuevoElemento>
        <NuevoElemento onClose={() => console.log('Hola')} label='Nuevo elemento 2' isGray={true}>
          Contenido de la tarjeta para agregar
          <br />
          Input
          <br />
          Input
        </NuevoElemento>
        <Subtitulo icon={FaHouse} subtitle={'Subtítulo aquí...'} />
        Contenido
        <ContenedorTarjeta>
          Contenido en el contenedor gris
        </ContenedorTarjeta>
        <Subtitulo icon={FaHouse} subtitle={'Subtítulo aquí...'} />
        Contenido
      </Tarjeta>

      <Tarjeta title="Ejemplo con secciones" method='post' onSubmit={() => console.log('Enviado!!')}>
        <SeccionTarjeta>
          <Subtitulo icon={FaHouse} subtitle={'Subtítulo aquí...'} />
          Sección blanca automática (índice par)
          Acá si iría con padding top 0 por que estoy usando el subtítulo
        </SeccionTarjeta>
        <SeccionTarjeta>
          Sección gris automática (índice impar)
          Acá íria SIN el padding top 0 porque el primer elemento no es un subtítulo
        </SeccionTarjeta>
        <SeccionTarjeta>
          Sección blanca automática (índice par)
          <Subtitulo icon={FaHouse} subtitle={'Subtítulo aquí...'} />
          Acá íria SIN el padding top 0 porque el primer elemento no es un subtítulo
        </SeccionTarjeta>
        <SeccionTarjeta>
          <Subtitulo icon={FaHouse} subtitle={'Subtítulo aquí...'} />
          Última sección con borde corregido
          <Subtitulo icon={FaHouse} subtitle={'Subtítulo aquí...'} />
          Acá si iría con padding top 0 por que estoy usando el subtítulo como primer elemento
        </SeccionTarjeta>
      </Tarjeta>

      <Tarjeta title="Ejemplo sin secciones">
        Contenido normal con body automático
      </Tarjeta>

      <Tarjeta title="Ejemplo sin secciones">
        <Subtitulo icon={FaHouse} subtitle={'Subtítulo aquí...'} />
        Contenido normal con body automático
      </Tarjeta>

      {/* <BarraAccesibilidad /> */}
    </>
  )
}

export { TabTarjetas }