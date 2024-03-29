import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const getLocalData = getShoppingCart();
    const savedCart = [];

    for (const id in getLocalData) {
      const savedProducts = products.find((product) => product.id === id);

      if (savedProducts) {
        const quantity = getLocalData[id];
        savedProducts.quantity = quantity;
        savedCart.push(savedProducts);
      }

      console.log(savedProducts);
    }
    setCart(savedCart);
  }, [products]);
  const handleAddtoCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product product={product} key={product.id} handleAddtoCart={handleAddtoCart}></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
