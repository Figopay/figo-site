
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CounterStats } from "@/components/CounterStats";
import { AboutSection } from "@/components/AboutSection";
import { FigoWaySection } from "@/components/FigoWaySection";
import { ChallengesSection } from "@/components/ChallengesSection";
import { TapOnPhoneSection } from "@/components/TapOnPhoneSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PartnersSection } from "@/components/PartnersSection";
import { InspiringCallSection } from "@/components/InspiringCallSection";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CounterStats />
      <AboutSection />
      <FigoWaySection />
      <ChallengesSection />
      <TapOnPhoneSection />
      <ServicesSection />
      <PartnersSection />
      <InspiringCallSection />
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
