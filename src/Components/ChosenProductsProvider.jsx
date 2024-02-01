/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';

const ChosenProductsContext = createContext([]);

export const ChosenProductsProvider = ({ children }) => {
  const [chosenProducts, setChosenProducts] = useState(() => {
    const storedProducts = localStorage.getItem('chosenProducts');
    return storedProducts ? new Map(JSON.parse(storedProducts)) : new Map();
  });

  const addChosenProduct = (product) => {
    const updatedProductsMap = new Map(chosenProducts);

    if (updatedProductsMap.has(product.title)) {
      const existingProduct = updatedProductsMap.get(product.title);
      existingProduct.quantity += 1;
      existingProduct.price += product.price;
    } else {
      updatedProductsMap.set(product.title, {
        ...product,
        quantity: 1,
        originalPrice: product.price,
      });
    }

    setChosenProducts(updatedProductsMap);
  };

  // Save chosenProducts to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('chosenProducts', JSON.stringify(Array.from(chosenProducts)));
  }, [chosenProducts]);

  return (
    <ChosenProductsContext.Provider value={{ chosenProducts, addChosenProduct, setChosenProducts }}>
      {children}
    </ChosenProductsContext.Provider>
  );
};

export const useChosenProducts = () => {
  const context = useContext(ChosenProductsContext);
  if (!context) {
    throw new Error('useChosenProducts must be used within a ChosenProductsProvider');
  }
  return context;
};
