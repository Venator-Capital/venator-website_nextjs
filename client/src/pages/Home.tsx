import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import UseCasesSection from "@/components/UseCasesSection";
import TechStackSection from "@/components/TechStackSection";
import AboutSection from "@/components/AboutSection";
import TechPartnersSection from "@/components/TechPartnersSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <CapabilitiesSection />
      <UseCasesSection />
      <TechStackSection />
      <AboutSection />
      <TechPartnersSection />
      <FAQSection />
      <ContactSection />
    </Layout>
  );
}
