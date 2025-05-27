"use client";

import React from 'react';
import { Filter, X } from 'lucide-react';
import { useSidebarToggle } from './SidebarToggleContext'; 

const Sidebar = ({ onFilterChange, filters }) => { 
  const { showSidebar, closeSidebar } = useSidebarToggle(); 

  const categories = ['electronics', 'clothing', 'footwear', 'accessories'];
  const brands = ['Nike', 'Sony', 'Apple', 'Samsung', 'Canon', 'Ray-Ban', 'Herschel', 'Uniqlo'];

  const handleCategoryChange = (category) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];

    onFilterChange({ ...filters, categories: newCategories });
  };

  const handleBrandChange = (brand) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];

    onFilterChange({ ...filters, brands: newBrands });
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({
      ...filters,
      priceRange: { ...filters.priceRange, [name]: parseInt(value) }
    });
  };

  return (
    <div className={`fixed inset-y-0 left-0 bg-gray-50 p-6 w-64 z-40 transition-transform transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:min-h-screen md:shadow-none shadow-lg`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Filter size={20} className="mr-2" />
          <h2 className="text-xl font-semibold">Filters</h2>
        </div>
        <button onClick={closeSidebar} className="md:hidden text-gray-500 hover:text-gray-700" aria-label="Close filters"> {/* Use closeSidebar from context */}
          <X size={24} />
        </button>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3 text-gray-700">Categories</h3>
        {categories.map(category => (
          <label key={category} className="flex items-center mb-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.categories.includes(category)}
              onChange={() => handleCategoryChange(category)}
              className="mr-2 text-blue-600 focus:ring-blue-500"
            />
            <span className="capitalize text-gray-600">{category}</span>
          </label>
        ))}
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3 text-gray-700">Price Range</h3>
        <div className="space-y-2">
          <div>
            <label htmlFor="min-price" className="block text-sm text-gray-600">Min: ${filters.priceRange.min}</label>
            <input
              id="min-price"
              type="range"
              name="min"
              min="0"
              max="1000"
              value={filters.priceRange.min}
              onChange={handlePriceChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
          <div>
            <label htmlFor="max-price" className="block text-sm text-gray-600">Max: ${filters.priceRange.max}</label>
            <input
              id="max-price"
              type="range"
              name="max"
              min="0"
              max="1000"
              value={filters.priceRange.max}
              onChange={handlePriceChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3 text-gray-700">Brands</h3>
        {brands.map(brand => (
          <label key={brand} className="flex items-center mb-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.brands.includes(brand)}
              onChange={() => handleBrandChange(brand)}
              className="mr-2 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-gray-600">{brand}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;