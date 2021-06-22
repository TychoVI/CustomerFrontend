import React, { useContext } from 'react'
import { ItemContext } from '../../App'
import CartItem from './CartItem'
import Checkout from '../CheckoutBtn/Checkout'

function Cart() {
  const [items, setItems] = useContext(ItemContext)
  const id = window.location.pathname.split("/").pop();
  return (
    <div className="container">
      <h1>{id}</h1>
          <div className="cart">
            <h5>Order:</h5>
            <ul className="collection">
              {
                items.map((item) => (
                  <CartItem data = {item} key = {item.data.id} />
                ))
              }
            </ul>
          </div>
          <div>
           <Checkout />
          </div>
       </div>
  )
}

export default Cart
