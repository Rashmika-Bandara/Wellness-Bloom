import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// New import
import reactDOM from "react-dom/client"
import { BrowserRouter } from 'react-router-dom'  


//Initially was only create root but I added new part
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Newly add part */}
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </StrictMode>,
)
