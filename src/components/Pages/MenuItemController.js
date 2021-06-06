import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Items from './Items'

function MenuItem() {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios
      .get(window.globalConfig.API_URL + '/Menu/MenuItems')
      .then((res) => {
        console.log(res)
        setItems(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      {items.map((item) => (
        <Items data={item} key={item.id} />
      ))}
    </div>
  )
}

export default MenuItem
