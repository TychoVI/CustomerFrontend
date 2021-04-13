import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Cart.css'
import Items from '../components/Item/Item'

class Cart extends Component {
  state = {
    price: 0,
    items: {},
  }
  addCartHandler(obj) {
    var copy = this.state.items
    this.setState({ items: { ...copy } })
  }
  render() {
    let price = 0
    let count
    if (this.props.data.length === undefined) {
      count = 0
    } else {
      count = this.props.data.length
    }
    this.props.data.map((item) => (price += item.price * item.quantity))
    return (
      <div>
        <section className="Cart">
          <label count={count}></label>
          <p className="CartHead">Cart</p>
          <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/order">Cart</NavLink>
          </div>
        </section>
        <section>
          <Items
            remove={this.props.remove()}
            data={this.props.data}
            adding={this.props.adding()}
          />
        </section>
        <section className="cartTotal">
          <p>Total Price : {price} €</p>
          <button url="/Checkout" content="Order Now">
            Place Order
          </button>
        </section>
      </div>
    )
  }
}

export default Cart
