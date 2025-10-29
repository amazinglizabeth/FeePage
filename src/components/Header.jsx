export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-linear-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg"></span>
            </div>
            <span className="font-bold text-xl text-gray-900">VitalSwap</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition"
            >
              Features
            </a>
            <a
              href="#calculator"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition"
            >
              Calculator
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition"
            >
              FAQs
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="text-gray-700 hover:text-gray-900 text-sm font-medium px-4 py-2 transition">
              Sign in
            </button>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition shadow-sm">
              Get started
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t pt-4">
            <a
              href="#features"
              className="block text-gray-600 hover:text-gray-900 text-sm font-medium py-2"
            >
              Features
            </a>
            <a
              href="#calculator"
              className="block text-gray-600 hover:text-gray-900 text-sm font-medium py-2"
            >
              Calculator
            </a>
            <a
              href="#pricing"
              className="block text-gray-600 hover:text-gray-900 text-sm font-medium py-2"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="block text-gray-600 hover:text-gray-900 text-sm font-medium py-2"
            >
              FAQs
            </a>
            <div className="flex gap-2 pt-2">
              <button className="flex-1 text-gray-700 border border-gray-300 rounded-lg py-2 text-sm font-medium">
                Sign in
              </button>
              <button className="flex-1 bg-blue-600 text-white rounded-lg py-2 text-sm font-semibold">
                Get started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
