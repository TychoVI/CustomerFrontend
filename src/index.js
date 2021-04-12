import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Counter from './views/Counter'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Counter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)