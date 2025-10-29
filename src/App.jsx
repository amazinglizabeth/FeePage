import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeeStructure from "@/components/FeeStructure";
import ExchangeCalculator from "@/components/ExchangeCalculator";
import WhereYourFeesGo from "@/components/WhereYourFeesGo";
import FAQ from "@/components/FAQ";
import Referrals from "@/components/Referrals";
import CTA from "@/components/CTA";

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
