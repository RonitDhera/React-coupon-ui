import React, { useState } from 'react';

const OfferCard = ({ storeLogo, offerText, endDate, showCode, offerValue, isExpired = false, tags = [] }) => {
  const [showTerms, setShowTerms] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false); // For "Show Code" button

  const handleButtonClick = () => {
    if (isExpired) return; // Prevent action if expired

    if (showCode) {
      // Logic to copy code
      navigator.clipboard.writeText(offerValue);
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000); // Reset after 2 seconds
      // You might also want to open a modal here
    } else {
      // Logic for "Get Offer" (e.g., redirect to affiliate link)
      window.open('https://example.com/offer-link', '_blank'); // Replace with actual offer link
    }
  };

  const getTagClasses = (tag) => {
    switch (tag.toLowerCase()) {
      case 'verified':
        return 'bg-green-100 text-green-700';
      case 'exclusive':
        return 'bg-blue-100 text-blue-700'; // Changed from yellow
      case 'featured':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className={`flex flex-col sm:flex-row items-center p-4 border rounded-lg shadow-sm mb-4 ${isExpired ? 'bg-gray-100 opacity-70 border-gray-300' : 'bg-white border-gray-200'}`}>
      {/* Store Logo */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 mb-4 sm:mb-0 sm:mr-4 border border-gray-300 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
        {storeLogo ? (
          <img src={storeLogo} alt="Store Logo" className="w-full h-full object-contain" />
        ) : (
          <span className="text-xs text-gray-500">LOGO</span> // Changed to "LOGO" as per your images
        )}
      </div>

      {/* Offer Details */}
      <div className="flex-grow text-center sm:text-left mb-4 sm:mb-0 sm:pr-4"> {/* Added pr-4 for spacing before buttons */}
        <p className={`text-lg font-semibold ${isExpired ? 'text-gray-500' : 'text-gray-800'}`}>
          {offerText}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Ends: {endDate}
        </p>
        {/* Tags */}
        <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-x-2 gap-y-1"> {/* Adjusted gap and flex-wrap */}
          {tags.map((tag, i) => (
            <span key={i} className={`${getTagClasses(tag)} text-xs font-medium px-2.5 py-0.5 rounded-full`}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons and Terms */}
      <div className="flex flex-col items-center sm:items-end flex-shrink-0 w-full sm:w-auto">
        <button
          onClick={handleButtonClick}
          className={`px-6 py-2 rounded-md font-bold text-white transition-colors duration-200 ${
            isExpired ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600' // Blue button as in image
          }`}
          disabled={isExpired}
        >
          {showCode ? (codeCopied ? 'COPIED!' : 'Show Code') : 'Get Offer'}
          {showCode && <span className="ml-2 text-sm">${offerValue}</span>}
        </button>

        <button
          onClick={() => setShowTerms(!showTerms)}
          className="text-gray-500 hover:text-blue-600 text-sm mt-2 flex items-center"
        >
          View Terms & Conditions
          <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${showTerms ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>

        {showTerms && (
          <div className="mt-2 p-3 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-600 w-full sm:w-auto">
            <p>These are the terms and conditions for the offer. Please read carefully before use.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OfferCard;