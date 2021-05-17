import React, { Component } from 'react'
import { connect } from 'react-redux'

class Checkout extends Component {
  render() {
    return (
      <div className="container">
        <div className="collection">
          <li className="collection-item">
            <b>Total: {this.props.total} €</b>
          </li>
        </div>
        <div className="checkout">
          <button className="#01579b light-blue darken-3 waves-effect waves-green waves-light btn disabled">
            Checkout
            <i className="material-icons right">check_circle</i>
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total,
  }
}

export default connect(mapStateToProps)(Checkout)
