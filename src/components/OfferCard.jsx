// src/components/OfferCard.jsx
import React, { useState } from 'react';

const OfferCard = ({
  storeLogo,
  offerText,
  endDate,
  showCode, // true for "Show Code", false for "Get Offer"
  offerValue, // The actual coupon code if showCode is true, otherwise can be a URL or null
  isExpired, // To show expired styling and text
  tags = [] // Array of tags like 'Verified', 'Exclusive', 'Featured'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState(''); // To show "Copied!" message

  const handleCopyCode = () => {
    navigator.clipboard.writeText(offerValue)
      .then(() => {
        setCopyStatus('Copied!');
        setTimeout(() => setCopyStatus(''), 2000); // Hide after 2 seconds
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        setCopyStatus('Failed to copy!');
      });
  };

  const buttonText = showCode ? 'Show Code' : 'Get Offer';
  const buttonBgColor = isExpired ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600';
  const buttonTextColor = 'text-white';

  const storeName = "The Body Shop"; // Placeholder: Ideally this would come from props
  const storeImage = "https://via.placeholder.com/100x100?text=Store+Logo"; // Placeholder: Ideally this would come from props

  // Function to get the partial code for hover effect
  const getPartialCode = (code) => {
    if (!code) return 'S15'; // Default if no code, matching image
    if (code.length >= 3) {
      return code.slice(-3); // Last 3 characters for 'S15' like effect
    }
    return code;
  };

  return (
    <div className={`relative bg-white rounded-lg shadow-md overflow-hidden flex mb-4 ${isExpired ? 'opacity-70' : ''}`}>
      {/* Left Section: Logo & Text */}
      <div className="flex-shrink-0 w-1/4 p-4 flex flex-col items-center justify-center border-r border-gray-200">
        <div className="w-20 h-20 bg-gray-200 flex items-center justify-center rounded-full overflow-hidden mb-2">
          {storeLogo ? (
            <img src={storeLogo} alt="Store Logo" className="w-full h-full object-cover" />
          ) : (
            <span className="text-gray-500 text-xs text-center">LOGO</span>
          )}
        </div>
        <p className="text-center text-sm font-semibold text-gray-700">The Body Shop</p>
      </div>

      {/* Middle Section: Offer Description */}
      <div className="flex-grow p-4 flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-gray-800">{offerText}</h3>
        <p className={`text-sm ${isExpired ? 'text-red-600 font-semibold' : 'text-gray-600'}`}>
          {endDate}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-800">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right Section: Button & Hover Effect (SCRATCH-OFF STYLE) */}
      <div className="relative flex-shrink-0 w-1/4 flex items-center justify-end pr-4"> {/* Adjusted pr-4 */}
        <div
          className="relative w-full h-full flex items-center justify-end"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Coupon Code Snippet (always visible, behind the button) */}
          {showCode && (
            <div
              className={`absolute top-1/2 -translate-y-1/2 right-0 
                          bg-gray-200 text-gray-700 font-bold 
                          py-3 pl-4 pr-2 rounded-l-full rounded-r-md 
                          flex items-center justify-center text-base z-0`} /* Removed transition, opacity, and translate-x here */
              style={{ width: '80px', pointerEvents: 'none' }}
            >
              <span className="whitespace-nowrap">{getPartialCode(offerValue)}</span>
            </div>
          )}

          {/* Button (moves on hover to reveal snippet) */}
          <button
            onClick={() => {
              if (!isExpired) {
                setIsModalOpen(true);
              }
            }}
            className={`relative ${buttonBgColor} ${buttonTextColor} font-bold py-3 px-4 rounded-md 
                        transition-transform duration-300 ease-in-out z-10 whitespace-nowrap /* Added transition back to button */
                        ${isHovered && showCode ? 'transform -translate-x-[65px]' : ''} /* Button moves left by snippet width minus overlap */
                        ${isExpired ? 'opacity-60' : ''}`}
            disabled={isExpired}
            style={{ minWidth: '100px' }}
          >
            {buttonText}
          </button>
        </div>
        <p className="absolute bottom-2 right-4 text-xs text-gray-500">View Terms & Conditions</p>
      </div>

      {/* Modal - No changes here, keeping the previous modal code */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Offer Details</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-semibold"
              >
                &times;
              </button>
            </div>

            <div className="flex items-center mb-6">
              <img src={storeImage} alt={storeName} className="w-20 h-20 rounded-full mr-4 border border-gray-200" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{storeName}</h3>
                <p className="text-gray-600">{offerText}</p>
              </div>
            </div>

            {showCode ? (
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Coupon Code:
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <input
                    type="text"
                    readOnly
                    value={offerValue}
                    className="flex-grow p-3 text-lg font-mono bg-gray-50 outline-none"
                  />
                  <button
                    onClick={handleCopyCode}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-5 transition-colors duration-200"
                  >
                    {copyStatus || 'Copy Code'}
                  </button>
                </div>
                {copyStatus && <p className="text-sm text-green-600 mt-2">{copyStatus}</p>}
              </div>
            ) : (
              <p className="mt-4 text-gray-700">
                Click "Get Offer" to be redirected to the store's website.
              </p>
            )}

            {!showCode && (
                <a
                  href={offerValue}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-md transition-colors duration-200"
                >
                  Go to Offer
                </a>
            )}

          </div>
        </div>
      )}
    </div>
  );
};

export default OfferCard;