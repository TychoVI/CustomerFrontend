import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart/Cart'

//context
export const ItemContext = React.createContext()

function App() {
  const [items, setItems] = useState([])

  return (
    <ItemContext.Provider value={[items, setItems]}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/:id" component={Home} />
            <Route path="/cart/:id" component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>
    </ItemContext.Provider>
  )
}

export default App
