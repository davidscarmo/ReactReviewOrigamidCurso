import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import About from './Pages/About';
import ProductInfo from './Pages/ProductInfo';
import Products from './Pages/Products';
function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="product/:id" element={<ProductInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
