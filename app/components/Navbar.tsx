"use client"

import React from 'react';
import { Heart, ShoppingCart, User } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
              Whats-new
            </h1>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            {/* Wishlist Icon */}
            <button className="relative p-2 text-gray-600 hover:text-red-500 transition-colors duration-200 group">
              <Heart className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
              {/* <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span> */}
            </button>

            {/* Add to Cart Icon */}
            <button className="relative p-2 text-gray-600 hover:text-blue-500 transition-colors duration-200 group">
              <ShoppingCart className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
              {/* <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2 
              </span> */}
            </button>

            {/* Login Icon */}
            <button className="p-2 text-gray-600 hover:text-green-500 transition-colors duration-200 group">
              <User className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;