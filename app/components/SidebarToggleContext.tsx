"use client";

import React, { createContext, useContext, useState } from 'react';

const SidebarToggleContext = createContext(undefined);

export const SidebarToggleProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => setShowSidebar(prev => !prev);
  // Function to explicitly close sidebar
  const closeSidebar = () => setShowSidebar(false);

  return (
    <SidebarToggleContext.Provider value={{ showSidebar, toggleSidebar, closeSidebar }}>
      {children}
    </SidebarToggleContext.Provider>
  );
};

// Custom hook 
export const useSidebarToggle = () => {
  const context = useContext(SidebarToggleContext);
  if (context === undefined) {
    throw new Error('useSidebarToggle must be used within a SidebarToggleProvider');
  }
  return context;
};