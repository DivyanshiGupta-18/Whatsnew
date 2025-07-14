"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/Images/hero-section-1.jpg", 
    heading: "Summer Collection 2024",
    tagline: "Discover the latest trends in fashion",
    subtext: "Up to 50% off on selected items",
    buttonText: "Shop Now",
    bgColor: "bg-gradient-to-r from-[#B6B09F] to-[#F2F2F2]",
  },
  {
    id: 2,
    image: "/Images/hero-section-2.jpg", 
    heading: "Premium Electronics",
    tagline: "Technology that transforms your life",
    subtext: "Free shipping on orders over $99",
    buttonText: "Explore",
    bgColor: "bg-gradient-to-r from-[#FFC6C6] to-[#5a3c2e]", 
  },
  {
    id: 3,
    image: "/Images/hero-section-3.webp", 
    heading: "Home & Living",
    tagline: "Create your perfect space",
    subtext: "New arrivals every week",
    buttonText: "Browse Collection",
    bgColor: "bg-gradient-to-r from-[#41644A] to-[#798645]", 
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden font-sans">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            <div className={`w-full h-full ${slide.bgColor}`}>
              <div className="bg-black/30 h-full w-full">
                <div className="container mx-auto px-4 h-full">
                  <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
                    {/* Text Content */}
                    <div className="flex flex-col justify-center space-y-6 text-[#3e2f28] z-10 animate-fadeIn">
                      <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#fefae0] drop-shadow-md">
                          {slide.heading}
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-[#fff9ed]">
                          {slide.tagline}
                        </p>
                        <p className="text-lg text-[#f0ead2]">{slide.subtext}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-[#fefae0] text-[#3e2f28] hover:bg-[#f0ead2] font-semibold px-8 py-3 rounded-lg flex items-center justify-center transition-all duration-300 shadow-md">
                          <ShoppingBag className="mr-2 h-5 w-5" />
                          {slide.buttonText}
                        </button>
                        <button className="border border-[#fff9ed] text-[#fff9ed] hover:bg-[#fff9ed] hover:text-[#3e2f28] px-8 py-3 rounded-lg transition-all duration-300">
                          Learn More
                        </button>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className="flex justify-center items-center">
                      <div className="relative w-full max-w-lg">
                        <Image
                          src={slide.image}
                          alt={slide.heading}
                          width={800}
                          height={600}
                          className="rounded-2xl shadow-2xl object-cover"
                          priority={index === 0}
                        />
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#fff9ed]/20 border border-[#fff9ed]/40 text-white hover:bg-white/30 backdrop-blur-sm p-3 rounded-full z-30"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#fff9ed]/20 border border-[#fff9ed]/40 text-white hover:bg-white/30 backdrop-blur-sm p-3 rounded-full z-30"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Number Buttons */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-8 h-8 rounded-full text-sm font-semibold flex items-center justify-center transition-all duration-300 ${
              index === currentSlide
                ? "bg-[#fefae0] text-[#3e2f28] shadow-md scale-110"
                : "bg-white/30 text-white hover:bg-white/50"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

    </section>
  )
}