import React, { useContext } from 'react'
import Badge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { ItemContext } from '../../App'

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge)

export default function CustomizedBadges() {
  const [items] = useContext(ItemContext)

  function CountCart() {
    let total = 0
    items.map((item) => total++)
    return total
  }
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={CountCart()} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  )
}
