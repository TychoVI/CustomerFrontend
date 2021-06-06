import React, { Component } from 'react'
import { connect } from 'react-redux'
import MenuItem from './Pages/MenuItemController'


class Home extends Component {


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

export default connect(mapStateToProps)(Home)
