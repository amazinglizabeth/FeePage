import { useState } from "react";
import Send from "../assets/icons/send.png";

const CurrencyExchangeAssistant = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      // Handle sending message logic here
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-5">
      {/* Header */}
      <div className="bg-white shadow-sm py-4 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800">
            Currency Exchange Assistant
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-gray-500">Powered by AI</span>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
              - Resistive rates
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto py-6 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Message */}
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-6 max-w-2xl border border-gray-100">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">AI</span>
              </div>
              <div className="flex-1">
                <p className="text-gray-800 mb-3">
                  Hello! I'm your currency exchange assistant. I can help you
                  with exchange rates, currency conversions, and answer
                  questions about foreign exchange. Try asking me something like
                  "Convert 100 USD to EUR" or "What's the exchange rate for
                  GBP?"
                </p>
                <div className="text-right">
                  <span className="text-xs text-gray-500">11:58 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Suggestions */}
          <div className="text-center mb-8">
            <p className="text-gray-600 mb-4">
              Ask me about currency exchange rates...
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                Try "Convert 100 USD to EUR"
              </button>
              <button className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                or "What's the GBP rate?"
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 py-4 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-gray-100 rounded-2xl px-4 py-3 border border-gray-200 outline-none focus-within:outline-none">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="w-full bg-transparent border-none outline-none focus:ring-1 focus:ring-blue-500 text-gray-800 placeholder-gray-500"
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!message.trim()}
              className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            >
              {/* Using send.png image */}
              <img
                src={Send}
                alt="Send"
                className="w-5 h-5"
                onError={(e) => {
                  e.target.style.display = "none";
                  const fallback = e.target.nextElementSibling;
                  if (fallback) fallback.style.display = "block";
                }}
              />
              {/* Fallback SVG */}
              <svg
                className="w-5 h-5 hidden"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyExchangeAssistant;
