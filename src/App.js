import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AllProductsPage from './pages/AllProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import RegisterPage from './pages/RegisterPage';

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<AllProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
