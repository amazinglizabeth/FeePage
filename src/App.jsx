import Header from "@/components/Header.jsx";
import Hero from "@/components/Hero.jsx";
import FeeStructure from "@/components/FeeStructure.jsx";
import ExchangeCalculator from "@/components/ExchangeCalculator.jsx";
import WhereYourFeesGo from "@/components/WhereYourFeesGo.jsx";
import FAQ from "@/components/FAQ.jsx";
import Referrals from "@/components/Referrals.jsx";
import CTA from "@/components/CTA.jsx";

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
