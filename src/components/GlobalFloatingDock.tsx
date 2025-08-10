'use client';

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconSettings,
  IconBriefcase,
  IconCpu,
  IconHelpCircle,
  IconInfoCircle,
  IconMail,
  IconFileText,
  IconScale,
  IconBuildingSkyscraper,
} from "@tabler/icons-react";

export default function GlobalFloatingDock() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const dockItems = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full" />,
      href: "/",
      ariaLabel: "Home",
      onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    },
    {
      title: "Capabilities",
      icon: <IconSettings className="h-full w-full" />,
      href: "#capabilities",
      ariaLabel: "Capabilities",
      onClick: () => scrollToSection('capabilities'),
    },
    {
      title: "Use Cases",
      icon: <IconBriefcase className="h-full w-full" />,
      href: "#use-cases",
      ariaLabel: "Use Cases",
      onClick: () => scrollToSection('use-cases'),
    },
    {
      title: "Technology",
      icon: <IconCpu className="h-full w-full" />,
      href: "#tech-partners",
      ariaLabel: "Technology",
      onClick: () => scrollToSection('tech-partners'),
    },
    {
      title: "FAQ",
      icon: <IconHelpCircle className="h-full w-full" />,
      href: "#faq",
      ariaLabel: "FAQ",
      onClick: () => scrollToSection('faq'),
    },
    {
      title: "About",
      icon: <IconInfoCircle className="h-full w-full" />,
      href: "#about",
      ariaLabel: "About",
      onClick: () => scrollToSection('about'),
    },
    {
      title: "Contact",
      icon: <IconMail className="h-full w-full" />,
      href: "#contact",
      ariaLabel: "Contact",
      onClick: () => scrollToSection('contact'),
    },
    {
      title: "Privacy Policy",
      icon: <IconFileText className="h-full w-full" />,
      href: "/privacy",
      ariaLabel: "Privacy Policy",
    },
    {
      title: "Terms of Service",
      icon: <IconScale className="h-full w-full" />,
      href: "/terms",
      ariaLabel: "Terms of Service",
    },
    {
      title: "Enterprise Contact",
      icon: <IconBuildingSkyscraper className="h-full w-full" />,
      href: "https://forms.gle/iBogvoWnzHyXYQ2X8",
      ariaLabel: "Enterprise Contact",
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] pointer-events-auto">
      <nav aria-label="Main Dock Navigation">
        <div 
          className="backdrop-blur-md border border-neutral-700/50 rounded-full p-3 shadow-2xl"
          style={{
            background: 'linear-gradient(to top, #0f0f0f, #1a1a1a)',
            boxShadow: '0 0 20px rgba(255,255,255,0.15), 0 8px 32px rgba(0,0,0,0.5)',
          }}
        >
          <div className="overflow-x-auto scrollbar-hide max-w-[90vw] md:max-w-none">
            <FloatingDock 
              items={dockItems} 
              desktopClassName="gap-3 dock-no-wrap"
              mobileClassName="gap-3 dock-no-wrap"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}