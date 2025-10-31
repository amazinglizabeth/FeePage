import { useState, useEffect } from "react";

export default function ExchangeCalculator() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("NGN");
  const [toCurrency, setToCurrency] = useState("USD");
  const [holdVital, setHoldVital] = useState(false);
  const [rates, setRates] = useState({});
  const [loadingRates, setLoadingRates] = useState(true); // Track loading

  // Fetch exchange rates from backend API
  useEffect(() => {
    fetch("https://2kbbumlxz3.execute-api.us-east-1.amazonaws.com/default/exchange?from=USD&to=NGN")
      .then((res) => res.json())
      .then((data) => {
        setRates(data);
        setLoadingRates(false); // API call completed
      })
      .catch((err) => {
        console.error("Failed to fetch rates:", err);
        setLoadingRates(false);
      });
  }, []);

  // Use backend rates or fallback
  const exchangeRate = !loadingRates
    ? rates[fromCurrency]?.[toCurrency] || 1
    : 1500; // Fallback to 1 while loading

  // Calculate fee and total
  const rawAmount = parseFloat(amount) || 0;
  const baseFee = rawAmount * 0.02;
  const fee = holdVital ? baseFee * 0.5 : baseFee;
  const received = (rawAmount - fee) * exchangeRate;

  return (
    <section id="calculator" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
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
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Currency Selection
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <select
                      value={fromCurrency}
                      onChange={(e) => setFromCurrency(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="NGN">Nigerian Naira (₦)</option>
                      <option value="USD">US Dollar ($)</option>
                      <option value="EUR">Euro (€)</option>
                    </select>

                    <select
                      value={toCurrency}
                      onChange={(e) => setToCurrency(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="USD">US Dollar ($)</option>
                      <option value="NGN">Nigerian Naira (₦)</option>
                      <option value="EUR">Euro (€)</option>
                    </select>
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

                  {loadingRates ? (
                    <p className="text-gray-500">Loading rates...</p>
                  ) : (
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Exchange Rate:</span>
                        <span className="font-semibold text-blue-700">
                          1 {fromCurrency} = {exchangeRate.toFixed(6)} {toCurrency}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Exchange Fee:</span>
                        <span className="font-semibold text-blue-600">
                          {fromCurrency === "NGN" ? "₦" : fromCurrency === "USD" ? "$" : "€"}
                          {fee.toFixed(2)}
                        </span>
                      </div>
                      <div className="pt-4 border-t border-blue-200">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-gray-800">You'll Receive:</span>
                          <span className="text-2xl font-bold text-green-600">
                            {toCurrency === "NGN" ? "₦" : toCurrency === "USD" ? "$" : "€"}
                            {received.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

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
