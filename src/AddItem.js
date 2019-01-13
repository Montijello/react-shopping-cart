import React, { Component } from 'react'
import Dropdown from './Dropdown'

class AddItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item: '',
      quantity: ''
    }
  }

  inputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  formSubmit = (event) => {
    event.preventDefault()

    const selectedProduct = this.props.products.filter(product => product.id === parseInt(this.state.item)) || this.state.item

    this.props.addItem(selectedProduct[0], this.state.quantity)

    this.setState({
      item: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <label htmlFor="Quantity"> <b>Quantity</b></label>
        <input type="number" className="input" id="Quantity" name="quantity" onChange={this.inputChange} required />
        <br />
        <label htmlFor="products"> <b>Products</b> </label>
        <select className="input" id="products" name="item" placeholder="Select an option" onChange={this.inputChange}>
          <option defaultValue disabled>Choose a Product</option>
          {this.props.products.map(product => {
            return <Dropdown name={product.name} id={product.id} />
          })}
        </select>
        <br /> <br />
        <button type="submit" className="btn-primary" disabled={!this.state.item}>Add to Cart</button>
      </form>
    )
  }
}

export default AddItem