import React from 'react';
import { useParams, Link } from 'react-router-dom';
import OfferCard from './OfferCard'; // Import the reusable OfferCard component

const StorePage = () => {
  const { storeName } = useParams();

  const formatStoreName = (name) => {
    if (!name) return 'Store';
    // Handle cases where storeName might be kebab-cased or camelCase
    return name.split(/(?=[A-Z])|-/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const formattedStoreName = formatStoreName(storeName);

  // Dummy data for offers on a store page
  const storeOffers = [
    { storeLogo: 'https://cdn.worldvectorlogo.com/logos/the-body-shop-1.svg', offerText: 'Free Vitamin C tonic when you spend £45 at The Body Shop', endDate: 'Wed, 14 May, 2025', showCode: true, offerValue: 'VITC15', tags: ['Verified', 'Exclusive', 'Featured'] },
    { storeLogo: 'https://cdn.worldvectorlogo.com/logos/the-body-shop-1.svg', offerText: '15% Off Your First Order Online', endDate: 'Fri, 30 Jun, 2025', showCode: true, offerValue: 'FIRST15', tags: ['Exclusive'] },
    { storeLogo: 'https://cdn.worldvectorlogo.com/logos/the-body-shop-1.svg', offerText: 'Seasonal Sale: Up to 50% Off Selected Items', endDate: 'Sun, 15 Jul, 2025', showCode: false, offerValue: 'https://www.thebodyshop.com/sale', tags: ['Featured'] },
    { storeLogo: 'https://cdn.worldvectorlogo.com/logos/the-body-shop-1.svg', offerText: 'Free Shipping on Orders Over £30', endDate: 'Mon, 31 Aug, 2025', showCode: false, offerValue: 'https://www.thebodyshop.com/shipping', tags: ['Verified'] },
    { storeLogo: 'https://cdn.worldvectorlogo.com/logos/the-body-shop-1.svg', offerText: 'Buy One Get One Free on Face Masks', endDate: 'Wed, 14 May, 2025', showCode: true, offerValue: 'BOGOFMASK', tags: ['Verified', 'New'] },
  ];

  // Dummy data for expired offers
  const expiredOffers = [
    { storeLogo: 'https://cdn.worldvectorlogo.com/logos/the-body-shop-1.svg', offerText: 'This offer has expired, but may still work', endDate: 'Wed, 14 May, 2025', showCode: true, offerValue: 'EXPIRED1', isExpired: true, tags: ['Verified'] },
    { storeLogo: 'https://cdn.worldvectorlogo.com/logos/the-body-shop-1.svg', offerText: 'Expired Offer example, still works sometimes', endDate: 'Tue, 12 Apr, 2025', showCode: false, offerValue: 'https://www.thebodyshop.com/old-offer', isExpired: true, tags: ['Verified'] },
    { storeLogo: 'https://cdn.worldvectorlogo.com/logos/the-body-shop-1.svg', offerText: 'Another expired deal you might like', endDate: 'Mon, 01 Mar, 2025', showCode: false, offerValue: 'https://www.thebodyshop.com/another-old-deal', isExpired: true, tags: ['Verified'] },
  ];

  return (
    <div className="bg-gray-100 pb-8 min-h-screen"> {/* Overall light gray background */}
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:underline">Home</Link> &gt;
          <Link to="/stores" className="hover:underline ml-1">Stores</Link> &gt; {/* Changed to /stores for clarity */}
          <span className="ml-1 font-semibold">{formattedStoreName} Promo Codes</span> {/* Dynamic breadcrumb */}
        </nav>

        {/* Store Header Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-8 mb-8 p-4 bg-white rounded-lg shadow-md"> {/* Added padding, background, shadow */}
          <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center rounded-lg overflow-hidden border border-gray-200">
            {/* Using a proper image placeholder or dynamically loaded store logo */}
            <img src="https://via.placeholder.com/128x128?text=Store+Logo" alt={`${formattedStoreName} Logo`} className="w-full h-full object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center sm:text-left"> {/* Responsive font size */}
              {formattedStoreName}
            </h1>
            <p className="text-base sm:text-xl text-gray-600 mt-2 text-center sm:text-left">One Line On Store (e.g., Official Coupons & Deals)</p> {/* Responsive font size */}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Offers List */}
          {/* Apply border-r and pr-8 only on large screens, add general padding for small screens */}
          <div className="lg:col-span-2 lg:border-r lg:border-dotted lg:border-gray-400 lg:pr-8 pb-8"> {/* Added pb-8 for spacing */}
            {storeOffers.map((offer, index) => (
              <OfferCard key={index} {...offer} />
            ))}
            <p className="text-gray-600 mt-8 mb-4 text-center sm:text-left font-semibold border-b pb-2"> {/* Added border-b for separation */}
              These offers have expired, but may still work
            </p>
            {expiredOffers.map((offer, index) => (
              <OfferCard key={index} {...offer} />
            ))}
          </div>

          {/* Right Column: Sidebar */}
          {/* Adjusted padding for responsiveness: p-4 on small, pl-8 only on large */}
          <div className="lg:col-span-1 p-4 lg:pl-8 space-y-8 mt-8 lg:mt-0"> {/* Added mt-8 for spacing when stacked */}
            {/* Offer Summary */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200"> {/* Adjusted background, added border */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">Offer Summary</h3>
              <p className="text-gray-700 text-sm">Active Codes: 2</p>
              <p className="text-gray-700 text-sm">Active Deals: 7</p>
              <p className="text-gray-500 text-xs mt-2">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p> {/* Dynamic date */}
            </div>

            {/* Rate Store Name */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200"> {/* Adjusted background, added border */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">Rate {formattedStoreName}</h3>
              <p className="text-blue-600 text-lg font-bold">★★★★★</p> {/* Placeholder for stars */}
              <p className="text-gray-500 text-sm mt-1">5.0 from 312 Users</p>
            </div>

            {/* Store Short Descriptions */}
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center text-gray-700 text-base h-auto min-h-[100px] border border-gray-200"> {/* Adjusted background, h-auto, min-h */}
              <p className="text-center">Short description of {formattedStoreName} and its products/services. This section can include a brief history or unique selling points.</p>
            </div>

            {/* Featured Links */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200"> {/* Adjusted background, added border */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">Featured Links</h3>
              <ul className="list-disc list-inside space-y-2 text-blue-600">
                <li><a href="#" className="hover:underline">Shop All Products</a></li>
                <li><a href="#" className="hover:underline">New Arrivals</a></li>
                <li><a href="#" className="hover:underline">Clearance Sale</a></li>
              </ul>
            </div>

            {/* Same Category Stores */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200"> {/* Adjusted background, added border */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">More Stores Like {formattedStoreName}</h3>
              <ul className="list-disc list-inside space-y-2 text-blue-600">
                <li><a href="#" className="hover:underline">Brand A</a></li>
                <li><a href="#" className="hover:underline">Brand B</a></li>
                <li><a href="#" className="hover:underline">Brand C</a></li>
              </ul>
              <p className="text-gray-500 text-sm mt-4">12 similar stores in this category.</p>
            </div>
          </div>
        </div>

        {/* Long Description Section */}
        <div className="bg-white p-6 rounded-lg shadow-md my-8 border border-gray-200"> {/* Adjusted background, added border */}
          <h3 className="text-xl font-bold text-gray-800 mb-4">About {formattedStoreName}</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
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