import { useState } from "react";

export default function ExchangeCalculator() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("NGN");
  const [toCurrency, setToCurrency] = useState("USD");
  const [holdVital, setHoldVital] = useState(false);

  // Example exchange rates (you can replace with live API later)
  const rates = {
    NGN: { USD: 0.0012, EUR: 0.0011 },
    USD: { NGN: 1480, EUR: 0.93 },
    EUR: { NGN: 1700, USD: 1.08 },
  };

  const exchangeRate = rates[fromCurrency]?.[toCurrency] || 1;

  // Calculate fee and total
  const rawAmount = parseFloat(amount) || 0;
  const baseFee = rawAmount * 0.02;
  const fee = holdVital ? baseFee * 0.5 : baseFee;
  const received = (rawAmount - fee) * exchangeRate;

  return (
    <section
      id="calculator"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-800 mb-4">
            Exchange Calculator
          </h2>
          <p className="text-gray-600 text-md sm:text-xl">
            Calculate your exchange amount and fees in real time
          </p>
        </div>

        {/* Calculator Box */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-8 sm:p-10">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Side - Inputs */}
              <div className="flex-1">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Amount to Exchange
                  </h3>
                  <div className="relative">
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Currency Selection
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        From Currency
                      </label>
                      <div className="relative">
                        <select
                          value={fromCurrency}
                          onChange={(e) => setFromCurrency(e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                        >
                          <option value="NGN">Nigerian Naira (₦)</option>
                          <option value="USD">US Dollar ($)</option>
                          <option value="EUR">Euro (€)</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        To Currency
                      </label>
                      <div className="relative">
                        <select
                          value={toCurrency}
                          onChange={(e) => setToCurrency(e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                        >
                          <option value="USD">US Dollar ($)</option>
                          <option value="NGN">Nigerian Naira (₦)</option>
                          <option value="EUR">Euro (€)</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <input
                    type="checkbox"
                    checked={holdVital}
                    onChange={() => setHoldVital(!holdVital)}
                    className="w-5 h-5 accent-blue-600"
                  />
                  <span className="text-sm font-medium text-blue-800">
                    I hold VITAL tokens (50% fee discount)
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden lg:block border-l border-gray-200"></div>

              {/* Right Side - Exchange Summary */}
              <div className="lg:w-2/5">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 shadow-sm h-full">
                  <h3 className="text-xl font-bold text-blue-900 mb-6 pb-3 border-b border-blue-200">
                    Exchange Summary
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Exchange Rate:</span>
                      <span className="font-semibold text-blue-700">
                        1 {fromCurrency} = {exchangeRate.toFixed(6)}{" "}
                        {toCurrency}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Exchange Fee:</span>
                      <span className="font-semibold text-blue-600">
                        {fromCurrency === "NGN"
                          ? "₦"
                          : fromCurrency === "USD"
                          ? "$"
                          : "€"}
                        {fee.toFixed(2)}
                      </span>
                    </div>

                    <div className="pt-4 border-t border-blue-200">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-800">
                          You'll Receive:
                        </span>
                        <span className="text-2xl font-bold text-green-600">
                          {toCurrency === "NGN"
                            ? "₦"
                            : toCurrency === "USD"
                            ? "$"
                            : "€"}
                          {received.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 italic mt-6 pt-4 border-t border-blue-100">
                    *Amounts may vary slightly based on market conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
