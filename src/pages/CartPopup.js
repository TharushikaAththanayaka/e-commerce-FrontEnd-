import React from "react";
import { useNavigate } from "react-router-dom";
import "./CartPopup.css";

const CartPopup = ({ isVisible, selectedProduct, quantity, totalPrice, onClose, onRemove }) => {
  const navigate = useNavigate();

  if (!isVisible) return null;

  // Navigate to checkout page with cart data
  const handleCheckout = () => {
    navigate("/checkout", {
      state: { cartItems: [{ ...selectedProduct, quantity }] }, // Pass cart items via state
    });
  };

  return (
    <div className="cart-popup-overlay">
      <div className="cart-popup">
        <button className="close-btn" onClick={onClose}>X</button>
        <div className="cart-popup-content">
          <img src={selectedProduct.image} alt={selectedProduct.name} className="popup-product-image" />
          
          <table className="product-details-table">
            <tbody>
              <tr>
                <th>Product Name</th>
                <td>{selectedProduct.name}</td>
              </tr>  
              <tr>
                <th>Quantity</th>
                <td>{quantity}</td>
              </tr>
              <tr>
                <th>Total Price</th>
                <td>LKR {totalPrice}</td>
              </tr>
            </tbody>
          </table>

          <div>
            <button className="remove-btn" onClick={onRemove}>Remove</button>
            <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
