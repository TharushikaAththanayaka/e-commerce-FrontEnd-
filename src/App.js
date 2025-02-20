import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import CheckoutPage from "./pages/CheckoutPage"; // Import CheckoutPage
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<CheckoutPage />} /> 
        <Route path="/cart" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
