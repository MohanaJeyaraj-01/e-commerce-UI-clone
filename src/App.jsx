import React from 'react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <ProductGrid />
    </div>
  );
};

export default App;