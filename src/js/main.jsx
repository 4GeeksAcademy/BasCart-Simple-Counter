import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

setInterval(() =>{
  ReactDOM.createRoot(document.getElementById('root')).render(
    <div>
      <Home/>
    </div>,
  )
  },1000
)
