import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Cart.css'
import Items from './cart_items/Item'
import { Button } from 'reactstrap'

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
    let quantity
    if (this.props.data.length === undefined) {
      quantity = 0
    } else {
      quantity = this.props.data.length
    }
    this.props.data.map((item) => (price += item.price * item.quantity))
    return (
      <div>
        <section className="Cart">
          <label quantity={quantity}></label>
          <p className="CartHead">Cart</p>
          <div>
            <NavLink to="/">Home</NavLink>
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
          <Button outline color="success" url="/Checkout" content="Order Now">
            Place Order
          </Button>
        </section>
      </div>
    )
  }
}

export default Cart
