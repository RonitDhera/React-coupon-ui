import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef(null);
  const searchDropdownRef = useRef(null);

  const allDummyResults = []; 

  useEffect(() => {
    if (searchTerm.length > 1) {
      const filtered = allDummyResults.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current && !searchInputRef.current.contains(event.target) &&
        searchDropdownRef.current && !searchDropdownRef.current.contains(event.target)
      ) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFocus = () => {
    setIsSearchFocused(true);
  };

  const handleBlur = () => {
    // The handleClickOutside useEffect handles this more robustly
  };

  return (
    // Header background white, border light gray using CSS variables
    <header className="shadow-md py-3 font-sans" style={{ backgroundColor: 'var(--header-bg)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Top Row: Logo, Search Bar, and Sign In */}
        <div className="flex items-center justify-between gap-x-4 mb-4">
          {/* Left: Random Placeholder Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/src/assets/promocarnivals2.png" // Consider an orange/black themed logo
              alt="Site Logo" 
              className="h-20 w-25" 
            />
          </Link>

          {/* Right Section: Search Bar and SIGNIN */}
          <div className="flex items-center gap-x-4 flex-grow justify-end">
            {/* Search Bar with Dropdown */}
            <div className="relative w-full max-w-xs md:max-w-md">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search anything..."
                // Using CSS variables for all colors, including the focus ring
                className="w-full h-10 px-3 pl-10 text-sm rounded-full border focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                style={{
                  backgroundColor: 'var(--search-input-bg)',
                  color: 'var(--search-input-text)',
                  borderColor: 'var(--search-input-border)',
                  '--tw-ring-color': 'var(--search-input-focus-ring)', // Tailwind's internal variable for ring color
                }}
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              {/* Magnifying glass icon color */}
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--search-input-placeholder)' }} />

              {/* Search Results Dropdown */}
              {isSearchFocused && searchTerm.length > 0 && searchResults.length === 0 && (
                <div
                  ref={searchDropdownRef}
                  className="absolute top-full left-0 mt-2 w-full border rounded-lg shadow-xl z-50 py-3 text-center text-sm animate-fadeInDown"
                  style={{
                    backgroundColor: 'var(--search-dropdown-bg)',
                    borderColor: 'var(--search-dropdown-border)',
                    color: 'var(--search-dropdown-text)'
                  }}
                >
                  Type to search...
                </div>
              )}
            </div>

            {/* SIGNIN with User Icon */}
            <div className="flex-shrink-0 flex items-center space-x-1">
              {/* User icon color */}
              <UserIcon className="h-5 w-5" style={{ color: 'var(--icon-default)' }} />
              <Link
                to="/signin"
                className="font-medium text-sm whitespace-nowrap transition-colors duration-300"
                // SIGNIN Link: Default black text, hover orange text
                style={{ color: 'var(--text-default)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-accent-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-default)'}
              >
                SIGNIN
              </Link>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="relative pt-4 pb-2 text-center mt-4" style={{ borderTop: '1px solid var(--border-light)' }}>
          {/* Heading text color */}
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--heading-color)' }}>Explore Categories</h2>
          {/* Categories Navigation */}
          <nav className="w-full overflow-x-auto custom-scrollbar pb-2">
            <ul className="flex justify-start sm:justify-center flex-wrap gap-2 sm:gap-3 text-sm font-medium">
              {[
                "Electronics", "Fashion", "Home & Garden", "Food & Drink",
                "Travel", "Health", "Kitchen & Kitchenware", "Beauty"
              ].map((category) => (
                <li key={category}>
                  <Link
                    to={`/category/${category.replace(/ & /g, '-')}`}
                    className="flex items-center px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 whitespace-nowrap"
                    // Category Buttons: Default white bg, black text. Hover orange bg, black text.
                    style={{
                      backgroundColor: 'var(--category-button-bg-default)',
                      color: 'var(--category-button-text-default)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--category-button-bg-hover)';
                      e.currentTarget.style.color = 'var(--category-button-text-hover)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--category-button-bg-default)';
                      e.currentTarget.style.color = 'var(--category-button-text-default)';
                    }}
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;