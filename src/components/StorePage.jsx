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
    { storeLogo: 'https://via.placeholder.com/100x100/3C9D6E/FFFFFF?text=Store1', offerText: 'Free Vitamin C tonic when you spend £45 at The Body Shop', endDate: 'Wed, 14 May, 2025', showCode: true, offerValue: 'VITC15', tags: ['Verified', 'Exclusive', 'Featured'] },
    { storeLogo: 'https://via.placeholder.com/100x100/0A6847/FFFFFF?text=Store2', offerText: '15% Off Your First Order Online', endDate: 'Fri, 30 Jun, 2025', showCode: true, offerValue: 'FIRST15', tags: ['Exclusive'] },
    { storeLogo: 'https://via.placeholder.com/100x100/66BB6A/FFFFFF?text=Store3', offerText: 'Seasonal Sale: Up to 50% Off Selected Items', endDate: 'Sun, 15 Jul, 2025', showCode: false, offerValue: 'https://www.thebodyshop.com/sale', tags: ['Featured'] },
    { storeLogo: 'https://via.placeholder.com/100x100/4A5568/FFFFFF?text=Store4', offerText: 'Free Shipping on Orders Over £30', endDate: 'Mon, 31 Aug, 2025', showCode: false, offerValue: 'https://www.thebodyshop.com/shipping', tags: ['Verified'] },
    { storeLogo: 'https://via.placeholder.com/100x100/2D3748/FFFFFF?text=Store5', offerText: 'Buy One Get One Free on Face Masks', endDate: 'Wed, 14 May, 2025', showCode: true, offerValue: 'BOGOFMASK', tags: ['Verified', 'New'] },
  ];

  // Dummy data for expired offers
  const expiredOffers = [
    { storeLogo: 'https://via.placeholder.com/100x100/909090/FFFFFF?text=Expired1', offerText: 'This offer has expired, but may still work', endDate: 'Wed, 14 May, 2025', showCode: true, offerValue: 'EXPIRED1', isExpired: true, tags: ['Verified'] },
    { storeLogo: 'https://via.placeholder.com/100x100/B0B0B0/FFFFFF?text=Expired2', offerText: 'Expired Offer example, still works sometimes', endDate: 'Tue, 12 Apr, 2025', showCode: false, offerValue: 'https://www.thebodyshop.com/old-offer', isExpired: true, tags: ['Verified'] },
    { storeLogo: 'https://via.placeholder.com/100x100/D0D0D0/FFFFFF?text=Expired3', offerText: 'Another expired deal you might like', endDate: 'Mon, 01 Mar, 2025', showCode: false, offerValue: 'https://www.thebodyshop.com/another-old-deal', isExpired: true, tags: ['Verified'] },
  ];

  return (
    <div className="pb-12 min-h-screen font-sans" style={{ backgroundColor: 'var(--page-bg)' }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-6">
          <Link
            to="/"
            className="transition-colors duration-300"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-orange)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            Home
          </Link>
          <span className="mx-2" style={{ color: 'var(--breadcrumb-separator-color)' }}>&gt;</span>
          <Link
            to="/stores"
            className="transition-colors duration-300"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-orange)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            Stores
          </Link>
          <span className="mx-2" style={{ color: 'var(--breadcrumb-separator-color)' }}>&gt;</span>
          <span className="font-semibold" style={{ color: 'var(--main-heading-color)' }}>{formattedStoreName} Promo Codes</span>
        </nav>

        {/* Store Header Section */}
        <div
          className="p-6 sm:p-8 rounded-lg shadow-lg border flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-8 mb-10"
          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
        >
          <div
            className="w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 flex items-center justify-center rounded-lg overflow-hidden border border-gray-200 p-2 shadow-inner"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--modal-logo-border)' }}
          >
            {/* Store Logo Placeholder - Updated to use primary-orange and neutral-white */}
            <img
              src={`https://via.placeholder.com/128x128/${encodeURIComponent('FF6700')}/FFFFFF?text=${formattedStoreName.substring(0, 5).toUpperCase()}`}
              alt={`${formattedStoreName} Logo`}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-center sm:text-left mb-2 leading-tight" style={{ color: 'var(--main-heading-color)' }}>
              {formattedStoreName}
            </h1>
            <p className="text-base sm:text-lg mt-2 text-center sm:text-left" style={{ color: 'var(--text-muted)' }}>
              Official Coupons & Deals for {formattedStoreName}
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Offers List */}
          <div className="lg:col-span-2 space-y-6">
            <div
              className="p-6 sm:p-8 rounded-lg shadow-lg border mb-8"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
            >
              <h2 className="text-2xl font-extrabold mb-6 border-l-4 pl-4" style={{ color: 'var(--main-heading-color)', borderColor: 'var(--heading-border-accent)' }}>All Offers</h2>
              <div className="space-y-6">
                {storeOffers.map((offer, index) => (
                  <OfferCard key={index} {...offer} />
                ))}
              </div>
            </div>

            <div
              className="p-6 sm:p-8 rounded-lg shadow-lg border mt-8"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
            >
              <h2 className="text-2xl font-extrabold mb-6 border-l-4 border-gray-400 pl-4" style={{ color: 'var(--main-heading-color)', borderColor: 'var(--offer-button-disabled-bg)' }}>
                Expired Offers <span className="text-base font-normal" style={{ color: 'var(--terms-message-text)' }}>(May Still Work)</span>
              </h2>
              <div className="space-y-6">
                {expiredOffers.map((offer, index) => (
                  <OfferCard key={index} {...offer} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 space-y-8 mt-8 lg:mt-0">
            {/* Offer Summary */}
            <div
              className="p-6 rounded-lg shadow-lg border"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--main-heading-color)' }}>Offer Summary</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Active Codes: <span className="font-semibold" style={{ color: 'var(--text-highlight)' }}>2</span></p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Active Deals: <span className="font-semibold" style={{ color: 'var(--text-highlight)' }}>7</span></p>
              <p className="text-xs mt-3" style={{ color: 'var(--breadcrumb-separator-color)' }}>Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
            </div>

            {/* Rate Store Name */}
            <div
              className="p-6 rounded-lg shadow-lg border"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--main-heading-color)' }}>Rate {formattedStoreName}</h3>
              {/* Yellow stars are a common UI pattern for ratings, keeping them yellow. */}
              <p className="text-yellow-500 text-3xl font-bold mb-2">★★★★★</p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>5.0 from 312 Users</p>
            </div>

            {/* Store Short Descriptions */}
            <div
              className="p-6 rounded-lg shadow-lg border"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--main-heading-color)' }}>About {formattedStoreName}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Short description of <span className="font-semibold" style={{ color: 'var(--text-highlight)' }}>{formattedStoreName}</span> and its products/services. This section can include a brief history or unique selling points.
              </p>
            </div>

            {/* Featured Links */}
            <div
              className="p-6 rounded-lg shadow-lg border"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--main-heading-color)' }}>Featured Links</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="transition-colors duration-300"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-orange)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    Shop All Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition-colors duration-300"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-orange)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition-colors duration-300"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-orange)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    Clearance Sale
                  </a>
                </li>
              </ul>
            </div>

            {/* Same Category Stores */}
            <div
              className="p-6 rounded-lg shadow-lg border"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--main-heading-color)' }}>More Stores Like {formattedStoreName}</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="transition-colors duration-300"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-orange)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    Brand A
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition-colors duration-300"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-orange)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    Brand B
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition-colors duration-300"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-orange)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    Brand C
                  </a>
                </li>
              </ul>
              <p className="text-sm mt-4" style={{ color: 'var(--breadcrumb-separator-color)' }}>12 similar stores in this category.</p>
            </div>
          </div>
        </div>

        {/* Long Description Section */}
        <div
          className="p-6 sm:p-8 rounded-lg shadow-lg my-10 border"
          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
        >
          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--main-heading-color)' }}>Full Description of {formattedStoreName}</h3>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br /><br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>

        {/* Affiliate Line (consistent with Home Page & Category Page) */}
        <div
          className="p-6 sm:p-8 rounded-lg shadow-lg my-10 w-full border"
          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
        >
          <p className="text-center text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            As an affiliate partner, we may earn a commission from qualifying purchases made through links on our site. This helps support our work and allows us to continue providing you with the best deals and coupons. Thank you for your support!
          </p>
        </div>
      </div>
    </div>
  );
};

export default StorePage;