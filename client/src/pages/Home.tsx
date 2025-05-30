import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <ContactSection />
    </Layout>
  );
}
