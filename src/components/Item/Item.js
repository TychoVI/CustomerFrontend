import React from 'react'
import './Item.css'

import { Row, Col } from 'reactstrap'
import { Button } from 'reactstrap'

const Item = (props) => {
  return (
    <div className="cartItem">
      <Row>
        <Col xs="5" xl="5">
          <div className="image-Box">
            <img src={props.url} alt="itemPhoto" />
          </div>
        </Col>
        <Col xs="7" xl="7">
          <div className="cartItemContent">
            <p className="cartItemContentHead">{props.head}</p>
            <p className="cartItemContentContent">{props.content}</p>
            <p className="cartItemContentPrice">
              {props.price}
              <span className="cartAmount">{props.count}</span>{' '}
            </p>
            <Button
              onClick={() =>
                props.increment({
                  head: props.head,
                  counter: props.count,
                  url: props.url,
                  content: props.content,
                  price: props.price,
                })
              }
            >
              +
            </Button>
            <Button
              onClick={() =>
                props.decrement({
                  head: props.head,
                  counter: props.count,
                  url: props.url,
                  content: props.content,
                  price: props.price,
                })
              }
            >
              -
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Item
