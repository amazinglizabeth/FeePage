function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What are the exchange fees?",
      answer:
        "Our exchange fees vary based on your trading volume and account tier. Standard fees start at 2% and decrease with higher volumes.",
    },
    {
      question: "Is my transaction secure?",
      answer:
        "Yes, we use industry-leading encryption and security protocols to protect all transactions and personal information.",
    },
    {
      question: "How long does the exchange take?",
      answer:
        "Most exchanges are completed within 5-10 minutes. However, network conditions may affect processing times.",
    },
    {
      question: "What are the minimum and maximum exchange limits?",
      answer:
        "Minimum exchange is $10 and maximum depends on your verification level, ranging from $1,000 to $100,000 per transaction.",
    },
    {
      question: "What if the exchange rate changes during my transaction?",
      answer:
        "The rate is locked for 2 minutes once you initiate a transaction, protecting you from rate fluctuations.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-base">
            Find the answers you're looking for
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <span className="text-left font-semibold text-gray-900 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  {faq.question}
                </span>
                <div
                  className={`w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 pt-2 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed pl-10">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
