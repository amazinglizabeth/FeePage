import Card1 from "../assets/images/Card-1.png";
import Card2 from "../assets/images/card-2.png";
import Card3 from "../assets/images/card-3.png";

export default function FeeStructure() {
  const fees = [{ image: Card1 }, { image: Card2 }, { image: Card3 }];

  return (
    <section
      id="features"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-blue-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-3">
            Simple Fee Structure
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Clear, competitive rates for all your currency exchange needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {fees.map((fee, index) => (
            <div
              key={index}
              className="rounded-2xl transition-all hover:-translate-y-1 flex flex-col items-center justify-center w-full h-80"
            >
              <img
                src={fee.image}
                alt={`Fee ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
