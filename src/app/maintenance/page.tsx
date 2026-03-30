import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Maintenance | Venator Capital LLC",
  robots: { index: false, follow: false, nocache: true },
  description: "Our site is temporarily under maintenance while we upgrade the experience.",
};

export default function MaintenancePage() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center section-primary text-white px-6">
      <div className="text-center max-w-2xl">
        <div className="mx-auto mb-8 h-20 w-20 rounded-full glass-effect flex items-center justify-center">
          <span className="inline-block h-10 w-10 rounded-full bg-accent-blue animate-pulse-glow" />
        </div>
        <h1 className="gradient-text hero-text-shadow text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Our site is undergoing maintenance
        </h1>
        <p className="text-base md:text-lg text-silver-gray mb-8">
          We’re updating the experience to better serve you. Please check back soon. Thank you for your patience.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            href="mailto:info@venator-capital.com"
            className="px-5 py-3 rounded-md bg-accent-gold text-primary-black font-semibold hover:opacity-90 transition"
          >
            Contact us
          </Link>
          <Link
            href="/"
            className="px-5 py-3 rounded-md border hover:bg-white/10 transition"
          >
            Home
          </Link>
        </div>

        <div className="mt-10 text-sm text-[oklch(var(--muted-foreground))]">
          <span className="status-badge status-in-progress">Scheduled Update</span>
        </div>
      </div>
    </main>
  );
}


