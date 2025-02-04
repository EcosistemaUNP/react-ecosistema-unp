import React from 'react'
import { Tarjeta } from '../../lib/ui'
const PageOne: React.FC = () => {
  return (
    <>
    <Tarjeta title='Título de la tarjeta'>
      Contenido de la tarjeta
    </Tarjeta>

    <Tarjeta title='Título de la tarjeta dos'>
      Contenido de la tarjeta dos...
    </Tarjeta>
    </>
  )
}

export { PageOne }