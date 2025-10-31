import { useState, useEffect } from "react";
import Card1 from "../assets/images/Card-1.png";
import Card2 from "../assets/images/card-2.png";
import Card3 from "../assets/images/card-3.png";

export default function FeeStructure() {
  const [rate, setRate] = useState(null); // store exchange rate
  const [loading, setLoading] = useState(true);

  const fees = [{ image: Card1 }, { image: Card2 }, { image: Card3 }];

  // Fetch exchange rate from backend
  useEffect(() => {
    fetch(
      "https://2kbbumlxz3.execute-api.us-east-1.amazonaws.com/default/exchange?from=USD&to=NGN"
    )
      .then((res) => res.json())
      .then((data) => {
        // assuming API returns { rate: <number> }
        setRate(data.rate || 0);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch rate:", err);
        setLoading(false);
      });
  }, []);

  // Example: simulate a swap (you can call this on demand)
  const simulateSwap = async (amount = 100, from = "USD", to = "NGN", swap_tag) => {
    try {
      const response = await fetch(
        "https://swaptagbackend.onrender.com/api/simulate",

        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount, from, to, swap_tag })
        }
      );
      const result = await response.json();
      console.log("Swap simulation:", result);
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
            <p className="text-gray-500 mt-2">Fetching current exchange rate...</p>
          ) : (
            <p className="text-gray-700 mt-2">
              Current USD → NGN Rate: <strong>{rate}</strong>
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {fees.map((fee, index) => (
            <div
              key={index}
              className="rounded-2xl transition-all hover:-translate-y-1 flex flex-col items-center justify-center w-full h-80"
            >
              <img
                src={fee.image}
                alt={`Fee ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
