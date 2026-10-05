import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Button from './Button.jsx'
import Card from './Card.jsx'
// import Form from './Form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card><h2>Welcome</h2>
      <p>This content is inside card component</p>
    </Card>
    <Button text="submit" color="blue" onClick={()=>alert("submit button clicked")}></Button>
    <Button text="ok" color="green" onClick={()=>alert("ok button clicked")}></Button>
    <Button text="cancel" color="red" onClick={()=>alert("cancel button clicked")}></Button>
    {/* <Form/> */}
  </StrictMode>,
)
