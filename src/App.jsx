import Header from "@/components/Header";
import Hero from "@/components/hero";
import FeeStructure from "@/components/fee-structure";
import ExchangeCalculator from "@/components/exchange-calculator";
import WhereYourFeesGo from "@/components/where-your-fees-go";
import FAQ from "@/components/faq";
import Referrals from "@/components/referrals";
import CTA from "@/components/cta";

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
