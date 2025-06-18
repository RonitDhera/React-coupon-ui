import React from 'react';
import { useParams, Link } from 'react-router-dom';
import OfferCard from './OfferCard'; // Import the reusable OfferCard component

const StorePage = () => {
  const { storeName } = useParams();

  const formatStoreName = (name) => {
    if (!name) return 'Store';
    return name.split(/(?=[A-Z])/).join(' ').replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const formattedStoreName = formatStoreName(storeName);

  // Dummy data for offers on a store page
  const storeOffers = [
    { storeLogo: '', offerText: 'Free Vitamin C tonic when you spend £45 at The Body Shop', endDate: 'Wed, 14 May, 2025', showCode: true, offerValue: 'VITC15', tags: ['Verified', 'Exclusive', 'Featured'] },
    { storeLogo: '', offerText: 'Free Vitamin C tonic when you spend £45 at The Body Shop', endDate: 'Wed, 14 May, 2025', showCode: true, offerValue: 'VITC15', tags: ['Verified', 'Exclusive', 'Featured'] },
    { storeLogo: '', offerText: 'Free Vitamin C tonic when you spend £45 at The Body Shop', endDate: 'Wed, 14 May, 2025', showCode: true, offerValue: 'VITC15', tags: ['Verified', 'Exclusive', 'Featured'] },
    { storeLogo: '', offerText: 'Free Vitamin C tonic when you spend £45 at The Body Shop', endDate: 'Wed, 14 May, 2025', showCode: false, tags: ['Verified', 'Exclusive', 'Featured'] },
    { storeLogo: '', offerText: 'Free Vitamin C tonic when you spend £45 at The Body Shop', endDate: 'Wed, 14 May, 2025', showCode: false, tags: ['Verified', 'Exclusive', 'Featured'] },
  ];

  // Dummy data for expired offers
  const expiredOffers = [
    { storeLogo: '', offerText: 'This offers have expired, but may still works', endDate: 'Wed, 14 May, 2025', showCode: true, offerValue: 'EXPIRED1', isExpired: true, tags: ['Verified'] },
    { storeLogo: '', offerText: 'Expired Offer example, still works', endDate: 'Wed, 14 May, 2025', showCode: false, isExpired: true, tags: ['Verified'] },
    { storeLogo: '', offerText: 'Another expired deal', endDate: 'Wed, 14 May, 2025', showCode: false, isExpired: true, tags: ['Verified'] },
  ];

  return (
    <div className="bg-gray-100 pb-8"> {/* Overall light gray background */}
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:underline">Home</Link> &gt;
          <Link to="#" className="hover:underline ml-1">Stores</Link> &gt;
          <span className="ml-1 font-semibold">Promo Codes</span>
        </nav>

        {/* Store Header Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
          <div className="w-32 h-32 bg-gray-200 flex-shrink-0 flex items-center justify-center text-gray-600">
            Store Image
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              {formattedStoreName}
            </h1>
            <p className="text-xl text-gray-600 mt-2">One Line On Store</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Offers List */}
          {/* Adjusted border to match image dotted border */}
          <div className="lg:col-span-2 border-r border-dotted border-gray-400 pr-8">
            {storeOffers.map((offer, index) => (
              <OfferCard key={index} {...offer} />
            ))}
            <p className="text-gray-600 mt-8 mb-4 text-center sm:text-left">
              This offers have expired, but may still works
            </p>
            {expiredOffers.map((offer, index) => (
              <OfferCard key={index} {...offer} />
            ))}
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 pl-8 space-y-8">
            {/* Offer Summary (adjusted background color) */}
            <div className="bg-gray-300 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Offer Summary</h3>
              <p className="text-gray-700 text-sm">Active Codes: 2</p>
              <p className="text-gray-700 text-sm">Active Deals: 7</p>
              <p className="text-gray-500 text-xs mt-2">Last updated: 2 days ago</p>
            </div>

            {/* Rate Store Name (adjusted background color) */}
            <div className="bg-gray-300 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Rate Store Name</h3>
              <p className="text-gray-700 text-lg font-semibold">5.0 stars ayege yahan</p>
              <p className="text-gray-500 text-sm mt-1">5.0 from 312 Users</p>
            </div>

            {/* Store Short Descriptions (adjusted background color/height) */}
            <div className="bg-gray-300 p-6 rounded-lg shadow-md flex items-center justify-center text-gray-700 text-lg font-semibold h-28">
              Store Short Descriptions
            </div>

            {/* Featured Links (adjusted background color/height) */}
            <div className="bg-gray-300 p-6 rounded-lg shadow-md flex items-center justify-center text-gray-700 text-lg font-semibold h-28">
              Featured Links
            </div>

            {/* Same Category Stores (adjusted background color/height) */}
            <div className="bg-gray-300 p-6 rounded-lg shadow-md flex items-center justify-center text-gray-700 text-lg font-semibold h-28">
              12 same category ke store ayege yahan
            </div>
          </div>
        </div>

        {/* Long Description Section (adjusted background color) */}
        <div className="bg-gray-300 p-6 rounded-lg shadow-md my-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Long Description</h3>
          <p className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br /><br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>

      </div>
    </div>
  );
};

export default StorePage;