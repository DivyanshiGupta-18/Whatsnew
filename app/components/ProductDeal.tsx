"use client"

import React from 'react';

const ProductDeal: React.FC = () => {
  // Data for product deal sections (you can replace with actual data)
 
  const topRatedProducts = [
    {
      name: 'Electric Vehicle',
      price: '₹50,998',
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT-Ma_-K6P4mNFsENZpDnrU-sC-bHXuzaJbayqmwQ5IAI2AK_RVX_1jzUzPY9QYChaVEHPgYm00GVt-0_h_bpF9GZUl4OtctlJpi5iylpWOLi56hgN21jlmZho',  
      link: '#',
    },
    {
      name: 'Headphones',
      price: 'Up to 50% off',
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSSchCYIkzStBeRFCKu9_voNh5g43n48--bW3wgS9Hw5pQW9x6lgERiYy77L9uOZyuAaRYifz8TK1SzyqqZBnmZ2SiDrZGJwYzJQ_vvmSERtxi58CaNP_Pm',  
      link: '#',
    },
    {
      name: 'Refrigerator',
      price: 'Min. 60% off',
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTTtWfPbpBnmM5rSo7zhu-UfJoDpxu7fHA7srZzTw1KNDDjOM3G1R3IWZDHKYlHggquC-B0nNEoerwqdl7262jcdhOQvDbk513wAAYunBQ5C4Fmzw4VpUVZ9FU',  
      link: '#',
    },
    {
      name: 'Sanitaryware',
      price: 'Up to 60% off',
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR26m0CtYGzn-s0bPen6MmuF67fSCbe0AYIKPfUnbxy4UZh74d-LpzcZA-zXkiiGQeC664wr6QymfTVfFwL8Ku3PnYNgfHGig6lnoj-ohU7',  
      link: '#',
    },
  ];

   const ssdRamDeals = [
    {
      name: 'Crucial P3 Plus PCIe NVMe M.2 SSD',
      description: 'High-performance SSD',
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRSJEIF3vAxUOWRJ1vTRhWla4ARdEOv_5ug8Jy5CSiCDIIOHgd44ynsOnT2HnSgT_5KRuC86dYGX1jnMZU5S1RfwxLkFZz6UFTkWjCrCmAgOc_rd90ZdQcCZxs',  
      link: '#',
    },
    {
      name: 'Crucial RAM 8GB DDR4 desktop / Laptop',
      description: 'Fast DDR4 RAM',
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTagUMnnAmZ1LQyb8noKsqo16F0W2r_FWilmhxkbeF158N55jTOPJ35YWwC5279XYb-XQUGz32CVG9zzVxIipxeQyhnPYFbPpXhiW84h_1nQPGq7AcZhaP3', 
      link: '#',
    },
    {
      name: 'Crucial X9 USB-C 3.2 Gen 2 External SSD',
      description: 'Compact Design',
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS9U2gS_eVRv5d-5z70v1AmFC3noUdLdwLQ9QKhODo6zoukgBF-Vh-CtKe7MnVBtJOTuNWDu2nZOraB_NjFjYCNVDANilJ-JBBtLZegJpQ',  
      link: '#',
    },
    {
      name: 'Crucial MX500 1TB SSD with 32GB DDR4 Memory',
      description: 'Compatible with SFF and Tower Desktops',
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQRDDIENZlOoAA-nqutH-CuBKLeIuvsPe0AmzR6f8AYpL3XpI23RNRwMa7E5e9hhYPF_RvKJ5nL4WBNCfXW3N4NmBAhFfK9YmNSy6uPxBE',  
      link: '#',
    },
  ];

  const sportsOutdoorMore = [
    {
      name: 'Sports & fitness',
      price: '₹10,599',
      image: 'https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D',  
      link: '#',
    },
    {
      name: 'Automotive',
      price: 'Up to 18% Off',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOyqcea7WTYdWZ2gPGIOR17VM6jSWMcgvizQ&s',  
      link: '#',
    },
    {
      name: 'Tools Kit',
      price: 'Under ₹1000',
      image: 'https://img.freepik.com/free-photo/top-view-mechanical-tools-arrangement_23-2149552411.jpg',  
      link: '#',
    },
    {
      name: 'Garden & outdoor',
      price: '₹25,889',
      image: 'https://media.istockphoto.com/id/185568132/photo/outdoor-shot-of-garden-equipment.jpg?s=170667a&w=0&k=20&c=GuWVJuy_TolbW_YXQ1AL7sQqAOLDwT1W6ZcqCNv8RGU=',  
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">

      {/* Main Content */}
      <main className="container mx-auto p-6 md:p-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        
        {/* Top-rated products from stores nearby */}
        <section className="bg-white rounded-xl shadow-lg p-6 col-span-1">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">Top-rated products from stores nearby</h2>

          <div className="grid grid-cols-2 gap-4">
            {topRatedProducts.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="flex flex-col items-center text-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 rounded-md mb-2 object-cover"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/100x100/cccccc/000000?text=Error'; }} // Fallback image
                />
                <div>
                <h3 className="text-md font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-green-600">{item.price}</p>
                </div>
              </a>
            ))}
          </div>
          <a href="#" className="mt-4 block text-blue-600 hover:underline font-medium text-center">See all offers</a>
        </section>

        {/* Deals on crucial SSD & RAMs */}
        <section className="bg-white rounded-xl shadow-lg p-6 col-span-1">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">Deals on crucial SSD & RAMs</h2>
          <div className="grid grid-cols-2 gap-4">
            {ssdRamDeals.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="flex flex-col items-center text-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 rounded-md mb-2 object-cover"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/100x100/cccccc/000000?text=Error'; }} // Fallback image
                />
                <h3 className="text-md font-semibold text-gray-800">{item.name}</h3>
              </a>
            ))}
          </div>
          <a href="#" className="mt-4 block text-blue-600 hover:underline font-medium text-center">See all offers</a>
        </section>


        {/* Minimum 15% off | Sports, outdoor & more */}
        <section className="bg-white rounded-xl shadow-lg p-6 col-span-1 lg:col-span-2 xl:col-span-1">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">Minimum 15% off | Sports, outdoor & more</h2>
          <div className="grid grid-cols-2 gap-4">
            {sportsOutdoorMore.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="flex flex-col items-center text-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 rounded-md mb-2 object-cover"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/100x100/cccccc/000000?text=Error'; }} // Fallback image
                />
                <div>
                <h3 className="text-md font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-green-600">{item.price}</p>
                </div>
              </a>
            ))}
          </div>
          <a href="#" className="mt-4 block text-blue-600 hover:underline font-medium text-center">See all offers</a>
        </section>
      </main>

    </div>
  );
};

export default ProductDeal;
