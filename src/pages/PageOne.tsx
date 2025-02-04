import React from 'react'
import { ContenedorTarjeta, Tarjeta } from '../../lib/ui'
const PageOne: React.FC = () => {
  return (
    <>
      <Tarjeta title='Título de la tarjeta'>
        <ContenedorTarjeta>
          Contenedor
        </ContenedorTarjeta>
        <ContenedorTarjeta isGray={true}>
          Contenedor gris
        </ContenedorTarjeta>
        <ContenedorTarjeta>
          Contenedor blanco
        </ContenedorTarjeta>
        <ContenedorTarjeta isGray={true} isLast={true}>
          Contenedor gris (isLast = true)
        </ContenedorTarjeta>
      </Tarjeta>

      <Tarjeta title='Título de la tarjeta dos'>
        <ContenedorTarjeta>
          Contenido de la tarjeta dos...
        </ContenedorTarjeta>
      </Tarjeta>
    </>
  )
}

export { PageOne }