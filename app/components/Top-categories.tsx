import React, { useState, useEffect } from 'react';

const TopCategories: React.FC = () => {
  const categories = [
    {
      name: 'Mobiles & accessories',
      deal: 'Up to 40% off',
      image: 'https://w0.peakpx.com/wallpaper/110/397/HD-wallpaper-xiaomi-android-mobile-phone-2019.jpg',
    },
    {
      name: 'Daily needs',
      deal: 'Up to 60% off',
      image: 'https://www.quickpantry.in/cdn/shop/files/Website_Homepage_Poster.png?v=1748196695&width=980',
    },
    {
      name: 'Electronics & accessories',
      deal: 'Up to 80% off',
      image: 'https://m.media-amazon.com/images/I/41LGLNea4EL._UF1000,1000_QL80_.jpg',
    },
    {
      name: 'Fashion & beauty',
      deal: '50%-80% off',
      image: 'https://plus.unsplash.com/premium_photo-1677526496597-aa0f49053ce2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMGFuZCUyMGJlYXV0eXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      name: 'Home, kitchen & outdoors',
      deal: 'Minimum 50% off',
      image: 'https://cdn.firstcry.com/education/2023/01/13101355/Names-Of-Household-Appliances-In-English.jpg',
    },
    {
      name: 'TVs & Appliances',
      deal: 'Up to 65% off',
      image: 'https://abmgroup.in/cdn/shop/products/24J4100.jpg?v=1571751602',
    },
    {
      name: 'Books, toys & more',
      deal: 'Up to 75% off',
      image: 'https://m.media-amazon.com/images/I/61ENlm1K8bL._UF1000,1000_QL80_.jpg',
    },
    {
      name: 'Sports & Fitness',
      deal: 'Up to 50% off',
      image: 'https://rockytopsportsworld.com/wp-content/uploads/2019/07/sports-balls.jpg',
    },
    {
      name: 'Automotive',
      deal: 'Up to 45% off',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHY_7wsJ9wnuxIJcqzJTDSeTSDpgalo5N8A&s',
    },
    {
      name: 'Pet Supplies',
      deal: 'Min. 30% off',
      image: 'https://thumbs.dreamstime.com/b/pet-supplies-white-background-pet-supplies-white-background-top-view-leash-brush-scoop-toys-food-essentials-to-keep-your-140469098.jpg',
    },
    {
      name: 'Health & Personal Care',
      deal: 'Up to 70% off',
      image: 'https://www.heinens.com/content/uploads/2022/08/Heinens-Health-And-Beauty-products-800x550-1.jpg',
    },
    {
      name: 'Groceries',
      deal: 'Up to 25% off',
      image: 'https://www.dailyneeds247.com/wp-content/uploads/2022/01/grocery-products-1510312058-3444389.jpeg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }, 1500); // Change item every 3 seconds

    return () => clearInterval(interval); 
  }, [categories.length]);


  const displayedCategories = [...categories, ...categories, ...categories]; 

  return (
    <div className="bg-gray-100 font-sans text-gray-800">
        <section className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Shop deals in top categories</h2>
            <a href="#" className="text-blue-600 hover:underline font-medium">Explore all categories</a>
          </div>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * (100 / itemsPerPage)) % 100}%)`,
              }}
            >
              {displayedCategories.map((category, index) => (
                <div
                  key={index} 
                  className="flex-shrink-0 p-2"
                  style={{ width: `${100 / itemsPerPage}%` }} 
                >
                  <div className="p-4 rounded-lg shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105 h-full">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-3 border-4 border-gray-300">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.src = 'https://placehold.co/150x150/cccccc/000000?text=Error'; }}
                      />
                    </div>
                    <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-1">{category.name}</h3>
                    <p className="text-sm text-green-600 font-medium">{category.deal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      {/* </main> */}
    </div>
  );
};

export default TopCategories;
