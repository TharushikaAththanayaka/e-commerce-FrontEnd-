import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import image1 from '../assests/image1.png';
import image2 from '../assests/image2.jpg';

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate(); // Hook for navigation

  const images = [`url(${image1})`, `url(${image2})`];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="home-container" style={{ backgroundImage: images[currentImage] }}>
        <div className="caption-container">
          <h1 className="caption">Welcome to SereniTea</h1>
          <p className="description">Unwind and rejuvenate with our handpicked specialty tea blends.</p>
          <button className="explore-btn" onClick={() => navigate('/products')}>
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
