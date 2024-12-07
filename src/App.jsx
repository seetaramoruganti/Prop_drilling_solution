import { useState } from "react";

import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import { useContext } from "react";
import CartContext from "./store/cart-context.jsx";
import Product from "./components/Product.jsx";

function App() {
  return (
    <CartContext>
      <Header />
      <Shop>
        <ul id="products">
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
        </ul>
      </Shop>
    </CartContext>
  );
}

export default App;
