import { useState, useEffect } from "react";
import Card1 from "../assets/images/Card-1.png";
import Card2 from "../assets/images/card-2.png";
import Card3 from "../assets/images/card-3.png";

export default function FeeStructure() {
  const [data, setData] = useState(null); // store fx and fees
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fees = [{ image: Card1 }, { image: Card2 }, { image: Card3 }];

  // Fetch exchange rate & fees from backend
  useEffect(() => {
    const fetchExchangeData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://swaptagbackend.onrender.com/api/exchange",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              from_currency: "USD",
              to_currency: "NGN",
              amount: 100,
            }),
          }
        );

        if (!response.ok) throw new Error("Failed to fetch data from backend");

        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("Backend fetch failed:", err);
        setError("Unable to fetch exchange rate and fees. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeData();
  }, []);

  // Example calculator function (for testing)
  const simulateSwap = async (amount = 200, from = "USD", to = "NGN") => {
    try {
      const response = await fetch(
        "https://swaptagbackend.onrender.com/api/exchange",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ from_currency: from, to_currency: to, amount }),
        }
      );
      const result = await response.json();
      console.log("Calculator simulation result:", result);
    } catch (error) {
      console.error("Simulation failed:", error);
    }
  };

  return (
    <section
      id="features"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-blue-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-3">
            Simple Fee Structure
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Clear, competitive rates for all your currency exchange needs
          </p>

          {loading ? (
            <p className="text-gray-500 mt-2">Fetching current data...</p>
          ) : error ? (
            <p className="text-red-600 mt-2">{error}</p>
          ) : data ? (
            <div className="text-gray-700 mt-4 space-y-2">
              <p>
                💱 <strong>FX Rate:</strong> {data.fx_rate}
              </p>
              <p>
                💰 <strong>Service Fee:</strong> {data.service_fee}%
              </p>
              <p>
                🧾 <strong>Product Fee:</strong> {data.product_fee}%
              </p>
              <p>
                📊 <strong>Converted Amount:</strong>{" "}
                {data.converted_amount?.toLocaleString()}
              </p>
              <p>
                💵 <strong>Total Payable:</strong>{" "}
                {data.total_amount?.toLocaleString()}
              </p>
            </div>
          ) : null}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {fees.map((fee, index) => (
            <div
              key={index}
              className="rounded-2xl transition-all hover:-translate-y-1 flex flex-col items-center justify-center w-full h-80 bg-white shadow"
            >
              <img
                src={fee.image}
                alt={`Fee ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => simulateSwap(200, "USD", "NGN")}
            className="bg-blue-700 text-white px-6 py-2 rounded-xl hover:bg-blue-800 transition"
          >
            Test Calculator
          </button>
        </div>
      </div>
    </section>
  );
}
