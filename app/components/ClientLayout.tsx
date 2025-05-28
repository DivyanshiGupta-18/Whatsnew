"use client";

import React, { useState } from "react";
import { useCart } from "@/app/components/CartContext";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [showCart, setShowCart] = useState(false);
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  const handleCartClose = () => setShowCart(false);
  const handleCartOpen = () => setShowCart(true);

  return (
    <>
      {showCart && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
          <div className="w-80 h-full bg-white shadow-lg p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Your Cart</h2>
              <button
                onClick={handleCartClose}
                className="text-red-600 text-sm hover:text-red-800"
              >
                Close
              </button>
            </div>
            
            {cartItems.length === 0 ? (
              <p className="text-gray-500">No items yet!</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center p-2 border-b">
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">${item.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="px-2 py-1 bg-red-500 text-white rounded text-xs"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center font-bold">
                    <span>Total: ${getCartTotal().toFixed(2)}</span>
                  </div>
                  <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="flex flex-col min-h-screen">
        <main className="flex-1">{children}</main>
        
        <button
          onClick={handleCartOpen}
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 z-40"
        >
          🛒 ({cartItems.reduce((total, item) => total + item.quantity, 0)})
        </button>
      </div>
    </>
  );
}