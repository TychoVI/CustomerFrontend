import React, { Component } from 'react'
import Products from './Products'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 1,
    }
  }
  increament = () => {
    this.setState({ count: this.state.count + 1 })
  }
  decreament = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 })
    }
  }

  render() {
    return (
      <div className="app">
        <Products />

        <button onClick={this.increament} className="counter">
          +
        </button>
        <button onClick={this.decreament} className="counter">
          -
        </button>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}

export default Counter
