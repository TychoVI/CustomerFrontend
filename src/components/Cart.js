import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from './actions/cartActions'
import Checkout from './Checkout'
import CheckoutDisabled from './CheckoutDisabled'

class Cart extends Component {
  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id)
  }

  //to increase the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id)
  }

  //to decrease from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id)
  }

  render() {
    var checkoutbtn
    let addedItems = this.props.items.length
      ? ((checkoutbtn = <Checkout />),
        this.props.items.map((item) => {
          return (
            <li className="collection-item avatar" key={item.id}>
              <div className="item-img">
                <img src={item.img} alt={item.img} className="" />
              </div>
              <div className="item-desc">
                <span className="title">{item.title}</span>
                <h6>{item.desc}</h6>
                <br></br>
                <h6>
                  <b>Price: {item.price}€</b>
                </h6>
                <h6>
                  <b>Quantity: {item.quantity}</b>
                </h6>
                <div className="add-remove">
                  <Link to="/cart">
                    <i
                      className="material-icons"
                      onClick={() => {
                        this.handleAddQuantity(item.id)
                      }}
                    >
                      add_circle
                    </i>
                  </Link>
                  <Link to="/cart">
                    <i
                      className="material-icons"
                      onClick={() => {
                        this.handleSubtractQuantity(item.id)
                      }}
                    >
                      remove_circle
                    </i>
                  </Link>
                </div>
                <button
                  className="#039be5 light-blue darken-1 btn remove"
                  onClick={() => {
                    this.handleRemove(item.id)
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
      dispatch(removeItem(id))
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id))
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
