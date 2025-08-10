import Layout from "@/components/Layout";
import InteractivePortalHeroSection from "@/components/InteractivePortalHeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import UseCasesSection from "@/components/UseCasesSection";
import AboutSection from "@/components/AboutSection";
import TechPartnersSection from "@/components/TechPartnersSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <Layout>
      <InteractiveHeroSection />
      <CapabilitiesSection />
      <UseCasesSection />
      <TechPartnersSection />
      <FAQSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
}
