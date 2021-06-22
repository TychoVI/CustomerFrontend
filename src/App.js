import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart/Cart'

//context
export const ItemContext = React.createContext()

function App() {

  const [items, setItems] = useState([])

  return (
    <ItemContext.Provider value = {[items, setItems]}>
      <Router>
         <div className="App">
           <Navbar />
           <Switch>
             <Route exact path="/:id" component={Home} />
            <Route path="/cart/:id" component={Cart} />
         </Switch>
         </div>
       </Router>
    </ItemContext.Provider>
  )
}

export default App

