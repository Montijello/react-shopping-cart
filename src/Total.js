import React from 'react'

const Total = ({items}) => {
  const total = items.reduce((total, item) => total + (item.product.priceInCents * item.quantity), 0)

  return (
    <p> <b>Total Price: </b> ${total/100}</p>
  )

}

export default Total