import { Route, Routes } from 'react-router'
import { Tabs } from './pages/Tabs'

function App() {
  return (
    <Routes>
      <Route path='*' Component={Tabs} />
    </Routes>
  )
}

export default App
