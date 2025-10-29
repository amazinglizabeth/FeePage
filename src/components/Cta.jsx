export default function Cta() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-600 to-blue-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Start Exchanging Currency Today
        </h2>
        <p className="text-blue-100 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of users who trust VitalSwap for transparent, secure
          currency exchanges
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-bold transition shadow-lg hover:shadow-xl text-base">
            Get Started Now
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition text-base">
            View Pricing Plans
          </button>
        </div>

        <p className="text-blue-100 text-sm">
          No credit card required • Start trading in minutes • Full transparency
          guaranteed
        </p>
      </div>
    </section>
  );
}
