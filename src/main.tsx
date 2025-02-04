import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from '../lib/utils.ts'
import { BrowserRouter } from 'react-router'
import { BarraAccesibilidad } from '../lib/accessibility.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />

        {/* Barra de accesibilidad de MinTIC v5 convertida a React */}
        <BarraAccesibilidad />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
