import { useState } from "react";

export default function ChatterBox() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      sender: "bot",
      text: "👋 Hi there! I'm VitalSwap Assistant. Ask me about currency exchange, fees, or conversions — for example: 'Convert 100 USD to NGN' or 'What's the service fee?'",
    },
  ]);

  // --- HARDCODED BOT REPLIES ---
  const mockResponses = [
    { keywords: ["hello", "hi", "hey"], reply: "Hello! How can I help you today with your exchange or fee questions?" },
    { keywords: ["rate", "exchange"], reply: "Our current USD→NGN exchange rate is approximately ₦1,480 per $1." },
    { keywords: ["fee", "charge"], reply: "We charge a small service fee of around 1.5% plus a product fee of 0.5%. Holding VITAL tokens gives you 50% off!" },
    { keywords: ["usd", "ngn", "convert"], reply: "If you convert $100 USD to NGN, you’ll receive approximately ₦148,000 after fees." },
    { keywords: ["vital", "token"], reply: "Holding VITAL tokens gives you a 50% discount on fees — it’s our loyalty program perk!" },
    { keywords: ["thank", "thanks"], reply: "You’re welcome! 😊 Anything else you'd like to know?" },
  ];

  const getMockReply = (msg) => {
    const lower = msg.toLowerCase();
    for (const item of mockResponses) {
      if (item.keywords.some((kw) => lower.includes(kw))) {
        return item.reply;
      }
    }
    return "I’m not sure about that yet — try asking about exchange rates, fees, or conversions.";
  };

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMsg = { sender: "user", text: message };
    setChat((prev) => [...prev, userMsg]);

    // 1️⃣ Immediate hardcoded mock response
    const mockReply = getMockReply(message);
    const botMsg = { sender: "bot", text: mockReply };
    setChat((prev) => [...prev, botMsg]);

    // 2️⃣ Optional: Still send to backend for real response
    try {
      const res = await fetch("https://swaptagbackend.onrender.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          swap_tag: "TEAMEX",
          history: [],
        }),
      });

      const data = await res.json();

      if (data.reply) {
        const liveBotMsg = { sender: "bot", text: data.reply };
        setChat((prev) => [...prev, liveBotMsg]);
      }
    } catch (error) {
      console.error("Chat fetch failed:", error);
    }

    setMessage("");
  };

  return (
    <div className="w-full h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-blue-700 text-white py-4 px-6 text-lg font-semibold shadow-sm">
        💬 VitalSwap Assistant
      </div>

      {/* Chat Display */}
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

      {/* Input Box */}
      <div className="p-4 border-t bg-white flex space-x-3">
        <input
          type="text"
          placeholder="Ask me about exchange rates, fees, or conversions..."
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
