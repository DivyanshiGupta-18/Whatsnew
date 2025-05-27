
"use client"

import React, { useState, useEffect, createContext, useContext } from 'react';
// Import the 'Store' icon along with others
import { Search, ShoppingCart, User, Star, Plus, Minus, X, Filter, ChevronLeft, ChevronRight, Menu, Facebook, Twitter, Instagram, Store } from 'lucide-react';

// Cart Context
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
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

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

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
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    description: "Premium wireless headphones with noise cancellation and superior sound quality.",
    rating: 4.8
  },
  {
    id: 3,
    title: "Backpack",
    price: 49.99,
    category: "accessories",
    brand: "Herschel",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    description: "Stylish and durable backpack perfect for school, work, or travel.",
    rating: 4.3
  },
  {
    id: 4,
    title: "Smartwatch",
    price: 299.99,
    category: "electronics",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
    description: "Professional DSLR camera with high-resolution sensor and advanced features.",
    rating: 4.9
  },
  {
    id: 7,
    title: "T-Shirt",
    price: 24.99,
    category: "clothing",
    brand: "Uniqlo",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    description: "Premium cotton t-shirt with comfortable fit and modern design.",
    rating: 4.2
  },
  {
    id: 8,
    title: "Smartphone",
    price: 699.99,
    category: "electronics",
    brand: "Samsung",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    description: "Latest smartphone with advanced camera system and fast performance.",
    rating: 4.6
  }
];

// Header Component
const Header = ({ onSearch, cartItemsCount, onCartClick, onProfileClick, onToggleSidebar }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      onSearch(searchTerm);
    }
  };

  return (
    <header className="bg-blue-600 text-white px-4  pshadow-lg">
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
            <span className="hidden sm:inline">Profile</span>
          </button>
        </div>
      </div>
    </header>
  );
};

// Sidebar Component
const Sidebar = ({ onFilterChange, filters, onClose, isOpen }) => {
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
    <div className={`fixed inset-y-0 left-0 bg-gray-50 p-6 w-64 z-40 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:min-h-screen md:shadow-none shadow-lg`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Filter size={20} className="mr-2" />
          <h2 className="text-xl font-semibold">Filters</h2>
        </div>
        <button onClick={onClose} className="md:hidden text-gray-500 hover:text-gray-700">
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

// Product Card Component
const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent navigating to product detail when clicking "Add to Cart"
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
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

  // For demo, we'll use the same image multiple times to simulate a carousel
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
          <div className="flex space-x-2 overflow-x-auto pb-2 -mb-2"> {/* Added overflow-x-auto for small screens */}
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
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

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

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex flex-col gap-1">
            <p>&copy; 2024 WhatsNew.</p>
            <p>All rights reserved.</p>
          </div>
          <div className='text-center flex flex-col gap-1'>
            <h1 className='text-xl'>About Us</h1>
            <h3>Blog</h3>
            <h3>Contact</h3>
            </div>
          <div className='text-center flex flex-col gap-1'>
            <h1 className='text-xl'>Follow Us</h1>
            <div className="flex space-x-6">
            {/* Social Icons */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200" aria-label="Twitter">
              <Twitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const EcommerceApp = () => {
  const { getCartItemsCount } = useCart();
  const [currentView, setCurrentView] = useState('home'); // 'home', 'product', 'cart'
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false); // State for mobile sidebar
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    priceRange: { min: 0, max: 1000 }
  });

  // Filter products based on search and filters
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

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleProfileClick = () => {
    alert('Profile functionality would be implemented here');
  };

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };

  if (currentView === 'product' && selectedProduct) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header
          onSearch={handleSearch}
          cartItemsCount={getCartItemsCount()}
          onCartClick={handleCartClick}
          onProfileClick={handleProfileClick}
          onToggleSidebar={handleToggleSidebar}
        />
        <main className="flex-1">
          <ProductDetail product={selectedProduct} onBack={handleBackToHome} />
        </main>
        {showCart && <Cart onClose={handleCloseCart} />}
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header
        onSearch={handleSearch}
        cartItemsCount={getCartItemsCount()}
        onCartClick={handleCartClick}
        onProfileClick={handleProfileClick}
        onToggleSidebar={handleToggleSidebar}
      />

      <div className="flex flex-1 relative">
        {/* Overlay for mobile sidebar */}
        {showSidebar && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={handleCloseSidebar}
            aria-hidden="true"
          ></div>
        )}
        <Sidebar onFilterChange={setFilters} filters={filters} isOpen={showSidebar} onClose={handleCloseSidebar} />

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
                <div key={product.id} onClick={() => handleProductClick(product)} className="cursor-pointer">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {showCart && <Cart onClose={handleCloseCart} />}
      <Footer />
    </div>
  );
};

// Root App with Context Provider
const page = () => {
  return (
    <CartProvider>
      <EcommerceApp />
    </CartProvider>
  );
};

export default page;
