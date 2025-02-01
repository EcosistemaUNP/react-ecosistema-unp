import TabVentana from '../lib/shared/components/TabVentana'
import VentanaUsuario from '../lib/shared/components/VentanaUsuario'

function App() {
  return (
    <>
      <VentanaUsuario>
        <TabVentana eventKey='demo' title='Demo'>
          Demo
        </TabVentana>
        <TabVentana eventKey='demo2' title='Demo 2'>
          Demo 2
        </TabVentana>
      </VentanaUsuario>
    </>
  )
}

export default App
