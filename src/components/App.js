import React from 'react';
import { AppProvider } from '../context';
import './App.sass';
import ProductsList from './ProductsList';
import Compare from './Compare';

const App = () => {
  return (
    <AppProvider>
      <div className="product-list-page container mt-5">
        <h1>React comapre products</h1>
        <ProductsList />
        <Compare />
      </div>
    </AppProvider>
  );
};

export default App;
