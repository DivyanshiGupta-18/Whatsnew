"use client"

import React from 'react';

import HeroSection from './components/HeroSection';
import PopularSection from './components/PopularSection';
import ProductDeal from './components/ProductDeal';
import TopCategories from './components/Top-categories';
import TrendingDealsPage from './components/Trending-deals';

const page = () => {
  return (
    <>
    <HeroSection />
    <PopularSection />
    <ProductDeal />
    <TopCategories />
    <TrendingDealsPage />
    </>
  );
};

export default page;