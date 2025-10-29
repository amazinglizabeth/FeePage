export default function Hero() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-5 leading-tight">
          Simple transparent pricing for
          <br />
          <span className="text-blue-600">Every Swap</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          No hidden fees. No surprises. Just simple, transparent pricing that
          lets you know exactly what you're paying.
        </p>

        <div className="flex justify-center gap-3 mb-4">
          <div className="w-12 h-8 bg-linear-to-br from-red-500 to-red-600 rounded shadow-sm"></div>
          <div className="w-12 h-8 bg-linear-to-br from-orange-400 to-orange-500 rounded shadow-sm"></div>
          <div className="w-12 h-8 bg-linear-to-br from-green-500 to-green-600 rounded shadow-sm"></div>
          <div className="w-12 h-8 bg-linear-to-br from-blue-500 to-blue-600 rounded shadow-sm"></div>
        </div>
      </div>
    </section>
  );
}
