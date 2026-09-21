import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LifeCycleDemo from './LifeCycleDemo.jsx'
import StatePractice from './StatePractice.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LifeCycleDemo />
    <StatePractice />
  </StrictMode>,
)
