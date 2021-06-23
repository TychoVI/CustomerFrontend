import React, { useContext } from 'react'
import { ItemContext } from '../../App'
import axios from 'axios'
import Swal from 'sweetalert2'

function Checkout() {
  const [items] = useContext(ItemContext)
  const id = window.location.pathname.split('/').pop()
  function TotalPrice() {
    let totalPrice = 0
    items.map((item) => (totalPrice += item.data.price))

    return totalPrice
  }

  function SubmitOrder() {
    var order = {
      price: TotalPrice(),
      status: 'pending',
      items: [],
    }

    items.map((item) => console.log(item))

    items.map((item) =>
      order.items.push({
        menuItem: item.data.id,
        amount: 1,
      }),
    )

    axios
      .post(window.globalConfig.API_URL + '/Order/Order', {
        order: order,
        sessionId: id,
      })
      .then((res) => {
        Swal.fire('Success!', 'Your order has been placed!', 'success')
        setTimeout(function () {
          window.location.replace('https://menu.tycho.dev/')
        }, 5000)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="container">
      <div className="collection">
        <li className="collection-item">
          <b>Total: {parseFloat(TotalPrice()).toFixed(2)} €</b>
        </li>
      </div>
      <div className="checkout">
        <button
          onClick={SubmitOrder}
          className="#01579b light-blue darken-3 waves-effect waves-green waves-light btn"
        >
          Checkout
          <i className="material-icons right">check_circle</i>
        </button>
      </div>
    </div>
  )
}

export default Checkout
