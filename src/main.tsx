import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CustomChakraProvider } from './providers/CustomChakraProvider.tsx'
import { BrowserRouter as Router } from 'react-router'
import { Toaster } from './components/ui/toaster.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomChakraProvider>
      <Router>
        <Toaster />
        <App />
      </Router>
    </CustomChakraProvider>
  </StrictMode>
)
