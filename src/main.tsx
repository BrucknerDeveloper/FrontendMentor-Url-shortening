import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import {BrowserRouter as Router} from "react-router-dom"

//Context
import {ContextProvider} from "./context/context"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>
)
