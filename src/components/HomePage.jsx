import React from 'react';
import OfferCard from './OfferCard';
import { Link } from 'react-router-dom'; // Import Link

const HomePage = () => {
  // Dummy data for Offers (replace with real data later)
  const homePageOffers = [
    { storeLogo: '/path/to/cettire_logo.png', offerText: 'Up to 20% OFF New Season', endDate: 'Wed, 14 May, 2025', showCode: true, offerValue: 'TRIP20', tags: ['Verified', 'Exclusive', 'Featured'] }, // Added dummy logo path
    { storeLogo: '/path/to/trip_logo.png', offerText: 'Trip.com Rewards: Up to 20% Off Hotels + 60% More Trip Coins', endDate: 'Wed, 14 May, 2025', showCode: false, tags: ['Verified', 'Featured'] },
    { storeLogo: '/path/to/target_logo.png', offerText: 'Up to 50% Off Home Items', endDate: 'Wed, 14 May, 2025', showCode: false, tags: ['Verified'] },
    { storeLogo: '/path/to/quest_logo.png', offerText: 'Shop events selection of women\'s health finds and more', endDate: 'Wed, 14 May, 2025', showCode: false, tags: ['Exclusive'] },
    { storeLogo: '/path/to/stanley_logo.png', offerText: '20% OFF Japan Mug & Cups', endDate: 'Wed, 14 May, 2025', showCode: false, tags: ['Verified'] },
    { storeLogo: '/path/to/amazon_logo.png', offerText: 'Shop first order with Email Sign Up', endDate: 'Wed, 14 May, 2025', showCode: false, tags: ['Verified'] },
    { storeLogo: '/path/to/casify_logo.png', offerText: 'Mother\'s Day Sale: Buy 2+ Get 20% Off', endDate: 'Wed, 14 May, 2025', showCode: false, tags: ['Featured'] },
  ];

  return (
    <div className="bg-gray-100 pb-8"> {/* Added overall light gray background */}
      <div className="container mx-auto px-4 py-8">
        {/* Banners Slider Section (adjusted color/height to match screenshot) */}
        <div className="bg-gray-800 w-full h-80 flex items-center justify-center text-white text-3xl font-semibold mb-8">
          Banners Slider (Carousel will go here)
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Offers List */}
          <div className="lg:col-span-2">
            <div className="border-l-4 border-gray-400 pl-4 mb-6"> {/* Adjusted border color */}
              <h2 className="text-2xl font-bold text-gray-800">Featured Offers</h2>
            </div>
            {homePageOffers.map((offer, index) => (
              <OfferCard key={index} {...offer} />
            ))}
          </div>

          {/* Right Column: Popular Sections (adjusted background color) */}
          <div className="lg:col-span-1 space-y-8">
            {/* Popular Stores */}
            <div className="bg-gray-300 p-6 rounded-lg shadow-md"> {/* Darker gray background */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Stores</h3>
              <ul className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <li key={i} className="text-gray-700 hover:text-blue-600 cursor-pointer">
                    <Link to={`/store/StoreName${i + 1}`}>Store Name {i + 1}</Link> {/* Added Link for navigation */}
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Categories */}
            <div className="bg-gray-300 p-6 rounded-lg shadow-md"> {/* Darker gray background */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Categories</h3>
              <ul className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <li key={i} className="text-gray-700 hover:text-blue-600 cursor-pointer">
                    <Link to={`/category/CategoryName${i + 1}`}>Category Name {i + 1}</Link> {/* Added Link for navigation */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Website Descriptions Section (adjusted color/height) */}
        <div className="bg-gray-300 p-6 rounded-lg shadow-md flex items-center justify-center text-gray-700 text-xl font-semibold my-8 w-full h-40">
          WEBSITE DESCRIPTIONS
        </div>

        {/* Popular Posts From Our Blog Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-gray-400 pl-4">Popular Posts From Our Blog</h2> {/* Adjusted border color */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <div className="w-full h-32 bg-gray-300 flex items-center justify-center text-gray-700 text-sm">
                  Blog Post Image {i + 1}
                </div>
                <div className="p-4">
                  <p className="text-lg font-semibold text-gray-800 mb-2">Blog Post Title {i + 1}</p>
                  <p className="text-sm text-gray-600">Short description of the blog post content.</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Affiliate Line (adjusted color/height) */}
        <div className="bg-gray-300 p-6 rounded-lg shadow-md flex items-center justify-center text-gray-700 text-xl font-semibold my-8 w-full h-32">
          Affiliate Line
        </div>

      </div>
    </div>
  );
};

export default HomePage;