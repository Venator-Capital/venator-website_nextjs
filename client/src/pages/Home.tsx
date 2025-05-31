import { useState } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import UseCasesSection from "@/components/UseCasesSection";
import AboutSection from "@/components/AboutSection";
import TechPartnersSection from "@/components/TechPartnersSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <Layout>
      <HeroSection />
      <CapabilitiesSection />
      <UseCasesSection />
      <TechPartnersSection />
      <FAQSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
}
