// CartPopup.js
import React from 'react';
import './CartPopup.css'; // Import the updated CSS file

const CartPopup = ({ isVisible, selectedProduct, quantity, totalPrice, onClose, onRemove, onCheckout }) => {
  if (!isVisible) return null;

  return (
    <div className="cart-popup-overlay">
      <div className="cart-popup">
        <button className="close-btn" onClick={onClose}>X</button>
        <div className="cart-popup-content">
          <img src={selectedProduct.image} alt={selectedProduct.name} className="popup-product-image" />
          
          {/* Table for product details */}
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
            <button className="checkout-btn" onClick={onCheckout}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
