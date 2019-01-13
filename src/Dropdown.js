import React from 'react'

const Dropdown = ({name, id}) => {
  return (
    <option name='name' value={id}>{name}</option>
  )
}

export default Dropdown