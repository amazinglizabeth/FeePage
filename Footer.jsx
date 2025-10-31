export default function Footer() {
  return (
    <footer className="bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto py-20">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          {/* Logo and Tagline */}
          <div className="mb-6 lg:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">VitalSwap</h2>
            <p className="text-white text-sm">
              Simple, transparent currency exchange for everyone.
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Product Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#features"
                  className="text-white hover:text-gray-300 hover:underline text-sm"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#calculator"
                  className="text-white hover:text-gray-300 hover:underline text-sm"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#result"
                  className="text-white hover:text-gray-300 hover:underline text-sm"
                >
                  Result card
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-white mb-4 ">Company</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 hover:underline  text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 hover:underline  text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray- hover:underline  text-sm"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 hover:underline  text-sm"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 hover:underline  text-sm"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 hover:underline text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Copyright */}
      <div className="pt-8 border-t border-gray-200 pb-5">
        <p className="text-white text-sm text-center lg:text-left">
          © 2025 VitalSwap. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
