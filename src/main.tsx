import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.scss'
import App from './App.tsx'
import { CustomChakraProvider } from './providers/CustomChakraProvider.tsx'
import { BrowserRouter as Router } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomChakraProvider>
      <Router>
        <App />
      </Router>
    </CustomChakraProvider>
  </StrictMode>
)
