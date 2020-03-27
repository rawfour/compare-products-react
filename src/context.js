import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { firestore } from './firebase';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const productCollection = firestore.collection('products');
  const documentsCollection = (doc) => {
    return { id: doc.id, ...doc.data() };
  };

  useEffect(() => {
    const subscribe = productCollection.onSnapshot((snapshot) => {
      const dataFromCollection = snapshot.docs.map(documentsCollection);
      setProducts(dataFromCollection);
    });
    return () => subscribe;
  }, []);

  const [toCompare, setCompare] = useState([]);

  const handleAddToCompare = (product) => {
    if (toCompare.length < 4) {
      setCompare([...toCompare, product]);
    }
  };

  const handleRemoveFromCompare = (id) => {
    const removedProduct = toCompare.filter((product) => product.id !== id);
    setCompare(removedProduct);
  };

  const contextValue = {
    toCompare,
    addToCompare: handleAddToCompare,
    removeFromCompare: handleRemoveFromCompare,
    data: products,
  };

  AppProvider.propTypes = {
    children: PropTypes.element.isRequired,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
