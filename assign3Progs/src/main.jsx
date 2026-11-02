import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CustomHooks from './CustomHooks.jsx'
import UseMemo from './UseMemo.jsx'
import MemoHoc from './MemoHoc.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomHooks />
    <UseMemo />
    <MemoHoc />
  </StrictMode>,
)
