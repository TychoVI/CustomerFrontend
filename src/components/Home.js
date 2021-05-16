import React, { Component } from 'react'
import { connect } from 'react-redux'
import MenuItem from './Pages/MenuItemController'
import { addToCart } from './actions/cartActions'

class Home extends Component {
  handleClick = (id) => {
    this.props.addToCart(id)
  }

  render() {
    return (
      <div className="container">
        <div className="col s12 m2">
          <MenuItem />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
