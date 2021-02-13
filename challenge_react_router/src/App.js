import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Pages/About';
import ProductInfo from './Pages/ProductInfo';
import Products from './Pages/Products';

import './Components/Animation.css';
function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="product/:id" element={<ProductInfo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
