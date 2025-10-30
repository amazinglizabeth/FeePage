export default function Footer() {
  return (
    <footer className="bg-blue-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Start Exchanging Currency Today
        </h2>

        {/* Description */}
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of Nigerians who trust VitalSwap for fast, secure, and
          <br />
          affordable currency exchange.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#calculator">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-3 px-8 rounded-xl text-sm transition-all shadow-sm hover:shadow-md">
              Start Exchange Now
            </button>
          </a>
          <a href="#calculator">
            <button className=" border border-white hover:border-gray-100 text-white font-bold py-3 px-8 rounded-xl text-sm transition-all shadow-sm hover:shadow-md">
              View Exchange Rates
            </button>
          </a>
        </div>

        {/* Features */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            No option required
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Instant verification
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            24/7 support
          </span>
        </div>
      </div>
    </footer>
  );
}
