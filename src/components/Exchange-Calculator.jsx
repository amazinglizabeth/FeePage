import { useState, useEffect } from "react";

export default function ExchangeCalculator() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("NGN");
  const [holdVital, setHoldVital] = useState(false);
  const [exchangeData, setExchangeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch exchange rate dynamically from backend
  const fetchExchangeData = async (amt = amount, from = fromCurrency, to = toCurrency) => {
    if (!amt || isNaN(amt) || parseFloat(amt) <= 0) {
      setExchangeData(null);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from_currency: from,
          to_currency: to,
          amount: parseFloat(amt),
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch exchange data.");

      const result = await response.json();
      setExchangeData(result);
    } catch (err) {
      console.error("Backend fetch failed:", err);
      setError("Unable to fetch exchange rate. Try again later.");
      setExchangeData(null);
    } finally {
      setLoading(false);
    }
  };

  // Refetch data on amount or currency changes
  useEffect(() => {
    fetchExchangeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount, fromCurrency, toCurrency]);

  // Swap currencies handler
  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // Calculation based on API data and VITAL token discount
  const baseAmount = parseFloat(amount) || 0;
  const serviceFeePercent = exchangeData?.service_fee || 0;
  const productFeePercent = exchangeData?.product_fee || 0;
  const totalFeePercent = serviceFeePercent + productFeePercent;
  const totalFee = holdVital
    ? (baseAmount * totalFeePercent) / 200 // 50% discount
    : (baseAmount * totalFeePercent) / 100;
  const fxRate = exchangeData?.fx_rate || 1;
  const received = exchangeData?.converted_amount
    ? exchangeData.converted_amount
    : (baseAmount - totalFee) * fxRate;

  // Helper to get currency symbol
  const getSymbol = (currency) =>
    currency === "NGN" ? "₦" : currency === "USD" ? "$" : "€";

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
                  <input
                    type="number"
                    min="0"
                    step="any"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>

                <div className="mb-8 relative">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Currency Selection
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <select
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
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

                    <div className="relative">
                      <select
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
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

                  {/* Swap Button */}
                  <button
                    onClick={handleSwap}
                    className="absolute right-1/2 translate-x-1/2 -bottom-6 bg-blue-600 text-white rounded-full p-2 shadow-lg hover:bg-blue-700 transition-transform hover:scale-105"
                    title="Swap Currencies"
                  >
                    🔁
                  </button>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl border border-blue-100 mt-10">
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

                  {loading ? (
                    <p className="text-gray-500">Fetching exchange data...</p>
                  ) : error ? (
                    <p className="text-red-600">{error}</p>
                  ) : exchangeData ? (
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Exchange Rate:</span>
                        <span className="font-semibold text-blue-700">
                          1 {fromCurrency} = {fxRate.toFixed(6)} {toCurrency}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Service Fee:</span>
                        <span className="font-semibold text-blue-600">
                          {serviceFeePercent.toFixed(2)}%
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Product Fee:</span>
                        <span className="font-semibold text-blue-600">
                          {productFeePercent.toFixed(2)}%
                        </span>
                      </div>

                      <div className="pt-4 border-t border-blue-200">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-gray-800">
                            You'll Receive:
                          </span>
                          <span className="text-2xl font-bold text-green-600">
                            {getSymbol(toCurrency)}
                            {received.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500">Enter amount to calculate exchange.</p>
                  )}

                  <p className="text-xs text-gray-500 italic mt-6 pt-4 border-t border-blue-100">
                    *Amounts may vary slightly based on live market data.
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
