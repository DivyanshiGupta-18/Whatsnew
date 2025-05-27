"use client";

import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, Store } from 'lucide-react';
import { useCart } from '../page'; 

const Navbar = ({ onSearch, cartItemsCount, onCartClick, onProfileClick, onToggleSidebar }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      onSearch(searchTerm);
    }
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={onToggleSidebar}
            className="p-2 mr-2 md:hidden hover:bg-blue-700 rounded-lg transition-colors"
            aria-label="Toggle filters"
          >
            <Menu size={24} />
          </button>
          {/* Store Icon and Name */}
          <div className="flex items-center gap-2">
            <Store size={32} className="text-white" /> {/* Lucide Store icon */}
            <div className="text-2xl font-bold">WhatsNew</div>
          </div>
        </div>

        <div className="flex-1 max-w-md mx-4 sm:mx-8">
          <div className="relative border border-white rounded-lg">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
              className="w-full px-4 py-2 pr-10 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={onCartClick}
            className="relative p-2 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-1"
            aria-label="View shopping cart"
          >
            <ShoppingCart size={24} />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
            <span className="hidden sm:inline">Cart</span>
          </button>
          <button
            onClick={onProfileClick}
            className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
            aria-label="View profile"
          >
            <User size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;