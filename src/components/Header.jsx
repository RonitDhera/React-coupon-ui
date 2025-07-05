import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // REMOVED: Link and useNavigate
import { UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import promocarnivals2Logo from '../assets/promocarnivals2.png'; // Import the logo directly

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef(null);
  const searchDropdownRef = useRef(null);
  // const navigate = useNavigate(); // REMOVED: useNavigate

  const allDummyResults = [
    { id: 1, name: 'Cettire Store', link: '/store/cettire' },
    { id: 2, name: 'Trip.com Offers', link: '/store/trip.com' },
    { id: 3, name: 'Target Deals', link: '/store/target' },
    { id: 4, name: 'Quest Supplements', link: '/store/quest' },
    { id: 5, name: 'Stanley Cups', link: '/store/stanley' },
    { id: 6, name: 'Amazon Prime', link: '/store/amazon' },
    { id: 7, name: 'Casify Cases', link: '/store/casify' },
    { id: 8, name: 'Electronics Category', link: '/category/electronics' },
    { id: 9, name: 'Fashion Discounts', link: '/category/fashion' },
  ];

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
    // Handled by handleClickOutside for robustness.
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      setIsSearchFocused(false);
      // Replaced navigate with direct window.location for full page reload
      window.location.href = `/stores?search=${encodeURIComponent(searchTerm.trim())}`;
    }
  };

  return (
    <header className="shadow-md py-3 font-sans" style={{ backgroundColor: 'var(--header-bg)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-y-4 md:gap-x-4 pb-4 border-b border-gray-200 mb-4">
          {/* Replaced Link with <a> */}
          <a href="/" className="flex-shrink-0 md:mb-0">
            <img
              src={promocarnivals2Logo}
              alt="Site Logo"
              className="h-20 w-auto"
            />
          </a>

          <div className="flex flex-col sm:flex-row items-center gap-y-4 sm:gap-x-4 flex-grow w-full md:w-auto justify-end">
            <div className="relative w-full sm:max-w-xs md:max-w-md">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search anything..."
                className="w-full h-10 px-3 pl-10 text-sm rounded-full border focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                style={{
                  backgroundColor: 'var(--search-input-bg)',
                  color: 'var(--search-input-text)',
                  borderColor: 'var(--search-input-border)',
                  '--tw-ring-color': 'var(--search-input-focus-ring)',
                }}
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyPress={handleKeyPress}
              />
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
              {isSearchFocused && searchResults.length > 0 && (
                <div
                  ref={searchDropdownRef}
                  className="absolute top-full left-0 mt-2 w-full border rounded-lg shadow-xl z-50 py-3 text-sm animate-fadeInDown max-h-60 overflow-y-auto"
                  style={{
                    backgroundColor: 'var(--search-dropdown-bg)',
                    borderColor: 'var(--search-dropdown-border)',
                    color: 'var(--search-dropdown-text)'
                  }}
                >
                  {searchResults.map((result) => (
                    // Replaced Link with <a>
                    <a
                      key={result.id}
                      href={result.link}
                      className="block px-4 py-2 text-left"
                      style={{
                        color: 'var(--text-default)',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--search-result-hover-bg)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      onClick={() => setIsSearchFocused(false)} // This click handler remains fine
                    >
                      {result.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* NEW: Blog Link */}
            <div className="flex-shrink-0 flex items-center space-x-1 sm:ml-auto md:ml-0">
              {/* Replaced Link with <a> */}
              <a
                href="BlogPage.jsx"
                className="font-medium text-sm whitespace-nowrap transition-colors duration-300"
                style={{ color: 'var(--text-default)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-accent-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-default)'}
              >
                Blog
              </a>
            </div>

            {/* ORIGINAL: SIGNIN with User Icon - UNCOMMENTED AND KEPT AS PER PREVIOUS INSTRUCTION */}
            {/* If you intend to use this, uncomment it. It will also need to be an <a> tag. */}
            {/*
            <div className="flex-shrink-0 flex items-center space-x-1">
              <UserIcon className="h-5 w-5" style={{ color: 'var(--icon-default)' }} />
              <a
                href="/signin" // Changed from Link to <a>
                className="font-medium text-sm whitespace-nowrap transition-colors duration-300"
                style={{ color: 'var(--text-default)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-accent-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-default)'}
              >
                SIGNIN
              </a>
            </div>
            */}
          </div>
        </div>

        {/* Categories Section (without heading) */}
        <div className="relative pt-4 pb-2 text-center mt-4">
          <nav className="w-full overflow-x-auto custom-scrollbar pb-2">
            <ul className="flex justify-start sm:justify-center flex-wrap gap-2 sm:gap-3 text-sm font-medium">
              {[
                "Electronics", "Fashion", "Home & Garden", "Food & Drink",
                "Travel", "Health", "Kitchen & Kitchenware", "Beauty"
              ].map((category) => (
                <li key={category}>
                  {/* Replaced Link with <a> */}
                  <a
                    href={`/category/${category.replace(/ & /g, '-').toLowerCase()}`}
                    className="flex items-center px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 whitespace-nowrap"
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
                  </a>
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