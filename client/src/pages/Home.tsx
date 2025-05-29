import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectGrid from "@/components/ProjectGrid";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProjectGrid />
      <ContactSection />
    </Layout>
  );
}
