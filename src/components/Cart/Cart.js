import React, { useContext } from 'react'
import { ItemContext } from '../../App'
import CartItem from './CartItem'
import Checkout from '../CheckoutBtn/Checkout'
import CheckoutDisabled from '../CheckoutBtn/CheckoutDisabled'

function Cart() {
  const [items] = useContext(ItemContext)

  //item one id
  const item1 = items.filter(
    (item) => item.data.id === '3c0d3e6f-040d-4efc-a36d-973277f014e4',
  )
  const item1Count = item1.length
  //item two id
  const item2 = items.filter(
    (item) => item.data.id === '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  )
  const item2Count = item2.length
  //item three id
  const item3 = items.filter(
    (item) => item.data.id === '5c01818d-846d-4921-be6b-f1cb7e4b7037',
  )
  const item3Count = item3.length

  var item = items.length > 0 ? <Checkout /> : <CheckoutDisabled />

  const renderItem1 = () => {
    if (item1Count > 0) {
      return <CartItem data={item1[0]} quantity={item1Count} />
    }
  }

  const renderItem2 = () => {
    if (item2Count > 0) {
      return <CartItem data={item2[0]} quantity={item2Count} />
    }
  }

  const renderItem3 = () => {
    if (item3Count > 0) {
      return <CartItem data={item3[0]} quantity={item3Count} />
    }
  }

  return (
    <div className="container">
      <div className="cart">
        <h5>Order:</h5>
        <ul className="collection">
          {renderItem1()}
          {renderItem2()}
          {renderItem3()}
        </ul>
      </div>
      <div>{item}</div>
    </div>
  )
}

export default Cart
