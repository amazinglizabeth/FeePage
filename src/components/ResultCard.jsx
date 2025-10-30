import { FaMoneyBillWave } from "react-icons/fa";

const ResultCard = ({ data }) => {
  if (!data) return null;

  const { industry, businessType } = data;

  return (
    <div
      id="result"
      className="bg-[#0A0A23] text-white rounded-2xl shadow-lg p-6 space-y-4"
    >
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <FaMoneyBillWave className="text-[#FFD700]" />
        Estimated Breakdown
      </h3>

      <div className="text-gray-300">
        <p>
          <span className="font-semibold text-white">Industry:</span> {industry}
        </p>
        <p>
          <span className="font-semibold text-white">Business Type:</span>{" "}
          {businessType}
        </p>
      </div>

      <div className="pt-4 border-t border-gray-700">
        <p className="text-[#FFD700] font-bold text-xl">₦120,000</p>
        <p className="text-gray-400 text-sm">Estimated total cost</p>
      </div>
    </div>
  );
};

export default ResultCard;
