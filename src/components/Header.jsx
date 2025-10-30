import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/images/swagtag.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F8FAFC] border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={Logo} alt="VitalSwap Logo" className="h-7 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {["Features", "Calculator", "Pricing", "FAQs"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[15px] font-medium text-gray-800 hover:text-[#2563EB] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-5 py-2.5 text-[14px] font-medium text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 transition-all">
              Sign in
            </button>
            <button className="px-5 py-2.5 text-[14px] font-semibold text-white bg-[#2563EB] rounded-md hover:bg-[#1E40AF] transition-all shadow-sm">
              Get started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-3 border-t border-gray-200 pt-4">
            {["Features", "Calculator", "Pricing", "FAQs"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-700 hover:text-blue-600 font-medium text-[15px]"
              >
                {item}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-3">
              <button className="w-full py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md">
                Sign in
              </button>
              <button className="w-full py-2 text-sm font-semibold text-white bg-[#2563EB] rounded-md hover:bg-[#1E40AF] transition-all">
                Get started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
