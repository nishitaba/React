import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App2 from './App2.jsx'
import CounterRedu from './CounterRedu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <App2 />
    <CounterRedu/>
  </StrictMode>,
)
