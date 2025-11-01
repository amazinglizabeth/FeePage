import { useState, useEffect } from "react";
import Card1 from "../assets/images/Card-1.png";
import Card2 from "../assets/images/card-2.png";
import Card3 from "../assets/images/card-3.png";

export default function FeeStructure() {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch("https://swaptagbackend.onrender.com/api/exchange");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setRates(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Unable to fetch exchange rate. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  if (loading) return <p>Loading exchange rates...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section id="features" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Exchange Rates</h2>
        <pre className="bg-white p-4 rounded-2xl shadow-md text-left overflow-x-auto">
          {JSON.stringify(rates, null, 2)}
        </pre>
      </div>
    </section>
  );
}
