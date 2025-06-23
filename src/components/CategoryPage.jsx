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

  // Dummy data for offers on a category page (replace with real data later) - UNTOUCHED
  const categoryOffers = [
    { storeLogo: 'https://via.placeholder.com/100x100?text=Brand1', offerText: 'New Customers - 10% off your first order', endDate: 'Valid Until 2025', showCode: true, offerValue: 'FIRST10', tags: ['Verified', 'Exclusive'] },
    { storeLogo: 'https://via.placeholder.com/100x100?text=Brand2', offerText: 'Exclusive! - 11% off sitewide', endDate: 'Valid Until 2025', showCode: true, offerValue: 'SITE11', tags: ['Verified', 'Featured'] },
    { storeLogo: 'https://via.placeholder.com/100x100?text=Brand3', offerText: 'Free Shipping when you spend $75+ with Shop Now!', endDate: 'Some restrictions apply', showCode: false, tags: ['Verified'] },
    { storeLogo: 'https://via.placeholder.com/100x100?text=Brand4', offerText: 'Free Shipping on Orders $49+', endDate: 'Valid Until 2025', showCode: true, offerValue: 'SHIPFREE', tags: ['Verified', 'Exclusive'] },
    { storeLogo: 'https://via.placeholder.com/100x100?text=Brand5', offerText: '$5 OFF $25+ Order with Email Sign Up', endDate: 'Valid Until 2025', showCode: false, tags: ['Verified'] },
    { storeLogo: 'https://via.placeholder.com/100x100?text=Brand6', offerText: 'Free Shipping on All Orders $45+', endDate: 'Valid Until 2025', showCode: false, tags: ['Verified', 'Exclusive'] },
    { storeLogo: 'https://via.placeholder.com/100x100?text=Brand7', offerText: 'Free Shipping on $75+ order', endDate: 'Valid Until 2025', showCode: false, tags: ['Verified'] },
    { storeLogo: 'https://via.placeholder.com/100x100?text=Brand8', offerText: 'Free Shipping on $29+ order', endDate: 'Valid Until 2025', showCode: false, tags: ['Verified', 'Exclusive'] },
  ];

  return (
    <div className="pb-12 font-sans" style={{ backgroundColor: 'var(--page-bg)' }}> {/* Overall light gray background, consistent with HomePage */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8"> {/* Consistent padding */}
        {/* Breadcrumbs */}
        <nav className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
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
          {/* Example: A generic "Categories" link before the specific category */}
          <Link
            to="/categories"
            className="transition-colors duration-300"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-orange)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            Categories
          </Link>
          <span className="mx-2" style={{ color: 'var(--breadcrumb-separator-color)' }}>&gt;</span>
          <span className="font-semibold" style={{ color: 'var(--main-heading-color)' }}>{formattedCategoryName}</span> {/* Current category */}
        </nav>

        {/* Category Header */}
        <div
          className="p-6 sm:p-8 rounded-lg shadow-lg border flex flex-col md:flex-row items-center md:space-x-6 mb-10 text-center md:text-left"
          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mb-5 md:mb-0 flex-shrink-0 shadow-inner"
            style={{ backgroundColor: 'var(--card-border)' }}
          >
            {/* Category Icon/Image Placeholder - Updated for consistency */}
            <img
              src={`https://via.placeholder.com/80x80/${encodeURIComponent('FF6700')}/FFFFFF?text=${formattedCategoryName.substring(0, 3).toUpperCase()}`}
              alt={`${formattedCategoryName} icon`}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight" style={{ color: 'var(--main-heading-color)' }}>
              DISCOUNT CODES AND VOUCHERS FOR <br className="md:hidden" /> {formattedCategoryName.toUpperCase()}
            </h1>
            <p className="text-base sm:text-lg" style={{ color: 'var(--text-muted)' }}>
              We have <span className="font-semibold" style={{ color: 'var(--text-highlight)' }}>564 live discount codes & deals</span> in {formattedCategoryName}.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Offer Cards */}
          <div className="lg:col-span-2 space-y-6">
            {categoryOffers.map((offer, index) => (
              <OfferCard key={index} {...offer} />
            ))}
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 space-y-8 mt-8 lg:mt-0">
            {/* Category Description */}
            <div
              className="p-6 rounded-lg shadow-lg border"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--main-heading-color)' }}>About {formattedCategoryName} Category</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Explore the best deals and discount codes in the <span className="font-semibold" style={{ color: 'var(--text-highlight)' }}>**{formattedCategoryName}**</span> category. Whether you're looking for home decor, gardening tools, or outdoor essentials, find verified vouchers and promotional offers from leading brands. Our team constantly updates this section to ensure you have access to the freshest and most reliable discounts. Save big on everything for your home and garden!
              </p>
            </div>

            {/* Popular Categories */}
            <div
              className="p-6 rounded-lg shadow-lg border"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--main-heading-color)' }}>Popular Categories</h3>
              <ul className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <li key={i}>
                    <Link
                      to={`/category/popular-category-${i + 1}`}
                      className="text-sm transition-colors duration-300"
                      style={{ color: 'var(--popular-link-default)' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--popular-link-hover)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--popular-link-default)'}
                    >
                      Popular Category {i + 1}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Affiliate Line (consistent with Home Page) */}
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

export default CategoryPage;