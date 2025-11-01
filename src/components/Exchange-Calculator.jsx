import { useState } from "react";

export default function FeeCalculator() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("NGN");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCalculate = async () => {
    if (!amount) {
      setError("Please enter an amount");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("https://swaptagbackend.onrender.com/api/exchange", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from_currency: fromCurrency,
          to_currency: toCurrency,
          amount: parseFloat(amount),
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch calculation data");

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
  fetch("https://swaptagbackend.onrender.com/api/fees")
    .then(res => res.json())
    .then(data => setFxRate(data))
}, [])


  return (
    <section className="flex flex-col items-center p-6 bg-white shadow rounded-2xl max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Fee & FX Calculator</h2>

      <div className="w-full space-y-3">
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border p-2 rounded-lg"
        />

        <div className="flex gap-2">
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="flex-1 border p-2 rounded-lg"
          >
            <option>USD</option>
            <option>NGN</option>
            <option>GBP</option>
            <option>CAD</option>
          </select>

          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="flex-1 border p-2 rounded-lg"
          >
            <option>NGN</option>
            <option>USD</option>
            <option>GBP</option>
            <option>CAD</option>
          </select>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Calculating..." : "Calculate"}
        </button>

        {error && <p className="text-red-600 mt-2 text-sm">{error}</p>}

        {result && (
          <div className="mt-4 p-3 bg-gray-50 rounded-lg border">
            <p><strong>FX Rate:</strong> {result.fx_rate}</p>
            <p><strong>Service Fee:</strong> {result.service_fee}%</p>
            <p><strong>Product Fee:</strong> {result.product_fee}%</p>
            <p><strong>Converted Amount:</strong> {result.converted_amount}</p>
            <p><strong>Total Payable:</strong> {result.total_amount}</p>
          </div>
        )}
      </div>
    </section>
  );
}
