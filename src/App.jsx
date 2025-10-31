import Header from "@/components/Header.jsx";
import Hero from "@/components/Hero.jsx";
import FeeStructure from "@/components/Fee-Structure.jsx";
import ExchangeCalculator from "@/components/Exchange-Calculator.jsx";
import WhereYourFeesGo from "@/components/Where-your-fees-go.jsx";
import FAQ from "@/components/FAQ.jsx";
import Referrals from "@/components/Referrals.jsx";
import Cta from "@/components/Cta.jsx";
import CurrencyExchangeAssistant from "@/components/CurrencyExchangeAssistant.jsx";
import Footer from "@/components/Footer.jsx";
import Testimonials from "@/components/Testimonials.jsx";
import VirtualCard from "@/components/VirtualCard.jsx";
import TrustLogo from "@/components/TrustLogo.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeeStructure />
      <TrustLogo />
      <ExchangeCalculator />
      <VirtualCard />
      <WhereYourFeesGo />
      <FAQ />
      <Referrals />
      <Testimonials />
      <CurrencyExchangeAssistant />
      <Cta />
      <Footer />
    </div>
  );
}
