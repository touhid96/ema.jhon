import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  let total = 0;
  let totalShiping = 0;
  for (const product of cart) {
    total = total + product.price;
    totalShiping = totalShiping + product.shipping;
  }
  const tax = (total * 7) / 100;
  const grandTotal = total + tax + totalShiping;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Item: {cart.length}</p>
      <p>Total Price:{total}</p>
      <p>Total Shoping:{totalShiping}</p>
      <p>Tax:{tax}</p>
      <h6>Grand Total:{grandTotal}</h6>
    </div>
  );
};

export default Cart;
