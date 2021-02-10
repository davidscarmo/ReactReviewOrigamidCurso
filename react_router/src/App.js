import React from 'react'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import Login from './Login';
import Product from './Product';
import ProductDescription from './ProductDescription';
import ProductReview from './ProductReview';
import ProductCustom from './ProductCustom';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="product/:id/*" element={<Product />}> 
            <Route path="/" element={<ProductDescription />} />
            <Route path="review" element={<ProductReview />} />
            <Route path="custom" element={<ProductCustom />} />
          </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
