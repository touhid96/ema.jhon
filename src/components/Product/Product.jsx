import React from "react";
import "./Product.css";
const Product = (props) => {
  const { name, seller, img, quantity, price, ratings } = props.product;
  console.log(props.product);
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-title">
        <h6 className="product-name">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button className="btn-cart">Add to cart</button>
    </div>
  );
};

export default Product;
