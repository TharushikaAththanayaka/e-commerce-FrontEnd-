import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon
import '../pages/ProductsPage.css'; // Import CSS file
import tea1 from '../assests/green-tea.jpg';
import tea2 from '../assests/chamomile-mint.jpg';
import tea3 from '../assests/black-tea.jpg';
import tea4 from '../assests/detox-tea.jpg';
import tea5 from '../assests/ginger.jpg';
import tea6 from '../assests/lemmon.png';
import tea7 from '../assests/extra-strength.jpg';
import tea8 from '../assests/lemmon-levender.jpg';
import tea9 from '../assests/moringa.jpg';
import tea10 from '../assests/o-peppermint.jpg';
import tea11 from '../assests/sleepnight.jpg';
import tea12 from '../assests/white.jpg';
import tea13 from '../assests/cinnomanTea.jfif';
import tea14 from '../assests/roseTea.jfif';
import CartPopup from './CartPopup'; // Import the CartPopup component

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isCartVisible, setCartVisible] = useState(false);
  const [cartProduct, setCartProduct] = useState(null);

  

  const products = [
    { id: 1, name: 'Green Tea', price: 1700, image: tea1, description: 'Ceylon Green Tea, grown in the lush hills of Sri Lanka, is known for its delicate flavor and numerous health benefits. Made from the Camellia sinensis plant, it undergoes minimal oxidation to preserve its light, refreshing taste with subtle floral or fruity notes. The cool climate, high altitudes, and rich soil of Sri Lanka contribute to its high-quality production.Rich in antioxidants and vitamins, Ceylon Green Tea supports metabolism, heart health, and overall well-being. It also aids digestion and enhances skin and cognitive function. Prized worldwide, Ceylon Green Tea is not just a beverage but a symbol of Sri Lankas rich tea-making heritage.' },
    { id: 2, name: 'Chamomile Tea', price: 1200, image: tea2, description: 'Chamomile Tea is a calming, herbal infusion made from dried chamomile flowers, known for its relaxing properties. It has a mild, floral taste with a hint of apple and is popular for promoting sleep and reducing stress. Chamomile tea also helps with digestion, alleviates headaches and cramps, and supports overall well-being due to its anti-inflammatory and antioxidant benefits. Caffeine-free and soothing, it’s a perfect drink before bedtime or whenever you need a moment of relaxation.' },
    { id: 3, name: 'Black Tea', price: 1500, image: tea3, description: 'Black Tea is a strong, full-bodied tea that stands out for its bold, malty flavor. Made from the leaves of the Camellia sinensis plant, it undergoes full oxidation, which gives it a rich, dark color and deep flavor profile. Black Tea is typically enjoyed with or without milk, and it can be sweetened or flavored with spices, making it a versatile choice for any occasion.Black Tea is high in caffeine, offering a robust energy boost that enhances mental alertness and focus.Its also known for its numerous health benefits, including improving heart health, aiding digestion, and supporting the immune system due to its high antioxidant content. Its deep, rich flavor and invigorating properties make Black Tea a perfect choice to start the day or enjoy during an afternoon break. Whether you prefer it plain or with a touch of milk and sugar, Black Tea provides a satisfying and energizing experience.' },
    { id: 4, name: 'Detox Tea', price: 1700, image: tea4, description: 'Detox Tea is a refreshing herbal blend designed to help cleanse and rejuvenate the body. Made from a variety of natural herbs and ingredients like ginger, mint, dandelion, and lemongrass, Detox Tea promotes digestion, supports liver function, and helps flush out toxins, leaving you feeling refreshed and revitalized. The mild, herbal flavor is both soothing and invigorating, making it a perfect drink to include in your daily routine.Rich in antioxidants, Detox Tea also helps to boost metabolism, improve skin health, and promote overall well-being. It’s an excellent choice for those looking to detoxify naturally and enhance their body’s ability to maintain balance. Whether enjoyed in the morning to kickstart your day or after meals to support digestion, Detox Tea provides a gentle and natural way to reset your system.' },
    { id: 5, name: 'Ginger Tea', price: 1350, image: tea5, description: 'Ginger Tea is a warming, spicy herbal tea made from fresh ginger root, known for its numerous health benefits. The invigorating and slightly peppery flavor of ginger adds a comforting and energizing kick to the tea, making it perfect for those seeking a natural remedy for digestive issues, nausea, and inflammation. Ginger Tea is also great for boosting circulation and soothing an upset stomach.In addition to its digestive benefits, Ginger Tea is rich in antioxidants, which help support the immune system and combat free radicals. It also has anti-inflammatory properties, making it ideal for relieving muscle pain and reducing joint discomfort. Whether enjoyed hot to warm up on a chilly day or as a soothing drink for digestive relief, Ginger Tea provides a refreshing and health-boosting experience.' },
    { id: 6, name: 'Lemon Tea', price: 1550, image: tea6, description: 'Lemon Tea is a bright, zesty beverage made from freshly squeezed lemon juice and tea, offering a refreshing citrusy flavor. Known for its high vitamin C content, Lemon Tea helps boost the immune system, promotes hydration, and supports detoxification. The tartness of the lemon pairs beautifully with the mild bitterness of the tea, creating a perfectly balanced drink.Lemon Tea is also great for digestion, as it stimulates the stomach and supports a healthy metabolism. Its refreshing, tangy taste makes it an ideal choice to start your day, enjoy during an afternoon break, or sip when youre feeling under the weather. Whether served hot or cold, Lemon Tea provides a revitalizing boost, making it a favorite for tea lovers who appreciate a citrusy twist.' },
    { id: 7, name: 'Extra-Strength Tea', price: 1750, image: tea7, description: 'Extra-Strength Tea is a robust and energizing tea, designed for those who need an extra boost to kickstart their day. Packed with a powerful blend of strong tea leaves, it provides a higher caffeine content than regular teas, helping to increase alertness, focus, and mental clarity. The rich, bold flavor offers a satisfying, full-bodied experience that makes it the perfect pick-me-up for mornings or busy afternoons. In addition to its energizing properties, Extra-Strength Tea also supports metabolism and promotes overall well-being, delivering a strong, invigorating cup that ensures a powerful start to any day.' },
    { id: 8, name: 'Lemon-Lavender Tea', price: 2700, image: tea8, description: 'Lemon-Lavender Tea is a soothing and aromatic blend that combines the refreshing citrusy notes of lemon with the calming floral fragrance of lavender. Known for its relaxing properties, this tea helps to reduce stress, promote relaxation, and enhance sleep quality. The bright, zesty lemon adds a vibrant touch, while the lavender brings a gentle floral sweetness, creating a perfect balance of flavors. Ideal for unwinding after a long day or enjoying a peaceful moment, Lemon-Lavender Tea offers a calming and refreshing experience that nourishes both body and mind.' },
    { id: 9, name: 'Moringa Tea', price: 1300, image: tea9, description: 'Moringa Tea is a nutrient-packed herbal tea made from the leaves of the Moringa tree, known for its earthy flavor and numerous health benefits. Rich in vitamins, minerals, and antioxidants, Moringa Tea supports immune health, boosts energy levels, and promotes healthy skin and digestion. Its slightly bitter and earthy taste makes it a unique and refreshing beverage, perfect for those seeking a natural way to improve overall well-being. With its anti-inflammatory and detoxifying properties, Moringa Tea is an excellent choice for enhancing vitality and supporting a healthy lifestyle.' },
    { id: 10, name: 'Peppermint Tea', price: 1100, image: tea10, description: 'Peppermint Tea is a refreshing, cool herbal tea made from the leaves of the peppermint plant. Known for its invigorating minty flavor, it helps to relieve stress, ease digestive discomfort, and promote relaxation. The natural menthol in peppermint provides a soothing effect, making it ideal for alleviating headaches, indigestion, and nausea. Peppermint Tea is also rich in antioxidants, which support overall health and well-being. Whether enjoyed after a meal or as a calming evening drink, Peppermint Tea offers a refreshing and therapeutic experience.' },
    { id: 11, name: 'Sleep-Night Tea', price: 2100, image: tea11, description: 'Sleep-Night Tea is a calming herbal blend designed to promote relaxation and improve sleep quality. Made from soothing ingredients like chamomile, valerian root, and lavender, this tea helps to reduce stress, ease tension, and calm the mind, making it the perfect bedtime companion. Its gentle floral aroma and mild flavor work together to create a peaceful, tranquil experience, helping you unwind after a busy day. Caffeine-free and natural, Sleep-Night Tea offers a restful, relaxing drink that supports a good night’s sleep and overall well-being.' },
    { id: 12, name: 'White Tea', price: 1700, image: tea12, description: 'White Tea is a delicate and smooth tea made from the young leaves and buds of the Camellia sinensis plant, known for its subtle, natural sweetness and light, refreshing flavor. It undergoes minimal processing, preserving its natural antioxidants and nutrients. White Tea is rich in catechins, which support heart health, boost the immune system, and promote healthy skin. Its mild flavor and low caffeine content make it an ideal choice for those seeking a gentle, calming drink throughout the day or as a relaxing evening beverage. With its delicate taste and health benefits, White Tea offers a refined and soothing tea experience.' },
    { id: 13, name: 'Cinnamon Tea', price: 1500, image: tea13, description: 'Cinnamon Tea is a warm and aromatic beverage made from cinnamon sticks or ground cinnamon, offering a spicy yet sweet flavor. Known for its comforting taste, Cinnamon Tea also provides numerous health benefits, including improving digestion, regulating blood sugar levels, and boosting metabolism. The natural anti-inflammatory properties of cinnamon help to reduce inflammation and promote overall wellness. Whether enjoyed on a chilly day or as a soothing drink before bed, Cinnamon Tea is a perfect balance of warmth and spice, delivering both a comforting experience and health-enhancing qualities.' },
    { id: 14, name: 'Rose Tea', price: 1250, image: tea14, description: 'Rose Tea is a fragrant and floral herbal tea made from dried rose petals, known for its delicate, soothing flavor. This tea offers a gentle, aromatic experience that promotes relaxation and reduces stress. Rich in antioxidants, Rose Tea supports skin health, improves digestion, and boosts the immune system. Its mild, naturally sweet taste makes it a perfect choice for unwinding after a long day or enjoying a calming break. Rose Tea’s soothing properties, combined with its beautiful fragrance and health benefits, make it a delightful and refreshing drink for both the body and mind.' },
  ];

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(quantity + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calculateTotalPrice = () => {
    if (selectedProduct) {
      return selectedProduct.price * quantity;
    }
    return 0;
  };

  const handleAddToCart = () => {
    const totalPrice = calculateTotalPrice();
    setCartProduct({
      ...selectedProduct,
      quantity,
      totalPrice,
    });
    setCartVisible(true);
  };

  const handleRemoveFromCart = () => {
    setCartVisible(false);
    setCartProduct(null);
  };

  const handleCheckout = () => {
    // Handle checkout process (this could be a redirect or an API call)
    alert('Proceeding to checkout...');
    setCartVisible(false);
  };

  return (
    <div className="products-container">
      <h2 className="products-title">Our Products</h2>

      {/* Selected Product Details */}
      {selectedProduct && (
        <div className="selected-product-container">
          <div className="selected-product-details">
            <img src={selectedProduct.image} alt={selectedProduct.name} className="selected-product-image" />
            <div className="selected-product-info">
              <h3>{selectedProduct.name}</h3>
              <br/>
              <p>{selectedProduct.description}</p>
            </div>
          </div>
          <div className="cart-section">
            <p className="product-price">Price: LKR {calculateTotalPrice()}</p>
            <div className="quantity-selector">
              <button onClick={() => handleQuantityChange('decrease')}>-</button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange('increase')}>+</button>
            </div>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        </div>
      )}
      <br></br>
      <br></br>
      <br></br>

      {/* Product List */}
      <div className="products-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => {
              setSelectedProduct(product);
              setQuantity(1); // Reset quantity when selecting a new product
            }}
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">LKR {product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Popup */}
      <CartPopup
        isVisible={isCartVisible}
        selectedProduct={cartProduct}
        quantity={cartProduct?.quantity}
        totalPrice={cartProduct?.totalPrice}
        onClose={() => setCartVisible(false)}
        onRemove={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />

      {/* Back to Home Button */}
      <div>
        <Link to="/" className="back-button">← Back to Home</Link>
      </div>
    </div>
  );
};

export default ProductsPage;