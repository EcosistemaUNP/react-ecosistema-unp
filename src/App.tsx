import { Route, Routes } from 'react-router-dom'
import { Ventana } from './pages/Ventana'
import { Tabs } from './pages/Tabs'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Ventana />} />
      <Route path='/tabs' element={<Tabs />} />
    </Routes>
  )
}

export default App
