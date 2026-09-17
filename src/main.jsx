import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Car from './Car.jsx'
import Car2 from './Car2.jsx'
let details={name:"Benelli",model:"600i",year:2005}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Car color="Golden"/>
    <Car2 name={details.name} model={details.model} year={details.year} >
      It's Flying Golden Eagle!
    </Car2>
  </StrictMode>,
)
