import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Counter from './views/Counter'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Counter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
