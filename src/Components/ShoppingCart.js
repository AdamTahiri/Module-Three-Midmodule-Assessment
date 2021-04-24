import React from 'react'
import ShoppingCartItem from './ShoppingCartItem'
import "./ShoppingCart.css"

const ShoppingCart = ( {products, cart, addToCart} ) => {
    return (
        <ul className="Products">
            {products.map((product) => {
                return <ShoppingCartItem key={product.id} product={product} cart={cart} addToCart={addToCart}/>
            })}
        </ul>
    )
}

export default ShoppingCart;