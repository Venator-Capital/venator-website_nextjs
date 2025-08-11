import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-primary-black text-white overflow-x-hidden">
      <a href="#main" className="skip-link">Skip to main content</a>
      <header>
        <Navbar />
      </header>
      <main id="main" role="main">{children}</main>
      <Footer />
    </div>
  );
}