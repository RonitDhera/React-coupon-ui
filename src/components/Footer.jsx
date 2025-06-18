import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">LOGO</h3>
          <p className="text-gray-400 text-sm">Descriptions Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="flex space-x-4 mt-4">
            {/* Social Icons Placeholder - matching your image closely */}
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm font-bold">F</div> {/* Facebook */}
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm font-bold">T</div> {/* Twitter */}
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm font-bold">I</div> {/* Instagram */}
          </div>
        </div>
        {/* Amazing Discounts Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Amazing Discounts</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Link 1</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Link 2</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Link 3</a></li>
          </ul>
        </div>
        {/* Information Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Information</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Link A</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Link B</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Link C</a></li>
          </ul>
        </div>
        {/* More From Us Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">More From Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Article X</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Article Y</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Article Z</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center text-gray-500 text-xs mt-8 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved. | <a href="#" className="hover:text-white">Disclaimer</a> | <a href="#" className="hover:text-white">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;