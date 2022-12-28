import React from 'react'
import ReactDOM from 'react-dom/client'

import { PokeProvider } from './contexts/pokemon-context/pokemon-context'
import App from './App'

import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <PokeProvider>
    <App />
  </PokeProvider>
  // </React.StrictMode>,
)
