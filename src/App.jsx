import Header from "@/components/Header.jsx";
import Hero from "@/components/Hero.jsx";
import FeeStructure from "@/components/Fee-Structure.jsx";
import ExchangeCalculator from "@/components/Exchange-Calculator.jsx";
import WhereYourFeesGo from "@/components/Where-your-fees-go.jsx";
import FAQ from "@/components/FAQ.jsx";
import Referrals from "@/components/Referrals.jsx";
import CTA from "@/components/Cta.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeeStructure />
      <ExchangeCalculator />
      <WhereYourFeesGo />
      <FAQ />
      <Referrals />
      <CTA />
    </div>
  );
}
