import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";
const Product = (props) => {
  const { name, seller, img, quantity, price, ratings } = props.product;
  const handleAddtoCart = props.handleAddtoCart;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-title">
        <h6 className="product-name">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button onClick={() => handleAddtoCart(props.product)} className="btn-cart">
        Add to cart
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
