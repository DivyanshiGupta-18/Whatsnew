"use client";

import "./globals.css";
import { SidebarToggleProvider } from "@/app/components/SidebarToggleContext";
import { CartProvider } from "@/app/components/CartContext";
import React, { useState } from "react";

export default function Rootlayout({ children }: { children: React.ReactNode }) {
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
                    <button
                      onClick={handleCartClose}
                      className="text-red-600 text-sm"
                    >
                      Close
                    </button>
                  </div>
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
