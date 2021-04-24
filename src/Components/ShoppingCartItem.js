import React from 'react'
import ShoppingCart from './ShoppingCart'

const ShoppingCartItem = ( {product, addToCart} ) => {
    const {name, price, description, img} = product;
    return (
        <li>
            <h3>{name}</h3>
            <p>Price: {`$${price.toFixed(2)}`}</p>
            <button onClick={() => addToCart(product)}>Add To Cart</button>
            <img src={img}/>
            <p>{description}</p>
        </li>
    )
} 

export default ShoppingCartItem;