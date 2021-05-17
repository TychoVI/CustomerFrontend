import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  REMOVE_FROM_CART,
  SUB_QUANTITY,
  ADD_QUANTITY,
  EMPTY_CART,
} from '../components/actions/action-types/cart-actions'
import Checkout from './Checkout'
import CheckoutDisabled from './CheckoutDisabled'

class Cart extends Component {
  //to remove the item completely
  handleRemove = (id) => {
    this.props.REMOVE_FROM_CART(id)
  }

  //to increase the quantity
  handleAddQuantity = (id) => {
    this.props.ADD_QUANTITY(id)
  }

  handleEmptyCart = () => {
    this.props.EMPTY_CART()
  }

  //to decrease from the quantity
  handleSubtractQuantity = (id) => {
    this.props.SUB_QUANTITY(id)
  }

  render() {
    var checkoutbtn
    let addedItems = this.props.length
      ? ((checkoutbtn = <Checkout />),
        this.props.data.map((item) => {
          return (
            <li className="collection-item avatar" key={item.data.id}>
              <div className="item-img">
                <img src={item.data.img} alt={item.data.img} className="" />
              </div>
              <div className="item-desc">
                <span className="title">{item.data.title}</span>
                <h6>{item.desc}</h6>
                <br></br>
                <h6>
                  <b>Price: {item.data.price}€</b>
                </h6>
                <h6>
                  <b>Quantity: {item.data.quantity}</b>
                </h6>
                <div className="add-remove">
                  <Link to="/cart">
                    <i
                      className="material-icons"
                      onClick={() => {
                        this.handleAddQuantity(item.data.id)
                      }}
                    >
                      add_circle
                    </i>
                  </Link>
                  <Link to="/cart">
                    <i
                      className="material-icons"
                      onClick={() => {
                        this.handleSubtractQuantity(item.data.id)
                      }}
                    >
                      remove_circle
                    </i>
                  </Link>
                </div>
                <button
                  className="#039be5 light-blue darken-1 btn remove"
                  onClick={() => {
                    this.handleRemove(item.data.id)
                  }}
                >
                  Remove
                </button>
              </div>
            </li>
          )
        }))
      : ((checkoutbtn = <CheckoutDisabled />),
        (
          <div className="container center-align">
            <p>Your cart is empty!</p>
          </div>
        ))
    return (
      <div className="container">
        <div className="cart">
          <h5>Order:</h5>
          <ul className="collection">{addedItems}</ul>
        </div>
        <div>{checkoutbtn}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(REMOVE_FROM_CART(id))
    },
    addQuantity: (id) => {
      dispatch(ADD_QUANTITY(id))
    },
    subtractQuantity: (id) => {
      dispatch(SUB_QUANTITY(id))
    },
    emptyCart: (id) => {
      dispatch(EMPTY_CART())
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
