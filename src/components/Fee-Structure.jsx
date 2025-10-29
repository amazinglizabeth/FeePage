export default function FeeStructure() {
  const fees = [
    {
      title: "Standard Fee",
      description: "For everyday transactions with standard processing times",
      color: "from-blue-500 to-blue-600",
      image: "📊",
    },
    {
      title: "Bulk Trades",
      description: "Reduced rates for high-volume traders and businesses",
      color: "from-green-500 to-green-600",
      image: "👥",
    },
    {
      title: "Premium Plus",
      description: "Priority support and lowest fees for enterprise clients",
      color: "from-purple-500 to-purple-600",
      image: "⚡",
    },
  ];

  return (
    <section
      id="features"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Simple Fee Structure
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Clear, straightforward pricing designed for transparency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fees.map((fee, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div
                className={`w-16 h-16 bg-linear-to-br ${fee.color} rounded-xl flex items-center justify-center mb-5 text-3xl shadow-md`}
              >
                {fee.image}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {fee.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{fee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
