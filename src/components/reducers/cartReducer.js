import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'

import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
} from '../actions/action-types/cart-actions'

const initState = {
  items: [
    {
      id: 1,
      title: '',
      desc: 'Beef burger with tomato and lettuce (Served with fries)',
      price: 20,
      img: Item1,
    },
    {
      id: 2,
      title: '',
      desc: 'Our new vegan burger will blow your mind (Served with fries)',
      price: 15,
      img: Item2,
    },
    {
      id: 3,
      title: '',
      desc: 'Pizza Margheritta with tomato sauce and mozzarela cheese.',
      price: 18,
      img: Item3,
    },
  ],
  addedItems: [],
  total: 0,
}
const cartReducer = (state = initState, action) => {
  //Home Component
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id)

    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find((item) => action.id === item.id)
    if (existed_item) {
      addedItem.quantity += 1
      return {
        ...state,
        total: state.total + addedItem.price,
      }
    } else {
      addedItem.quantity = 1
      //calculating the total
      let newTotal = state.total + addedItem.price

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      }
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id)
    let new_items = state.addedItems.filter((item) => action.id !== item.id)

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity
    console.log(itemToRemove)
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    }
  }

  //CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id)
    addedItem.quantity += 1
    let newTotal = state.total + addedItem.price
    return {
      ...state,
      total: newTotal,
    }
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id)

    //if the quantity == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id)
      let newTotal = state.total - addedItem.price
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      }
    } else {
      addedItem.quantity -= 1
      let newTotal = state.total - addedItem.price
      return {
        ...state,
        total: newTotal,
      }
    }
  } else {
    return state
  }
}

export default cartReducer
