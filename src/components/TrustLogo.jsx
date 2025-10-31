//export default function TrustLogo() {}

import CBNLogo from "../assets/icons/cbn.png"; // National Bank of Nigeria logo
import NIBSSLogo from "../assets/icons/nibss.png"; // NIBSS logo
import FincenLogo from "../assets/icons/fincen.png"; // FINCEN logo

export default function TrustLogo() {
  const logos = [
    { name: "CBN", img: CBNLogo },
    { name: "NIBSS", img: NIBSSLogo },
    { name: "FINCEN", img: FincenLogo },
  ];

  return (
    <section className="bg-white py-24 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          WE VALUE YOUR <span className="text-blue-600">TRUST AND IDENTITY</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          Your trust is the foundation of everything we do. That’s why we’ve built
          VitalSwap with Bank-Level security and strict compliance standards. Every
          transaction is encrypted End-to-End making it virtually impossible for
          external interference. <br /><br />
          We follow global standards and regulations to keep your money safe. Fraud
          monitoring runs 24/7 protecting your funds when you are not looking. We
          also make security easy for you with clear controls and instant alerts.
        </p>

        {/* Logos */}
        <div className="flex justify-center gap-6 flex-wrap">
          {logos.map(({ name, img }) => (
            <div
              key={name}
              className="w-28 h-20 bg-slate-100 p-4 rounded-lg shadow-sm flex items-center justify-center overflow-hidden border border-gray-200 hover:scale-105 hover:shadow-md transition-transform duration-300"
            >
              <img
                src={img}
                alt={`${name} logo`}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
