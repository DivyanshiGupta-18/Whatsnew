"use client"; 

import "./globals.css";
import { SidebarToggleProvider } from "@/app/components/SidebarToggleContext";
import React, { useState, useEffect, createContext, useContext } from 'react';


const CartContext = createContext(undefined);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      updateQuantity,
      removeFromCart,
      getCartTotal,
      getCartItemsCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showCart, setShowCart] = useState(false);

  const handleCartClose = () => setShowCart(false);

  return (
    <html lang="en">
      <body>
        <CartProvider>
          <SidebarToggleProvider>

            {showCart && (
              <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
                <div className="w-80 h-full bg-white shadow-lg p-4 overflow-y-auto">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">Your Cart</h2>
                    <button onClick={handleCartClose} className="text-red-600 text-sm">Close</button>
                  </div>
                  {/* Cart Items */}
                  <p>No items yet!</p>
                </div>
              </div>
            )}

            <div className="flex flex-col min-h-screen">
              <main className="flex-1">{children}</main>
            </div>
          </SidebarToggleProvider>
        </CartProvider>
      </body>
    </html>
  );
}
