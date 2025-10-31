export default function VitualCard() {
  <div></div>;
}
import React from "react";

export default function VitalSwapCard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-8 text-center">
        VitalSwap Virtual Dollar Card
      </h1>

      {/* Card Stack */}
      <div className="relative w-[320px] h-[200px] mb-8 group cursor-pointer">
        {/* Card 3 (Back - Yellow) */}
        <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-400 shadow-lg transform translate-y-[-30px] translate-x-[30px] z-0 transition-all duration-500 group-hover:translate-y-[-40px] group-hover:translate-x-[40px] group-hover:rotate-[-5deg]">
          <div className="absolute top-4 right-6 text-white text-lg font-semibold">
            VISA
          </div>
        </div>

        {/* Card 2 (Middle - Light Blue) */}
        <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-r from-sky-400 to-blue-400 shadow-xl transform translate-y-[-15px] translate-x-[15px] z-10 transition-all duration-500 group-hover:translate-y-[-25px] group-hover:translate-x-[25px] group-hover:rotate-[-3deg]">
          <div className="absolute top-4 right-6 text-white text-lg font-semibold">
            VISA
          </div>
        </div>

        {/* Card 1 (Front - Dark Blue) */}
        <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 shadow-2xl z-20 p-6 text-white transition-all duration-500 group-hover:translate-y-[-10px] group-hover:rotate-[2deg] group-hover:shadow-3xl">
          <div className="flex justify-between items-center mb-10">
            <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div className="text-lg font-semibold">VISA</div>
          </div>

          <div className="text-xl tracking-widest font-mono mb-6">
            3455 4562 7710 3507
          </div>

          <div className="flex justify-between text-sm opacity-80">
            <div>
              <p>Card holder name</p>
              <p className="font-semibold">John Carter</p>
            </div>
            <div>
              <p>Expiry date</p>
              <p className="font-semibold">09/30</p>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-center max-w-xl leading-relaxed">
        Making cross-border payments can be a hassle. High fees, terrible exchange
        rates, and long delays make it tough to pay for things in dollars. That’s
        why VitalSwap created the virtual Dollar card — a simple and affordable
        solution to help you shop globally.
      </p>
    </div>
  );
}
