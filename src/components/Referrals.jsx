function Referrals() {
  const referralLinks = [
    "VitalSwap.com?ref=LYD10667",
    "VitalSwap.com?ref=TAI05635",
    "VitalSwap.com?ref=EBA70867",
    "VitalSwap.com?ref=ADE77506",
  ];

  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(`https://${link}`);
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            SwapTag Referrals
          </h2>
          <p className="text-gray-600 text-base">
            Invite friends and earn rewards for every successful swap
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {referralLinks.map((link, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                  Referral Link
                </span>
                <button
                  onClick={() => copyToClipboard(link)}
                  className="p-2 hover:bg-blue-50 rounded-lg transition text-blue-600"
                  title="Copy link"
                >
                  <FaCopy size={14} />
                </button>
              </div>
              <p className="text-sm font-medium text-blue-600 break-all">
                {link}
              </p>
              <button className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 rounded-lg text-sm transition">
                Copy Invite Link
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
