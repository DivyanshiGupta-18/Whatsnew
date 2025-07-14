"use client"

import React, { useState } from "react";


const TrendingDealsPage: React.FC = () => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const mainProduct = {
    name: "Premium Cotton Casual Shirt",
    price: "₹1,599",
    originalPrice: "₹2,499",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  };

  const equipmentItems = [
    {
      name: "Smart Watch Pro",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "Leather Wallet",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "Sports Sneakers",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "Stylish Glasses",
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  // Function to render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<span key={i} className="text-yellow-400">★</span>);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<span key={i} className="text-yellow-400">★</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">★</span>);
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Trending Deals for Men
          </h1>
          <p className="text-gray-600 text-center mt-2">Discover the best deals on Men&apos;s fashion and accessories</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Left Side - Main Product */}
          <section className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="relative mb-6">
              <div className="relative rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={mainProduct.image}
                  alt={mainProduct.name}
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => { 
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'; 
                  }}
                />
                
                {/* Wishlist Icon */}
                <button
                  onClick={toggleWishlist}
                  className="absolute top-4 right-4 p-3 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
                  aria-label="Add to wishlist"
                >
                  <svg
                    className={`w-6 h-6 transition-colors duration-300 ${
                      isWishlisted ? 'text-red-500' : 'text-gray-400 hover:text-red-400'
                    }`}
                    fill={isWishlisted ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>

                {/* Sale Badge */}
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Sale
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{mainProduct.name}</h3>
              
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-green-600">{mainProduct.price}</span>
                <span className="text-lg text-gray-500 line-through">{mainProduct.originalPrice}</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm font-medium">
                  36% OFF
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex">{renderStars(mainProduct.rating)}</div>
                <span className="text-sm text-gray-600">({mainProduct.rating} / 5)</span>
                <span className="text-sm text-gray-500">• 2,847 reviews</span>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-gray-900 hover:from-gray-900 hover:to-gray-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                Add to Cart
              </button>
            </div>
          </section>

          {/* Right Side - Equipment */}
          <section className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Mens Equipment</h3>
            
            <div className="space-y-6">
              {equipmentItems.map((item, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-all duration-300 cursor-pointer border border-gray-200 hover:border-gray-300 hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-white border-2 border-gray-200 group-hover:border-blue-300 transition-colors duration-300">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => { 
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'; 
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">Premium Quality</p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors duration-300">
                View All Equipment →
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TrendingDealsPage;