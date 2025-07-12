// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react"

// const popularItems = [
//   {
//     id: 1,
//     title: "Streetwear Vibes",
//     category: "Urban Fashion",
//     image: "/Images/Popular-style-1.webp",
//     price: "$89.99",
//     originalPrice: "$129.99",
//     rating: 4.8,
//     reviews: 234,
//     badge: "Trending",
//   },
//   {
//     id: 2,
//     title: "Minimalist Chic",
//     category: "Modern Casual",
//     image: "/Images/Popular-style-2.webp",
//     price: "$124.99",
//     originalPrice: "$159.99",
//     rating: 4.9,
//     reviews: 189,
//     badge: "Best Seller",
//   },
//   {
//     id: 3,
//     title: "Boho Dreams",
//     category: "Bohemian Style",
//     image: "/Images/Popular-style-3.webp",
//     price: "$95.99",
//     originalPrice: "$139.99",
//     rating: 4.7,
//     reviews: 156,
//     badge: "New",
//   },
//   {
//     id: 4,
//     title: "Classic Elegance",
//     category: "Formal Wear",
//     image: "/Images/Popular-style-4.jpg",
//     price: "$199.99",
//     originalPrice: "$249.99",
//     rating: 4.9,
//     reviews: 298,
//     badge: "Premium",
//   },
//   {
//     id: 5,
//     title: "Sporty Luxe",
//     category: "Athleisure",
//     image: "/Images/Popular-style-5.webp",
//     price: "$79.99",
//     originalPrice: "$99.99",
//     rating: 4.6,
//     reviews: 167,
//     badge: "Sale",
//   },
//   {
//     id: 6,
//     title: "Vintage Revival",
//     category: "Retro Fashion",
//     image: "/Images/Popular-style-6.jpg",
//     price: "$149.99",
//     originalPrice: "$189.99",
//     rating: 4.8,
//     reviews: 203,
//     badge: "Limited",
//   },
// ]

// export default function PopularSection() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [favorites, setFavorites] = useState<number[]>([])

//   const itemsPerView = 3
//   const slidesToMove = 3
//   const totalSlides = Math.ceil(popularItems.length / slidesToMove)
//   const maxIndex = totalSlides - 1

//   const nextSlide = () => {
//     setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
//   }

//   const prevSlide = () => {
//     setCurrentIndex((prev) => Math.max(prev - 1, 0))
//   }

//   const toggleFavorite = (id: number) => {
//     setFavorites((prev) =>
//       prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
//     )
//   }

//   const getBadgeColor = (badge: string) => {
//     switch (badge) {
//       case "Trending":
//         return "bg-red-500"
//       case "Best Seller":
//         return "bg-green-500"
//       case "New":
//         return "bg-blue-500"
//       case "Premium":
//         return "bg-purple-500"
//       case "Sale":
//         return "bg-orange-500"
//       case "Limited":
//         return "bg-pink-500"
//       default:
//         return "bg-gray-500"
//     }
//   }

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-900">Popular Styles</h2>
//           <p className="text-xl text-gray-600 mt-2">
//             Discover the most loved fashion trends that are taking the world by storm.
//           </p>
//         </div>

//         {/* Carousel */}
//         <div className="relative">
//           {/* Arrows */}
//           <button
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white p-2 rounded-full shadow hover:shadow-lg"
//             onClick={prevSlide}
//             disabled={currentIndex === 0}
//           >
//             <ChevronLeft className="h-5 w-5" />
//           </button>
//           <button
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white p-2 rounded-full shadow hover:shadow-lg"
//             onClick={nextSlide}
//             disabled={currentIndex === maxIndex}
//           >
//             <ChevronRight className="h-5 w-5" />
//           </button>

//           <div className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{
//                 transform: `translateX(-${currentIndex * 100}%)`,
//                 width: `${totalSlides * 100}%`,
//               }}
//             >
//               {Array.from({ length: totalSlides }).map((_, slideIndex) => (
//                 <div key={slideIndex} className="flex gap-6 w-full flex-shrink-0">
//                   {popularItems
//                     .slice(slideIndex * slidesToMove, (slideIndex + 1) * slidesToMove)
//                     .map((item) => (
//                       <div key={item.id} className="flex-1">
//                         <div className="bg-white rounded-lg shadow hover:shadow-xl transition-all group">
//                           <div className="relative overflow-hidden rounded-t-lg">
//                             <Image
//                               src={item.image}
//                               alt={item.title}
//                               width={300}
//                               height={400}
//                               quality={100}
//                               className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
//                             />
//                             <span
//                               className={`absolute top-4 left-4 text-white text-sm font-semibold px-3 py-1 rounded-full ${getBadgeColor(
//                                 item.badge
//                               )}`}
//                             >
//                               {item.badge}
//                             </span>
//                             <button
//                               className="absolute top-4 right-4 bg-white/80 backdrop-blur p-1 rounded-full"
//                               onClick={() => toggleFavorite(item.id)}
//                             >
//                               <Heart
//                                 className={`h-5 w-5 ${
//                                   favorites.includes(item.id)
//                                     ? "fill-red-500 text-red-500"
//                                     : "text-gray-600"
//                                 }`}
//                               />
//                             </button>
//                           </div>
//                           <div className="p-5">
//                             <p className="text-sm text-gray-500 mb-1">{item.category}</p>
//                             <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
//                               {item.title}
//                             </h3>
//                             <div className="flex items-center mt-2 mb-3">
//                               <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
//                               <span className="ml-1 text-sm font-semibold text-gray-700">{item.rating}</span>
//                               <span className="ml-2 text-sm text-gray-500">({item.reviews} reviews)</span>
//                             </div>
//                             <div className="flex gap-2 mb-4">
//                               <span className="text-xl font-bold text-gray-900">{item.price}</span>
//                               <span className="text-lg text-gray-500 line-through">{item.originalPrice}</span>
//                             </div>
//                             <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded font-semibold">
//                               Add to Cart
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center mt-8 gap-2">
//           {Array.from({ length: totalSlides }).map((_, index) => (
//             <button
//               key={index}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentIndex ? "bg-gray-900 scale-125" : "bg-gray-300 hover:bg-gray-400"
//               }`}
//               onClick={() => setCurrentIndex(index)}
//             />
//           ))}
//         </div>

//         {/* View All */}
//         <div className="text-center mt-10">
//           <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all rounded font-semibold text-lg">
//             View All Styles
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }



"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react"

const popularItems = [
  {
    id: 1,
    title: "Streetwear Vibes",
    category: "Urban Fashion",
    image: "/Images/Popular-style-1.webp",
    price: "$89.99",
    originalPrice: "$129.99",
    rating: 4.8,
    reviews: 234,
    badge: "Trending",
  },
  {
    id: 2,
    title: "Minimalist Chic",
    category: "Modern Casual",
    image: "/Images/Popular-style-2.webp",
    price: "$124.99",
    originalPrice: "$159.99",
    rating: 4.9,
    reviews: 189,
    badge: "Best Seller",
  },
  {
    id: 3,
    title: "Boho Dreams",
    category: "Bohemian Style",
    image: "/Images/Popular-style-3.webp",
    price: "$95.99",
    originalPrice: "$139.99",
    rating: 4.7,
    reviews: 156,
    badge: "New",
  },
  {
    id: 4,
    title: "Classic Elegance",
    category: "Formal Wear",
    image: "/Images/Popular-style-4.jpg",
    price: "$199.99",
    originalPrice: "$249.99",
    rating: 4.9,
    reviews: 298,
    badge: "Premium",
  },
  {
    id: 5,
    title: "Sporty Luxe",
    category: "Athleisure",
    image: "/Images/Popular-style-5.webp",
    price: "$79.99",
    originalPrice: "$99.99",
    rating: 4.6,
    reviews: 167,
    badge: "Sale",
  },
  {
    id: 6,
    title: "Vintage Revival",
    category: "Retro Fashion",
    image: "/Images/Popular-style-6.jpg",
    price: "$149.99",
    originalPrice: "$189.99",
    rating: 4.8,
    reviews: 203,
    badge: "Limited",
  },
]

export default function PopularSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [favorites, setFavorites] = useState<number[]>([])

  const cardsPerPage = 2 // Number of cards visible at once
  const slidesToMove = 1 // Number of "pages" to scroll

  // Calculate total number of slides (groups of cards)
  const totalSlides = Math.ceil(popularItems.length / cardsPerPage)
  const maxIndex = totalSlides - 1

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + slidesToMove, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - slidesToMove, 0))
  }

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    )
  }

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Trending":
        return "bg-red-500"
      case "Best Seller":
        return "bg-green-500"
      case "New":
        return "bg-blue-500"
      case "Premium":
        return "bg-purple-500"
      case "Sale":
        return "bg-orange-500"
      case "Limited":
        return "bg-pink-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Popular Styles For Women's</h2>
          <p className="text-xl text-gray-600 mt-2">
            Discover the most loved fashion trends that are taking the world by storm.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 z-10 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 z-10 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100 / totalSlides}%)`,
                width: `${totalSlides * 100}%`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex}
                     className="flex justify-center gap-8 "
                     style={{ width: `${100 / totalSlides}%` }} 
                >
                  {popularItems
                    .slice(slideIndex * cardsPerPage, (slideIndex + 1) * cardsPerPage)
                    .map((item) => (
                      <div key={item.id} className="w-full sm:w-1/2 lg:w-1/2 p-2"> 
                        <div className="bg-white rounded-lg shadow hover:shadow-xl transition-all group overflow-hidden h-full flex flex-col">
                          <div className="relative overflow-hidden rounded-t-lg flex-grow">
                            <Image
                              src={item.image}
                              alt={item.title}
                              width={500} // Intrinsic width for Next/Image optimization
                              height={600} // Intrinsic height for Next/Image optimization
                              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" // Ensure image fills its space
                              priority={item.id <= cardsPerPage} // Prioritize initial visible images
                            />
                            <span
                              className={`absolute top-4 left-4 text-white text-sm font-semibold px-3 py-1 rounded-full ${getBadgeColor(
                                item.badge
                              )}`}
                            >
                              {item.badge}
                            </span>
                            <button
                              className="absolute top-4 right-4 bg-white/80 backdrop-blur p-1 rounded-full"
                              onClick={() => toggleFavorite(item.id)}
                              aria-label={`Toggle favorite for ${item.title}`}
                            >
                              <Heart
                                className={`h-5 w-5 ${
                                  favorites.includes(item.id)
                                    ? "fill-red-500 text-red-500"
                                    : "text-gray-600"
                                }`}
                              />
                            </button>
                          </div>
                          <div className="p-5 flex flex-col justify-between flex-shrink-0">
                            <div>
                              <p className="text-sm text-gray-500 mb-1">{item.category}</p>
                              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {item.title}
                              </h3>
                              <div className="flex items-center mt-2 mb-3">
                                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                <span className="ml-1 text-sm font-semibold text-gray-700">
                                  {item.rating}
                                </span>
                                <span className="ml-2 text-sm text-gray-500">
                                  ({item.reviews} reviews)
                                </span>
                              </div>
                            </div>
                            <div>
                              <div className="flex gap-2 mb-4">
                                <span className="text-xl font-bold text-gray-900">
                                  {item.price}
                                </span>
                                <span className="text-lg text-gray-500 line-through">
                                  {item.originalPrice}
                                </span>
                              </div>
                              <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded font-semibold">
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-gray-900 scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="px-8 py-3 border-2 text-gray-900 hover:bg-gray-900 hover:text-white transition-all rounded font-semibold text-lg">
            View All Styles
          </button>
        </div>
      </div>
    </section>
  )
}
