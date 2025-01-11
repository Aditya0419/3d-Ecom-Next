'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { IoMdSearch } from 'react-icons/io';
import logo from '@/assets/logo.png'

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    try {
      const response = await fetch(`/api/search?query=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();

      console.log('Search Results:', data); 
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <nav className="flex items-center justify-between bg-gray-800 bg-opacity-90 px-6 py-4 text-white shadow-md">
      {/* Left: Logo */}
      <div className="text-2xl font-bold cursor-pointer">
        <a href="/"><img src={logo} alt="asd" /></a>
      </div>

      {/* Right: Search Bar, Account, and Cart Icons */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-sm">
          <IoMdSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
            onKeyDown={handleKeyDown} // Handle Enter key press
            placeholder="Search for products..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Account Icon */}
        <button
          className="transition-transform duration-300 ease-in-out hover:scale-110"
          onClick={() => alert('Navigate to account page!')}
        >
          <FontAwesomeIcon icon={faUser} size="lg" />
        </button>

        {/* Shopping Cart Icon */}
        <button
          className="transition-transform duration-300 ease-in-out hover:scale-110"
          onClick={() => alert('Navigate to shopping cart!')}
        >
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
