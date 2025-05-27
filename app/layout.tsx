"use client"; 

import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <CartProvider>
          <SidebarToggleProvider>
            <Navbar
              onSearch={() => console.log('Search triggered from layout')}
              onCartClick={() => console.log('Cart clicked from layout')}
              onProfileClick={() => console.log('Profile clicked from layout')}
            />
            <div className="flex flex-col min-h-screen">
              <main className="flex-1">
                {children}
              </main>
            </div>
            <Footer />
          </SidebarToggleProvider>
        </CartProvider>
      </body>
    </html>
  );
}