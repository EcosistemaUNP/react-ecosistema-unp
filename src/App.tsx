import { FaHouse } from 'react-icons/fa6'
import TabVentana from '../lib/shared/components/TabVentana'
import VentanaUsuario from '../lib/shared/components/VentanaUsuario'
import { Subtitulo } from '../lib/ui'

function App() {
  return (
    <>
      <VentanaUsuario>
        <TabVentana eventKey='demo' title='Demo'>
          <Subtitulo icon={FaHouse} subtitulo={'Demo de un subtítulo muy largo, y sigue...'} />
        </TabVentana>
        <TabVentana eventKey='demo2' title='Demo 2'>
          Demo 2
        </TabVentana>
      </VentanaUsuario>
    </>
  )
}

export default App
