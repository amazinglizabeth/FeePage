import Header from "@/components/Header.jsx";
import Hero from "@/components/Hero.jsx";
import FeeStructure from "@/components/Fee-Structure.jsx";
import ExchangeCalculator from "@/components/Exchange-Calculator.jsx";
import VirtualCard from "@/components/VirtualCard.jsx";
import WhereYourFeesGo from "@/components/Where-your-fees-go.jsx";
import FAQ from "@/components/FAQ.jsx";
import Referrals from "@/components/Referrals.jsx";
import Testimonials from "@/components/Testimonials";
import TrustLogo from "./components/TrustLogo";
import Cta from "@/components/Cta.jsx";
import Footer from "@/components/Footer.jsx";
import ChatterBox from "./components/ChatterBox";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeeStructure />
      <ExchangeCalculator />
      <VirtualCard />
      <WhereYourFeesGo />
      <FAQ />
      <Referrals />
      <Testimonials />
      <TrustLogo />
      <ChatterBox />
      <Cta />
      <Footer />
    </div>
  );
}
