import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        {/* Top Row: SIGNIN, LOGO, Search Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-0">
          {/* Left: SIGNIN */}
          <div className="order-2 sm:order-1 mt-4 sm:mt-0">
            <Link to="/signin" className="text-gray-600 hover:text-gray-900 font-semibold text-sm">SIGNIN</Link>
          </div>

          {/* Center: LOGO (adjusted size) */}
          <div className="order-1 sm:order-2">
            <Link to="/" className="w-32 h-16 bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-lg">
              LOGO
            </Link>
          </div>

          {/* Right: Search Bar */}
          <div className="order-3 sm:order-3 mt-4 sm:mt-0">
            <div className="relative">
              <input
                type="text"
                placeholder="search bar"
                className="w-40 h-8 bg-black text-white px-3 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* Search icon placeholder (optional) */}
              {/* <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> */}
            </div>
          </div>
        </div>

        {/* Separator line with "Categories" text */}
        <div className="relative flex items-center py-4 my-4">
          <div className="flex-grow border-t border-dotted border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-600 font-semibold text-sm">Categories</span>
          <div className="flex-grow border-t border-dotted border-gray-400"></div>
        </div>

        {/* Categories Navigation */}
        <nav className="w-full">
          <ul className="flex flex-wrap justify-center sm:justify-between gap-x-6 gap-y-2 text-gray-600 font-semibold text-sm">
            {/* Using Link for actual navigation to category pages */}
            <li><Link to="/category/Electronics" className="hover:text-gray-900 whitespace-nowrap">Electronics</Link></li>
            <li><Link to="/category/Fashion" className="hover:text-gray-900 whitespace-nowrap">Fashion</Link></li>
            <li><Link to="/category/Home-and-Garden" className="hover:text-gray-900 whitespace-nowrap">Home & Garden</Link></li>
            <li><Link to="/category/Food-and-Drink" className="hover:text-gray-900 whitespace-nowrap">Food & Drink</Link></li>
            <li><Link to="/category/Travel" className="hover:text-gray-900 whitespace-nowrap">Travel</Link></li>
            <li><Link to="/category/Health" className="hover:text-gray-900 whitespace-nowrap">Health</Link></li>
            {/* Added more categories based on your header image's links */}
            <li><Link to="/category/Kitchen-and-Kitchenware" className="hover:text-gray-900 whitespace-nowrap">Kitchen & Kitchenware</Link></li>
            <li><Link to="/category/Beauty" className="hover:text-gray-900 whitespace-nowrap">Beauty</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;