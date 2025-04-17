
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TapOnPhoneSection } from "@/components/TapOnPhoneSection";
import { ChallengesSection } from "@/components/ChallengesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PartnersSection } from "@/components/PartnersSection";
import { InspiringCallSection } from "@/components/InspiringCallSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <TapOnPhoneSection />
      <ChallengesSection />
      <ServicesSection />
      <PartnersSection />
      <InspiringCallSection />
      <Footer />
    </div>
  );
};

export default Index;
