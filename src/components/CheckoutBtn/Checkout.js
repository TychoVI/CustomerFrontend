import React, { useContext } from 'react'
import { ItemContext } from '../../App'

function Checkout() {

  const [items, setItems] = useContext(ItemContext)

  function TotalPrice()
  {
    let totalPrice = 0;
    items.map((item) => (
      totalPrice += item.data.price
    ))
    
    return totalPrice;
  }

  
  return (
    <div className="container">
         <div className="collection">
           <li className="collection-item">
             <b>Total: {parseFloat(TotalPrice()).toFixed(2)} €</b>
           </li>
         </div>
         <div className="checkout">
           <button className="#01579b light-blue darken-3 waves-effect waves-green waves-light btn">
             Checkout
             <i className="material-icons right">check_circle</i>
           </button>
         </div>
       </div>
  )
}

export default Checkout