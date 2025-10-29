function ExchangeCalculator() {
  const [amount, setAmount] = useState("1000");
  const exchangeRate = 0.98;
  const fee = Number.parseFloat(amount) * 0.02;
  const received = Number.parseFloat(amount) * exchangeRate;

  return (
    <section
      id="calculator"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Exchange Calculator
          </h2>
          <p className="text-gray-600 text-base">
            Calculate your exchange amount and see fees instantly
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Amount (NGN)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 text-lg font-medium transition"
                placeholder="Enter amount"
              />
              <p className="text-sm text-gray-500 mt-2 font-medium">NGN</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                To Amount
              </label>
              <input
                type="number"
                value={received.toFixed(2)}
                readOnly
                className="w-full px-5 py-4 border-2 border-gray-100 rounded-xl bg-gray-50 text-lg font-medium"
              />
              <p className="text-sm text-gray-500 mt-2 font-medium">
                USD • 1 NGN = 0.0012 USD
              </p>
            </div>
          </div>

          <div className="pt-8 border-t-2 border-gray-100">
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-xs text-gray-600 mb-2 font-medium uppercase tracking-wide">
                    Exchange Summary
                  </p>
                  <p className="text-sm font-bold text-gray-900">
                    1 USD = 1,600 NGR
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-2 font-medium uppercase tracking-wide">
                    Fee Amount
                  </p>
                  <p className="text-sm font-bold text-gray-900">
                    ₦{fee.toFixed(2)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-2 font-medium uppercase tracking-wide">
                    You'll Receive
                  </p>
                  <p className="text-sm font-bold text-green-600">
                    ${received.toFixed(2)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-2 font-medium uppercase tracking-wide">
                    Total Savings
                  </p>
                  <p className="text-sm font-bold text-green-600">$0.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
