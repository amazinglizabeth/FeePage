import { useState } from "react";

export default function ExchangeCalculator() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("NGN");
  const [holdVital, setHoldVital] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const BACKEND_URL = "https://swaptagbackend.onrender.com/api/Exchange";

  // Call backend /api/simulate when user clicks "Calculate"
  async function handleCalculate() {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: parseFloat(amount),
          from: fromCurrency,
          to: toCurrency
        }),
      });

      if (!res.ok) throw new Error("Backend error");

      const data = await res.json();

      // Apply VITAL discount client-side (optional)
      if (holdVital && data.fee_details) {
        data.fee_details.total_fee *= 0.5;
        data.converted_amount =
          (data.input.amount - data.fee_details.total_fee) *
          data.exchange_rate;
      }

      setResult(data);
    } catch (err) {
      console.error("Simulation failed:", err);
      setError("Failed to fetch simulation data");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="calculator"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-800 mb-4">
            Exchange Calculator
          </h2>
          <p className="text-gray-600 text-md sm:text-xl">
            Estimate your exchange and see fees in real time
          </p>
        </div>

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

                <button
                  onClick={handleCalculate}
                  disabled={!amount || loading}
                  className="mt-8 w-full py-4 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 transition"
                >
                  {loading ? "Calculating..." : "Calculate Exchange"}
                </button>

                {error && (
                  <p className="text-red-500 text-sm mt-4">{error}</p>
                )}
              </div>

              {/* Divider */}
              <div className="hidden lg:block border-l border-gray-200"></div>

              {/* Right Side - Results */}
              <div className="lg:w-2/5">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 shadow-sm h-full">
                  <h3 className="text-xl font-bold text-blue-900 mb-6 pb-3 border-b border-blue-200">
                    Exchange Summary
                  </h3>

                  {!result ? (
                    <p className="text-gray-500">
                      {loading ? "Calculating..." : "Enter details and click Calculate"}
                    </p>
                  ) : (
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Exchange Rate:</span>
                        <span className="font-semibold text-blue-700">
                          1 {fromCurrency} = {result.exchange_rate.toFixed(3)}{" "}
                          {toCurrency}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Total Fee:</span>
                        <span className="font-semibold text-blue-600">
                          {fromCurrency === "NGN"
                            ? "₦"
                            : fromCurrency === "USD"
                            ? "$"
                            : "€"}
                          {result.fee_details.total_fee.toFixed(2)}
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
                            {result.converted_amount.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  <p className="text-xs text-gray-500 italic mt-6 pt-4 border-t border-blue-100">
                    *Estimates are based on live VitalSwap rates and may vary slightly.
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
