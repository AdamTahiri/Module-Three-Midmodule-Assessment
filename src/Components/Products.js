import React from "react";

const Products = ({ cart, subTotal, tax }) => {
    const total = subTotal + tax;
  return (
    <section>
      <h2>Cart</h2>
      <ul>
        {cart.map((product) => {
          const { name, price, id } = product;
          return (
            <li key={id}>
              {name}: {`$${price.toFixed(2)}`}
            </li>
          );
        })}
      </ul>
      <h3>Subtotal: {`$${subTotal.toFixed(2)}`}</h3>
      <h3>Tax: {`$${tax.toFixed(2)}`}</h3>
      <h3>Total: {`$${total.toFixed(2)}`}</h3>
    </section>
  );
};

export default Products;
