import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from './Material-ui/ShoppingCartIcon'

const Navbar = () => {
  const id = window.location.pathname.split('/').pop()
  return (
    <nav className="#01579b light-blue darken-4 nav-wrapper">
      <div className="container">
        <Link to={`/${id}`} className="brand-logo">
          Menu
        </Link>
        <ul className="right">
          <li>
            <Link to={`/cart/${id}`}>
              <CartIcon />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
