import ATFlag from "../assets/icons/at.png";
import QAFlag from "../assets/icons/qa.png";
import MXFlag from "../assets/icons/ng.png";
import USFlag from "../assets/icons/us.png";

export default function Hero() {
  const countries = [
    { code: "AT", img: ATFlag },
    { code: "QA", img: QAFlag },
    { code: "MX", img: MXFlag },
    { code: "US", img: USFlag },
  ];

  return (
    <section className="bg-gradient-to-b from-[#F8FAFC] to-white py-24 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Simple transparent pricing for{" "}
          <span className="text-blue-600">Every Swap</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          At <span className="font-semibold text-gray-800">VitalSwap</span>, we
          believe in complete transparency. Know exactly what you will pay
          before you swap, with competitive rates and no surprises.
        </p>

        {/* Country Flags */}
        <div className="flex justify-center gap-4 sm:gap-6 flex-wrap py-5 px-4">
          {countries.map(({ code, img }) => (
            <div
              key={code}
              className="w-20 h-15 sm:w-14 sm:h-9 bg-gray-300 p-3 rounded-lg shadow-sm flex items-center justify-center overflow-hidden border border-gray-200 hover:scale-105 hover:shadow-md transition-transform duration-300"
            >
              <img
                src={img}
                alt={`${code} flag`}
                className="object-cover w-10 h-6 rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
