"use client"

import React from 'react';

// import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PopularSection from './components/PopularSection';
import ProductDeal from './components/ProductDeal';
import TopCategories from './components/Top-categories';
import TrendingDealsPage from './components/Trending-deals';
import Footer from './components/Footer';


const page = () => {
  return (
    <>
    {/* <Navbar /> */}
    <HeroSection />
    <PopularSection />
    <ProductDeal />
    <TopCategories />
    <TrendingDealsPage />
    <Footer />
    </>
  );
};

export default page;