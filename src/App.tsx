import { TabVentana, VentanaTabs } from '../lib/shared'
import { TabElementosUi } from './pages/TabElementosUi'
import { Tabla } from './pages/Tabla'
import { TablaShared } from './pages/TablaShared'
import { TabPaginador } from './pages/TabPaginador'
import { TabTarjetas } from './pages/TabTarjetas'

function App() {
  return (
    <VentanaTabs>
      <TabVentana eventKey="demo7" title={'Tarjetas'}>
        <TabTarjetas />
      </TabVentana>
      <TabVentana eventKey="demo" title={'Elementos UI'}>
        <TabElementosUi />
      </TabVentana>
      <TabVentana eventKey="demo6" title={'Tabla compartida'}>
        <TablaShared />
      </TabVentana>
      <TabVentana eventKey="demo9" title={'Tabla'}>
        <Tabla />
      </TabVentana>
      <TabVentana eventKey="demo10" title={'Paginador'}>
        <TabPaginador />
      </TabVentana>
    </VentanaTabs>
  )
}

export default App
