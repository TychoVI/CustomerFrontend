import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  REMOVE_FROM_CART,
  SUB_QUANTITY,
  ADD_QUANTITY,
  EMPTY_CART,
} from '../components/actions/action-types/cart-actions'

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
    return (
      <div className="container">
        <div className="cart">
          <h5>Order:</h5>
          <ul className="collection"></ul>
        </div>
        <div></div>
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
