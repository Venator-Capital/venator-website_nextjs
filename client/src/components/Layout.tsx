import { ReactNode, useState } from "react";
import SplashScreen from "./SplashScreen";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  // Temporarily disable splash screen
  // const [showSplash, setShowSplash] = useState(true);
  
  // return showSplash ? (
  //   <SplashScreen onFinish={() => setShowSplash(false)} />
  // ) : (
    return (
      <div className="min-h-screen bg-primary-black text-white overflow-x-hidden">
        <header>
          <Navbar />
        </header>
        <main id="main" role="main">{children}</main>
        <Footer />
      </div>
    );
  // );
}
