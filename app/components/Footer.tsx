import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-6 mt-12">
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

export default Footer;