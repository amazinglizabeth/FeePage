import { useState } from "react";

export default function ChatterBox() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      sender: "bot",
      text: "Hello! I'm your currency exchange assistant. I can help you with exchange rates, currency conversions, and answer questions about foreign exchange. Try asking me something like 'Convert 100 USD to EUR' or 'What's the exchange rate for GBP?'"
    }
  ]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMsg = { sender: "user", text: message };
    setChat([...chat, userMsg]);

    try {
      const res = await fetch("https://swaptagbackend.onrender.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: message })
      });

      const data = await res.json();
      const botMsg = { sender: "bot", text: data.response || "I couldn't process that." };
      setChat((prev) => [...prev, botMsg]);
    } catch (error) {
      const botMsg = { sender: "bot", text: "Network error. Please try again." };
      setChat((prev) => [...prev, botMsg]);
    }

    setMessage("");
  };

  return (
    <div className="w-full h-screen bg-white flex flex-col">
      <div className="bg-blue-700 text-white py-4 px-6 text-lg font-semibold shadow-sm">
        Currency Exchange Assistant
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-gray-50">
        {chat.map((msg, i) => (
          <div
            key={i}
            className={`max-w-xl p-3 rounded-lg text-sm leading-relaxed shadow-sm ${
              msg.sender === "bot"
                ? "bg-white text-gray-800 border border-gray-200"
                : "bg-blue-600 text-white ml-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="p-4 border-t bg-white flex space-x-3">
        <input
          type="text"
          placeholder="Ask me about currency exchange rates..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium"
        >
          Send
        </button>
      </div>
    </div>
  );
}

