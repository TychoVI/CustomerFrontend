import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Counter from './views/Counter'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Counter />
  </React.StrictMode>,
  document.getElementById('root'),
)
