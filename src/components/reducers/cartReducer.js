import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SUB_QUANTITY,
  ADD_QUANTITY,
  EMPTY_CART,
} from '../actions/action-types/cart-actions'

const initialState = {
  items: [],
}
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, selected: true } : item,
        ),
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id
            ? { ...item, selected: false, quantity: 1 }
            : item,
        ),
      }
    case ADD_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      }
    case SUB_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id
            ? {
                ...item,
                quantity: item.quantity !== 1 ? item.quantity - 1 : 1,
              }
            : item,
        ),
      }
    case EMPTY_CART:
      return {
        ...state,
        items: state.items.map((item) =>
          item.selected ? { ...item, selected: false, quantity: 1 } : item,
        ),
      }
    default:
      return state
  }
}
export default cartReducer
