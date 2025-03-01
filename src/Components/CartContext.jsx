import React, { createContext, useState, useContext, useEffect } from "react";

// Create a Context for the Cart
const CartContext = createContext();

// Custom hook to use the Cart context
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider component to provide the cart state
export const CartProvider = ({ children }) => {
  // Load cart from localStorage when the app starts
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    return savedCart || [];
  });

  // Function to add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(newCart)); // Save to localStorage
      return newCart;
    });
  };

  // Function to remove product from cart
  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((_, i) => i !== index); // Remove product by index
      localStorage.setItem("cart", JSON.stringify(newCart)); // Save to localStorage
      return newCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
