"use client" 

import React, { useState, useEffect } from 'react'; /
import { Star, Plus, Minus, X, ChevronLeft, ChevronRight } from 'lucide-react';

import Sidebar from './components/Sidebar';
import { useSidebarToggle } from './components/SidebarToggleContext';


import { useCart } from './layout';

// Sample product data 
const sampleProducts = [
  {
    id: 1,
    title: "Running Shoes",
    price: 89.99,
    category: "footwear",
    brand: "Nike",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    description: "Comfortable running shoes with excellent cushioning and support. Perfect for daily runs and workouts.",
    rating: 4.5
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 199.99,
    category: "electronics",
    brand: "Sony",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit:crop",
    description: "Premium wireless headphones with noise cancellation and superior sound quality.",
    rating: 4.8
  },
  {
    id: 3,
    title: "Backpack",
    price: 49.99,
    category: "accessories",
    brand: "Herschel",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit:crop",
    description: "Stylish and durable backpack perfect for school, work, or travel.",
    rating: 4.3
  },
  {
    id: 4,
    title: "Smartwatch",
    price: 299.99,
    category: "electronics",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=300&fit:crop",
    description: "Advanced smartwatch with health tracking, GPS, and cellular connectivity.",
    rating: 4.7
  },
  {
    id: 5,
    title: "Sunglasses",
    price: 129.99,
    category: "accessories",
    brand: "Ray-Ban",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit-crop",
    description: "Classic sunglasses with UV protection and polarized lenses.",
    rating: 4.4
  },
  {
    id: 6,
    title: "Digital Camera",
    price: 799.99,
    category: "electronics",
    brand: "Canon",
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit:crop",
    description: "Professional DSLR camera with high-resolution sensor and advanced features.",
    rating: 4.9
  },
  {
    id: 7,
    title: "T-Shirt",
    price: 24.99,
    category: "clothing",
    brand: "Uniqlo",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit:crop",
    description: "Premium cotton t-shirt with comfortable fit and modern design.",
    rating: 4.2
  },
  {
    id: 8,
    title: "Smartphone",
    price: 699.99,
    category: "electronics",
    brand: "Samsung",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit:crop",
    description: "Latest smartphone with advanced camera system and fast performance.",
    rating: 4.6
  }
];

// Product Card Component
const ProductCard = ({ product, onClick }) => {
  const { addToCart } = useCart(); 

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={onClick}>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-800 truncate">{product.title}</h3>
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Product Detail Component
const ProductDetail = ({ product, onBack }) => {
  const { addToCart } = useCart(); 
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [product.image, "https://via.placeholder.com/400x300?text=Product+View+2", "https://via.placeholder.com/400x300?text=Product+View+3"];

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <button
        onClick={onBack}
        className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
      >
        <ChevronLeft size={20} className="mr-1" />
        Back to Products
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-md">
        {/* Image Section */}
        <div className="space-y-4">
          <div className="relative">
            <img
              src={images[currentImageIndex]}
              alt={product.title}
              className="w-full h-64 sm:h-80 md:h-96 object-contain rounded-lg border border-gray-200"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 shadow-md hover:bg-opacity-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 shadow-md hover:bg-opacity-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>
          <div className="flex space-x-2 overflow-x-auto pb-2 -mb-2">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded border-2 ${index === currentImageIndex ? 'border-blue-600' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-300`}
                aria-label={`View image ${index + 1}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover rounded" />
              </button>
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">{product.title}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                  />
                ))}
                <span className="ml-2 text-gray-600">({product.rating})</span>
              </div>
            </div>
            <p className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div>
            <p className="text-gray-600"><span className="font-semibold">Category:</span> {product.category}</p>
            <p className="text-gray-600"><span className="font-semibold">Brand:</span> {product.brand}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Decrease quantity"
              >
                <Minus size={18} />
              </button>
              <span className="px-4 py-2 border-x text-lg font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Increase quantity"
              >
                <Plus size={18} />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Cart Component
const Cart = ({ onClose }) => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart(); // This line uses useCart

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-auto max-h-[90vh] overflow-y-auto relative">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300" aria-label="Close cart">
            <X size={24} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600 text-lg">Your cart is empty</p>
            <button
              onClick={onClose}
              className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center space-x-4 border-b pb-4 last:border-b-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="px-2 text-lg font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      aria-label="Increase quantity"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-300"
                    aria-label="Remove item from cart"
                  >
                    <X size={20} />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold">Total: ${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={onClose}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Continue Shopping
                </button>
                <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};


// Main App Component 
const EcommerceApp = () => {
  const { showSidebar, closeSidebar } = useSidebarToggle();

  const [currentView, setCurrentView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    priceRange: { min: 0, max: 1000 }
  });

  const filteredProducts = sampleProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filters.categories.length === 0 || filters.categories.includes(product.category);
    const matchesBrand = filters.brands.length === 0 || filters.brands.includes(product.brand);
    const matchesPrice = product.price >= filters.priceRange.min && product.price <= filters.priceRange.max;
    return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
  });

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentView('product');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProduct(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {currentView === 'product' && selectedProduct ? (
        <main className="flex-1">
          <ProductDetail product={selectedProduct} onBack={handleBackToHome} />
        </main>
      ) : (
        <div className="flex flex-1 relative">
          {showSidebar && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
              onClick={closeSidebar}
              aria-hidden="true"
            ></div>
          )}
          <Sidebar onFilterChange={setFilters} filters={filters} />

          <main className="flex-1 p-4 sm:p-6">
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Product Listing</h1>
              <p className="text-gray-600 text-sm sm:text-base">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-500">No products found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your filters or search term.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} onClick={() => handleProductClick(product)} />
                ))}
              </div>
            )}
          </main>
        </div>
      )}
      
      {showCart && <Cart onClose={() => setShowCart(false)} />} {/* Pass setter directly or a dedicated handler */}
    </div>
  );
};

// Root page component
const PageWrapper = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100 items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return <EcommerceApp />;
};

export default PageWrapper;