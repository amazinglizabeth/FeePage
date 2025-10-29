export default function WhereYourFeesGo() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Where Your Fees Go
          </h2>
          <p className="text-gray-600 text-base">
            Complete transparency on how we use your fees
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {[
              {
                label: "Platform Operations",
                percent: "50%",
                desc: "Maintaining servers, infrastructure and uptime",
                color: "bg-blue-500",
              },
              {
                label: "Customer Support",
                percent: "25%",
                desc: "24/7 dedicated support team for all users",
                color: "bg-orange-500",
              },
              {
                label: "Development & Security",
                percent: "25%",
                desc: "Continuous improvements and security updates",
                color: "bg-purple-500",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div
                  className={`w-4 h-4 ${item.color} rounded-full mt-1 shrink-0`}
                ></div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{item.label}</h3>
                    <span className="text-sm font-bold text-gray-900">
                      {item.percent}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <svg viewBox="0 0 200 200" className="w-64 h-64 sm:w-80 sm:h-80">
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="50"
                  strokeDasharray="220 440"
                  transform="rotate(-90 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="50"
                  strokeDasharray="110 440"
                  strokeDashoffset="-220"
                  transform="rotate(-90 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#A855F7"
                  strokeWidth="50"
                  strokeDasharray="110 440"
                  strokeDashoffset="-330"
                  transform="rotate(-90 100 100)"
                />
                <circle cx="100" cy="100" r="40" fill="white" />
                <text
                  x="100"
                  y="105"
                  textAnchor="middle"
                  className="text-2xl font-bold"
                  fill="#1F2937"
                >
                  100%
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
