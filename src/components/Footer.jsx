import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    // Set footer background to black using CSS variable
    <footer className="py-10 mt-auto font-sans" style={{ backgroundColor: 'var(--footer-bg)', color: 'var(--footer-text-primary)' }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
        {/* Company Info */}
        <div>
          {/* Logo text: pure white */}
          <h3 className="text-2xl font-bold mb-5" style={{ color: 'var(--footer-heading-color)' }}>LOGO</h3>
          {/* Description text: lighter gray */}
          <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--footer-text-secondary)' }}>
            Descriptions Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex space-x-3 mt-4">
            {/* Social Icons */}
            {/* Using inline styles with onMouseEnter/onMouseLeave for hover effects */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-colors duration-300"
              style={{ backgroundColor: 'var(--footer-social-icon-bg)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--footer-social-facebook-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--footer-social-icon-bg)'}
            >
              <FaFacebookF className="h-4 w-4" style={{ color: 'var(--footer-social-icon-color)' }} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
              className="w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-colors duration-300"
              style={{ backgroundColor: 'var(--footer-social-icon-bg)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--footer-social-twitter-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--footer-social-icon-bg)'}
            >
              <FaTwitter className="h-4 w-4" style={{ color: 'var(--footer-social-icon-color)' }} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-colors duration-300"
              style={{ backgroundColor: 'var(--footer-social-icon-bg)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--footer-social-instagram-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--footer-social-icon-bg)'}
            >
              <FaInstagram className="h-4 w-4" style={{ color: 'var(--footer-social-icon-color)' }} />
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" aria-label="Telegram"
              className="w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-colors duration-300"
              style={{ backgroundColor: 'var(--footer-social-icon-bg)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--footer-social-telegram-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--footer-social-icon-bg)'}
            >
              <FaTelegramPlane className="h-4 w-4" style={{ color: 'var(--footer-social-icon-color)' }} />
            </a>
          </div>
        </div>

        {/* Amazing Discounts Column */}
        <div>
          {/* Heading: pure white */}
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--footer-heading-color)' }}>Amazing Discounts</h3>
          <ul className="space-y-3">
            {/* Link default color: lighter gray, hover color: orange */}
            <li><Link to="#" className="text-sm transition-colors duration-300"
              style={{ color: 'var(--footer-text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--footer-link-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--footer-text-secondary)'}
            >Link 1</Link></li>
            <li><Link to="#" className="text-sm transition-colors duration-300"
              style={{ color: 'var(--footer-text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--footer-link-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--footer-text-secondary)'}
            >Link 2</Link></li>
            <li><Link to="#" className="text-sm transition-colors duration-300"
              style={{ color: 'var(--footer-text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--footer-link-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--footer-text-secondary)'}
            >Link 3</Link></li>
          </ul>
        </div>

        {/* Information Column */}
        <div>
          {/* Heading: pure white */}
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--footer-heading-color)' }}>Information</h3>
          <ul className="space-y-3">
            {/* Link default color: lighter gray, hover color: orange */}
            <li><Link to="#" className="text-sm transition-colors duration-300"
              style={{ color: 'var(--footer-text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--footer-link-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--footer-text-secondary)'}
            >Link A</Link></li>
            <li><Link to="#" className="text-sm transition-colors duration-300"
              style={{ color: 'var(--footer-text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--footer-link-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--footer-text-secondary)'}
            >Link B</Link></li>
            <li><Link to="#" className="text-sm transition-colors duration-300"
              style={{ color: 'var(--footer-text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--footer-link-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--footer-text-secondary)'}
            >Link C</Link></li>
          </ul>
        </div>

        {/* More From Us Column */}
        <div>
          {/* Heading: pure white */}
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--footer-heading-color)' }}>More From Us</h3>
          <ul className="space-y-3">
            {/* Link default color: lighter gray, hover color: orange */}
            <li><Link to="#" className="text-sm transition-colors duration-300"
              style={{ color: 'var(--footer-text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--footer-link-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--footer-text-secondary)'}
            >Article X</Link></li>
            <li><Link to="#" className="text-sm transition-colors duration-300"
              style={{ color: 'var(--footer-text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--footer-link-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--footer-text-secondary)'}
            >Article Y</Link></li>
            <li><Link to="#" className="text-sm transition-colors duration-300"
              style={{ color: 'var(--footer-text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--footer-link-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--footer-text-secondary)'}
            >Article Z</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright/Disclaimer Section */}
      <div
        className="container mx-auto px-4 md:px-6 lg:px-8 text-center text-xs mt-10 pt-6"
        style={{ color: 'var(--footer-copyright-text)', borderTop: '1px solid var(--footer-border-color)' }}
      >
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved. |
          <Link to="#" className="transition-colors duration-300"
            style={{ color: 'inherit' /* inherit from parent p tag */ }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--footer-link-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
          > Disclaimer</Link> |
          <Link to="#" className="transition-colors duration-300"
            style={{ color: 'inherit' /* inherit from parent p tag */ }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--footer-link-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
          > Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;