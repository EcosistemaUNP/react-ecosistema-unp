import { Route, Routes } from 'react-router'
import { Tabs } from './pages/Tabs'

function App() {
  return (
    <Routes>
      <Route path='/demo1' Component={Tabs} />
    </Routes>
  )
}

export default App
