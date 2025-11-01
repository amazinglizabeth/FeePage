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
    if (!amt || isNaN(amt)) return;
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://swaptagbackend.onrender.com/api/exchange", {
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
    } finally {
      setLoading(false);
    }
  };

  // Re-fetch data whenever amount or currency changes
  useEffect(() => {
    if (amount) {
      fetchExchangeData();
    }
  }, [amount, fromCurrency, toCurrency]);

  // Handle calculations
  const fxRate = exchangeData?.fx_rate || 1;
  const serviceFee = exchangeData?.service_fee || 0;
  const productFee = exchangeData?.product_fee || 0;
  const baseAmount = parseFloat(amount) || 0;
  const totalFee = holdVital
    ? (baseAmount * (serviceFee + productFee)) / 200 // 50% discount
    : (baseAmount * (serviceFee + productFee)) / 100;

  const received = exchangeData?.converted_amount
    ? exchangeData.converted_amount
    : (baseAmount - totalFee) * fxRate;

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
                      <option value="USD">US Dollar ($)</option>
                      <option value="NGN">Nigerian Naira (₦)</option>
                      <option value="EUR">Euro (€)</option>
                    </select>

                    <select
                      value={toCurrency}
                      onChange={(e) => setToCurrency(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="NGN">Nigerian Naira (₦)</option>
                      <option value="USD">US Dollar ($)</option>
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

                  {loading ? (
                    <p className="text-gray-500">Fetching exchange data...</p>
                  ) : error ? (
                    <p className="text-red-600">{error}</p>
                  ) : exchangeData ? (
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">FX Rate:</span>
                        <span className="font-semibold text-blue-700">
                          1 {fromCurrency} = {fxRate?.toFixed(3)} {toCurrency}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Service Fee:</span>
                        <span className="font-semibold text-blue-600">
                          {serviceFee}%
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Product Fee:</span>
                        <span className="font-semibold text-blue-600">
                          {productFee}%
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
                            {received.toLocaleString(undefined, {
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500">
                      Enter amount to calculate exchange.
                    </p>
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
