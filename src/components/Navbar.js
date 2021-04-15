import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="#01579b light-blue darken-4 nav-wrapper">
      <div className="container">
        <Link to="/" className="brand-logo">
          Menu
        </Link>
        <ul className="right">
          <li>
            <Link to="/cart">
              <i className="material-icons">shopping_cart</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
