'use client';

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center px-4">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-teal-400/10 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-teal-400">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="m9 9 6 6"></path>
            <path d="m15 9-6 6"></path>
          </svg>
        </div>
        <h1 className="text-6xl font-bold mb-4 text-white">404</h1>
        <h2 className="text-2xl font-semibold mb-4 text-teal-400">{t('404.title')}</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">{t('404.description')}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-400 text-black font-medium rounded-full hover:bg-teal-300 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9,22 9,12 15,12 15,22"></polyline>
            </svg>
            {t('404.returnHome')}
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-gray-100 font-medium rounded-full hover:bg-white/5 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            {t('404.goBack')}
          </button>
        </div>
      </div>
    </div>
  );
}