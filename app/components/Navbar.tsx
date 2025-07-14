"use client"

import React from 'react';
import { Heart, ShoppingCart, User } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-[#B6B09F] via-[#FFC6C6] to-[#41644A] custom-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white hover:text-blue-600 transition-colors duration-200 cursor-pointer">
              Whats-new
            </h1>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            {/* Wishlist Icon */}
            <button className="relative p-2 text-white hover:text-red-500 transition-colors duration-200 group">
              <Heart className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
            </button>

            {/* Add to Cart Icon */}
            <button className="relative p-2 text-white hover:text-blue-500 transition-colors duration-200 group">
              <ShoppingCart className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
            </button>

            {/* Login Icon */}
            <button className="p-2 text-white hover:text-green-500 transition-colors duration-200 group">
              <User className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;