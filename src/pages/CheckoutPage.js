import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./CheckoutPage.css";
import visaLogo from "../assests/visa.png"; // Ensure the path is correct
import masterLogo from "../assests/master.png";
import amexLogo from "../assests/amex.png";

const CheckoutPage = ({ onRemove, onProceedToPayment }) => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || []; // Get cart items from navigation state

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Card selection state
  const [selectedCard, setSelectedCard] = useState("Visa");

  const handleCardChange = (event) => {
    setSelectedCard(event.target.value);
  };

  // Handle form submission
  const handlePayment = (event) => {
    event.preventDefault(); // Prevents form submission from reloading the page
    if (onProceedToPayment) {
      onProceedToPayment();
    }
  };

  return (
    <div className="checkout-container">
      {/* Payment Form */}
      <div className="payment-form">
        <h2>Payment Details</h2>
        <form onSubmit={handlePayment}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="abc@gmail.com" required />
          </div>
          <div className="form-group">
            <label>Street</label>
            <input type="text" placeholder="No 7" required />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" placeholder="Colombo" required />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input type="text" placeholder="Sri Lanka" required />
          </div>
          <div className="form-group">
            <label>Postal Code</label>
            <input type="text" placeholder="91500" required />
          </div>

          {/* Card Type Selection */}
          <div className="form-group card-selection">
            <label>Card Type</label>
            <div className="card-options">
              <label>
                <input
                  type="radio"
                  name="cardType"
                  value="Visa"
                  checked={selectedCard === "Visa"}
                  onChange={handleCardChange}
                />
                <img src={visaLogo} alt="Visa" />
              </label>
              <label>
                <input
                  type="radio"
                  name="cardType"
                  value="MasterCard"
                  checked={selectedCard === "MasterCard"}
                  onChange={handleCardChange}
                />
                <img src={masterLogo} alt="MasterCard" />
              </label>
              <label>
                <input
                  type="radio"
                  name="cardType"
                  value="Amex"
                  checked={selectedCard === "Amex"}
                  onChange={handleCardChange}
                />
                <img src={amexLogo} alt="American Express" />
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Card Number</label>
            <input type="text" placeholder="1234 5678 9012 3456" required />
          </div>
          <div className="form-group">
            <label>Expiration Date</label>
            <input type="text" placeholder="MM/YY" required />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input type="text" placeholder="123" required />
          </div>
          <button className="pay-button" type="submit">
            Pay Now
          </button>
        </form>
      </div>

      {/* Cart Items */}
      <div className="cart-items">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item-details">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-text">
                      <h3>{item.name}</h3>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: LKR {item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <button
                    className="remove-button"
                    onClick={() => onRemove && onRemove(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="total-price">Total: LKR {totalPrice.toFixed(2)}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
