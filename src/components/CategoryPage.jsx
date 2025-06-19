import React from 'react';
import { useParams, Link } from 'react-router-dom';
import OfferCard from './OfferCard'; // Import the reusable OfferCard component

const CategoryPage = () => {
  const { categoryName } = useParams();

  const formatCategoryName = (name) => {
    if (!name) return 'Category';
    return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const formattedCategoryName = formatCategoryName(categoryName);

  // Dummy data for offers on a category page (replace with real data later)
  const categoryOffers = [
    { storeLogo: '', offerText: 'New Customers - 10% off your first order', endDate: 'Valid Until 2025', showCode: true, offerValue: 'FIRST10', tags: ['Verified', 'Exclusive'] },
    { storeLogo: '', offerText: 'Exclusive! - 11% off sitewide', endDate: 'Valid Until 2025', showCode: true, offerValue: 'SITE11', tags: ['Verified', 'Featured'] },
    { storeLogo: '', offerText: 'Free Shipping when you spend $75+ with Shop Now!', endDate: 'Some restrictions apply', showCode: false, tags: ['Verified'] },
    { storeLogo: '', offerText: 'Free Shipping on Orders $49+', endDate: 'Valid Until 2025', showCode: true, offerValue: 'SHIPFREE', tags: ['Verified', 'Exclusive'] },
    { storeLogo: '', offerText: '$5 OFF $25+ Order with Email Sign Up', endDate: 'Valid Until 2025', showCode: false, tags: ['Verified'] },
    { storeLogo: '', offerText: 'Free Shipping on All Orders $45+', endDate: 'Valid Until 2025', showCode: false, tags: ['Verified', 'Exclusive'] },
    { storeLogo: '', offerText: 'Free Shipping on $75+ order', endDate: 'Valid Until 2025', showCode: false, tags: ['Verified'] },
    { storeLogo: '', offerText: 'Free Shipping on $29+ order', endDate: 'Valid Until 2025', showCode: false, tags: ['Verified', 'Exclusive'] },
  ];

  return (
    <div className="bg-gray-100 pb-8"> {/* Overall light gray background */}
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:underline">Home</Link> &gt;
          <Link to="#" className="hover:underline ml-1">Home & Garden</Link> &gt; {/* Adjust this link if needed */}
          <span className="ml-1 font-semibold">{formattedCategoryName}</span>
        </nav>

        {/* Category Header - Adjusted for responsiveness */}
        <div className="flex flex-col md:flex-row items-center md:space-x-4 mb-8 text-center md:text-left">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 mb-4 md:mb-0 flex-shrink-0">
            {/* Category Icon/Image Placeholder */}
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2H7a2 2 0 00-2 2v2m7-7V3"></path></svg>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 leading-tight">
              DISCOUNT CODES AND VOUCHERS FOR <br className="md:hidden" /> {formattedCategoryName.toUpperCase()}
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              We have 564 live discount codes & deals in {formattedCategoryName}.
            </p>
          </div>
        </div>

        {/* Main Content Grid - Adjusted for responsiveness */}
        {/* On smaller screens, the columns will stack. */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Offer Cards */}
          {/* border-r and pr-8 removed on small/medium screens */}
          <div className="lg:col-span-2 lg:border-r lg:border-dotted lg:border-gray-400 lg:pr-8">
            {categoryOffers.map((offer, index) => (
              <OfferCard key={index} {...offer} />
            ))}
          </div>

          {/* Right Column: Sidebar */}
          {/* pl-8 removed on small/medium screens */}
          <div className="lg:col-span-1 lg:pl-8 space-y-8 mt-8 lg:mt-0"> {/* Added mt-8 for spacing when stacked */}
            {/* Category Description */}
            <div className="bg-gray-300 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Category Description</h3>
              <p className="text-gray-700 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Popular Categories */}
            <div className="bg-gray-300 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Categories</h3>
              <ul className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <li key={i} className="text-gray-700 hover:text-blue-600 cursor-pointer">
                    <Link to={`/category/another-category-${i + 1}`}>Another Category {i + 1}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Affiliate Line (consistent with Home Page) */}
        <div className="bg-gray-300 p-6 rounded-lg shadow-md flex items-center justify-center text-gray-700 text-xl font-semibold my-8 w-full h-32 text-center">
          Affiliate Line
        </div>

      </div>
    </div>
  );
};

export default CategoryPage;