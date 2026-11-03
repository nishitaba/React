import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CustomHooks from './CustomHooks.jsx'
import UseMemo from './UseMemo.jsx'
import MemoHoc from './MemoHoc.jsx'
import UseCallback from './UseCallback.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomHooks /><br/><br/>
    <UseMemo /><br/><br/>
    <MemoHoc /><br/><br/>
    <UseCallback/><br/><br/>
  </StrictMode>,
)
