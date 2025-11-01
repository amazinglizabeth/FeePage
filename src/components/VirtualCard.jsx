import { useState, useEffect } from "react";

export default function VirtualCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      type: "VISA",
      name: "Sarah Johnson",
      number: "4532 8765 3210 9876",
      expiry: "08/26",
      gradient: "from-blue-600 to-indigo-700",
      textColor: "text-white",
    },
    {
      type: "MASTER",
      name: "Michael Chen",
      number: "5500 1234 5678 9012",
      expiry: "11/27",
      gradient: "from-red-800 to-red-500",
      textColor: "text-white",
    },
    {
      type: "VERVE",
      name: "Amanda Rodriguez",
      number: "5061 2345 6789 0123",
      expiry: "03/28",
      gradient: "from-green-500 to-emerald-600",
      textColor: "text-white",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-12 text-center">
        VitalSwap Virtual Dollar Card
      </h1>

      {/* Card Stack */}
      <div className="relative w-[320px] h-[200px] mb-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`
              absolute top-0 left-0 w-full h-full rounded-2xl 
              bg-gradient-to-r ${card.gradient} shadow-xl 
              transform transition-all duration-700 ease-in-out
              ${
                activeIndex === index
                  ? "translate-y-0 translate-x-0 rotate-0 z-30 opacity-100"
                  : index === (activeIndex + 1) % 3
                  ? "translate-y-[-10px] translate-x-[10px] rotate-[-2deg] z-10 opacity-60"
                  : "translate-y-[-20px] translate-x-[20px] rotate-[-3deg] z-0 opacity-40"
              }
            `}
          >
            {/* Only show content on active card */}
            {activeIndex === index && (
              <div className="p-6 text-white h-full flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="text-lg font-semibold">{card.type}</div>
                </div>

                <div className="text-md md:text-xl tracking-widest font-mono">
                  {card.number}
                </div>

                <div className="flex justify-between text-sm opacity-80">
                  <div>
                    <p>Card holder name</p>
                    <p className="font-semibold">{card.name}</p>
                  </div>
                  <div>
                    <p>Expiry date</p>
                    <p className="font-semibold">{card.expiry}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-700 text-center max-w-xl leading-relaxed mb-6">
        Making cross-border payments can be a hassle. High fees, terrible
        exchange rates, and long delays make it tough to pay for things in
        dollars. That's why VitalSwap created the virtual Dollar card — a simple
        and affordable solution to help you shop globally.
      </p>

      {/* Navigation Dots */}
      <div className="flex space-x-3 mt-4">
        {cards.map((card, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "bg-blue-600 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
