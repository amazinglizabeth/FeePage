import { useState } from "react";

export default function Referrals() {
  const referralLinks = [
    "Vitalswap.com/ref/ebarim",
    "Vitalswap.com/ref/caramel",
    "Vitalswap.com/ref/taiwo",
    "Vitalswap.com/ref/lideeyah",
  ];

  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (link, index) => {
    navigator.clipboard.writeText(link);
    setCopiedIndex(index);

    // Hide the "Copied" text after 2 seconds
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">
            SwapTag Referrals
          </h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Invite friends and earn reward for every successful swap.
          </p>
        </div>

        {/* Referral Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {referralLinks.map((link, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all relative"
            >
              {/* Copied Popup - Top Right */}
              {copiedIndex === index && (
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs py-1 px-2 rounded-full shadow-lg z-10">
                  Copied!
                </div>
              )}

              {/* Referral Link */}
              <div className="mb-4">
                <p className="text-md font-bold text-black break-all mb-3">
                  {link}
                </p>
              </div>

              {/* Copy Button */}
              <button
                onClick={() => copyToClipboard(link, index)}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                Copy Link and Earn
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
