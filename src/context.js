import React from 'react';
import PropTypes from 'prop-types';

const data = [
  {
    id: 1,
    name: 'Maliny',
    img: '/img/image01.jpg',
    description: 'Zwykłe maliny',
    price: '2.49',
    colors: ['orange', 'black'],
    fresh: false,
  },
  {
    id: 2,
    name: 'Kiwi',
    img: '/img/image02.jpg',
    description: 'Zwykłe kiwi',
    price: '3.29',
    colors: ['yellow', 'green', 'red'],
    fresh: true,
  },
  {
    id: 3,
    name: 'Cebula',
    img: '/img/image03.jpg',
    description: 'Zwykła cebula',
    price: '4.19',
    colors: ['red', 'blue'],
    fresh: false,
  },
  {
    id: 4,
    name: 'Banany',
    img: '/img/image04.jpg',
    description: 'Zwykłe banany',
    price: '5.34',
    colors: ['yellow', 'green', 'red'],
    fresh: true,
  },
  {
    id: 5,
    name: 'Bakłażany',
    img: '/img/image05.jpg',
    description: 'Zwykłe bakłażany',
    price: '6.39',
    colors: ['red', 'black'],
    fresh: false,
  },
  {
    id: 6,
    name: 'Kokos',
    img: '/img/image06.jpg',
    description: 'Zwykłe kokosy',
    price: '4.19',
    colors: ['red', 'yellow', 'orange'],
    fresh: true,
  },
  {
    id: 7,
    name: 'Papryka',
    img: '/img/image07.jpg',
    description: 'Zwykła papryka',
    price: '2.24',
    colors: ['green', 'blue'],
    fresh: false,
  },
  {
    id: 8,
    name: 'Ananas',
    img: '/img/image08.jpg',
    description: 'Zwykły ananas',
    price: '3.55',
    colors: ['green', 'orange'],
    fresh: true,
  },
  {
    id: 9,
    name: 'Ziemniaki',
    img: '/img/image09.jpg',
    description: 'Zwykłe ziemniaki',
    price: '1.74',
    colors: ['black', 'blue'],
    fresh: false,
  },
];

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [toCompare, setCompare] = React.useState([]);

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
    data,
  };

  AppProvider.propTypes = {
    children: PropTypes.element.isRequired,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
