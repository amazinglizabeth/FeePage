import { FaCalculator } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#0A0A23] text-white shadow-md">
      <div className="flex items-center gap-2">
        <FaCalculator className="text-[#FFD700]" size={24} />
        <h1 className="text-xl font-semibold">TadFinance Estimator</h1>
      </div>
      <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
        <li className="hover:text-[#FFD700] cursor-pointer transition">Home</li>
        <li className="hover:text-[#FFD700] cursor-pointer transition">
          About
        </li>
        <li className="hover:text-[#FFD700] cursor-pointer transition">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
