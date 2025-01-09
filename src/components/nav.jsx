'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 bg-opacity-90 px-6 py-4 text-white shadow-md">
      {/* Left: Logo */}
      <div className="text-2xl font-bold cursor-pointer">
        <a href="/">BrandName</a>
      </div>

      {/* Center: Search Bar */}
      <div className="relative flex-1 max-w-sm mx-6">
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />
      </div>

      {/* Right: Account and Cart Icons */}
      <div className="flex items-center gap-6">
        {/* Account Icon */}
        <button className="transition-transform duration-300 ease-in-out hover:scale-110">
          <FontAwesomeIcon icon={faUser} size="lg" />
        </button>

        {/* Shopping Cart Icon */}
        <button className="transition-transform duration-300 ease-in-out hover:scale-110">
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
