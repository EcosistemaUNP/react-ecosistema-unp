import { TabVentana, VentanaTabs } from '../lib/shared'
import { TabElementosModal } from './pages/TabElementosModal'
import { TabElementosUi } from './pages/TabElementosUi'
import { Tabla } from './pages/Tabla'
import { TablaShared } from './pages/TablaShared'
import { TabLectura } from './pages/TabLectura'
import { TabPaginador } from './pages/TabPaginador'
import { TabTarjetas } from './pages/TabTarjetas'

function App() {
  return (
    <VentanaTabs>
      <TabVentana eventKey="ui" title={'Elementos UI'}>
        <TabElementosUi />
      </TabVentana>
      <TabVentana eventKey="modal" title={'Elementos modal'}>
        <TabElementosModal />
      </TabVentana>
      <TabVentana eventKey="lectura" title={'Tarjeta lectura'}>
        <TabLectura />
      </TabVentana>
      <TabVentana eventKey="tarjetas" title={'Tarjetas'}>
        <TabTarjetas />
      </TabVentana>
      <TabVentana eventKey="shared" title={'Tabla compartida'}>
        <TablaShared />
      </TabVentana>
      <TabVentana eventKey="table" title={'Tabla'}>
        <Tabla />
      </TabVentana>
      <TabVentana eventKey="stepper" title={'Paginador'}>
        <TabPaginador />
      </TabVentana>
    </VentanaTabs>
  )
}

export default App
