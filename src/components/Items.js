import React from 'react'
import Item from './Item/Item'
import { Container } from 'reactstrap'
const Items = (props) => {
  return (
    <div className="Items">
      <Container>
        {props.data.map((item) => {
          return (
            <Item
              key={item.head}
              decrement={props.remove}
              increment={props.adding}
              head={item.head}
              quantity={item.quantity}
              price={item.price}
              url={item.url}
              content={item.content}
            />
          )
        })}
      </Container>
    </div>
  )
}

export default Items
