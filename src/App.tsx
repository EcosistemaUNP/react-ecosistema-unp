import { Route, Routes } from 'react-router-dom'
import { Ventana } from './pages/Ventana'
import { Tabs } from './pages/Tabs'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Tabs />} />
      <Route path='/1' element={<Ventana />} />
    </Routes>
  )
}

export default App
