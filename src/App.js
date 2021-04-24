import React from 'react'
import productData from './data/productData'
import ShoppingCart from './Components/ShoppingCart'
import Products from './Components/Products'
import Form from './Components/Form'
import "./App.css";


class App extends React.Component {
  state = { products: productData, cart: [] }

  addToCart = (product) => {
    this.setState({cart: [...this.state.cart, product]})
  }

  subTotal = () => {
    const { cart } = this.state
    let sum = 0;
    cart.forEach((product) => {
      sum += product.price;
    })
    return sum || 0
  }

  tax = () => {
    const { cart } = this.state
    let sum = 0;
    cart.forEach((product) => {
      sum += product.price;
    })
    return (sum / 100) * 5 || 0
  }

  total = () => {
    const { cart } = this.state
    let sum = 0;
    cart.forEach((product) => {
      sum += product.price;
    })
    return (sum / 100) * 5 + sum || 0
  }

  render() {
    const subTotal = this.subTotal()
    const tax = this.tax()
    const total = this.total()
    const { cart } = this.state
    return (
       <>
       <h1>
        My Garage Sale
       </h1>
       <ShoppingCart products={productData} cart={cart} addToCart={this.addToCart}/>
       <Products cart={cart} subTotal={subTotal} tax={tax}/>
       <Form total={total}/>
       </>
    )
  }
};

export default App;
