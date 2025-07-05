// src/components/Footer.jsx
import React from 'react';
// import { Link } from 'react-router-dom'; // REMOVED: react-router-dom Link
import { FaFacebookF, FaTwitter, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import PromoCarnivalsIcon from '../assets/promocarnivals (3).png'; // <--- IMPORTANT: Adjust this path to your actual logo image

const Footer = () => {
  return (
    // Set footer background to black using CSS variable
    <footer className="py-10 mt-auto font-sans" style={{ backgroundColor: 'var(--footer-bg)', color: 'var(--footer-text-primary)' }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
        {/* Company Info */}
        <div>
          {/* Logo text: pure white */}
          <h3 className="text-2xl font-bold mb-5 flex items-center" style={{ color: 'var(--footer-heading-color)' }}>
            {/* PromoCarnivals Logo/Icon */}
            <img src={PromoCarnivalsIcon} alt="PromoCarnivals Logo" className="h-8 w-8 mr-2" /> {/* Adjust h-8 w-8 as needed */}
            PromoCarnivals
          </h3>
          {/* Description text: lighter gray */}
          <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--footer-text-secondary)' }}>
            Descriptions Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex space-x-3 mt-4">
            {/* Social Icons - These were already <a> tags, so no change needed here. */}
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
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--footer-heading-color)' }}>Amazing Discounts</h3>
          <ul className="space-y-3">
            {/* Replaced Link with <a> */}
            <li><a href="#" className="text-sm transition-colors duration-300"
              style={{ color: 'var(--footer-text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--footer-link-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--footer-text-secondary)'}
            >Link 1</a></li>
            <li><a href="#" className="text-sm transition-colors duration-300"
              style={{ color: 'var(--footer-text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--footer-link-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--footer-text-secondary)'}
            >Link 2</a></li>
            <li><a href="#" className="text-sm transition-colors duration-300"
              style={{ color: 'var(--footer-text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--footer-link-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--footer-text-secondary)'}
            >Link 3</a></li>
          </ul>
        </div>

        {/* Information Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--footer-heading-color)' }}>Information</h3>
          <ul className="space-y-3">
            {/* Replaced Link with <a> */}
            <li><a href="/privacy-policy" className="text-sm transition-colors duration-300"
              style={{ color: 'var(--footer-text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--footer-link-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--footer-text-secondary)'}
            >Privacy Policy</a></li>
            <li><a href="/terms-of-use" className="text-sm transition-colors duration-300"
              style={{ color: 'var(--footer-text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--footer-link-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--footer-text-secondary)'}
            >Terms of Use</a></li>
            <li><a href="/faq" className="text-sm transition-colors duration-300"
              style={{ color: 'var(--footer-text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--footer-link-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--footer-text-secondary)'}
            >FAQ's</a></li>
            <li><a href="/brands" className="text-sm transition-colors duration-300"
              style={{ color: 'var(--footer-text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--footer-link-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--footer-text-secondary)'}
            >All Brands</a></li>
            <li><a href="/blogs" className="text-sm transition-colors duration-300"
              style={{ color: 'var(--footer-text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--footer-link-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--footer-text-secondary)'}
            >Blogs</a></li>
          </ul>
        </div>

        {/* More From Us Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--footer-heading-color)' }}>More From Us</h3>
          <ul className="space-y-3">
            {/* Replaced Link with <a> */}
            <li><a href="/how-we-make-money" className="text-sm transition-colors duration-300"
              style={{ color: 'var(--footer-text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--footer-link-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--footer-text-secondary)'}
            >How we make money</a></li>
            <li><a href="/how-to-use-coupons" className="text-sm transition-colors duration-300"
              style={{ color: 'var(--footer-text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--footer-link-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--footer-text-secondary)'}
            >How to use coupons</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright/Disclaimer Section */}
      <div
        className="container mx-auto px-4 md:px-6 lg:px-8 text-center text-xs mt-10 pt-6"
        style={{ color: 'var(--footer-copyright-text)', borderTop: '1px solid var(--footer-border-color)' }}
      >
        <p>&copy; {new Date().getFullYear()} PromoCarnivals. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;