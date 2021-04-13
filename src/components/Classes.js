import React, { Component } from 'react'
import Cart from './Cart/Cart'
import { Route } from 'react-router-dom'
import axios from 'axios'

class allClass extends Component {
  state = {
    item: [],
    data: [],
    loaded: false,
  }
  componentDidMount() {
    axios
      .get('https://twobrother0927.firebaseio.com/.json')
      .then((data) => {
        this.setState({ data: data.data, loaded: true })
      })
      .catch((err) => console.log('Some Error'))
  }
  removeItem = (obj) => {
    var copy = [...this.state.item]
    var check = false
    let item_position = -1
    copy.forEach((element) => {
      if (element.head === obj.head && element.counter >= 1) {
        element.counter = element.counter - 1
        check = true
      }
      item_position += 1
    })
    if (check) {
      if (copy[item_position].counter === 0) {
        copy = copy
          .slice(0, item_position)
          .concat(copy.slice(item_position + 1))
      }
    }
    this.setState({ item: copy })
  }

  render() {
    const ddt = this.state.loaded ? (
      <div>
        <Route
          path="/cart"
          component={() => (
            <Cart
              adding={() => this.addItem}
              remove={() => this.removeItem}
              data={this.state.item}
            />
          )}
        />
      </div>
    ) : null
    return ddt
  }
}

export default allClass
