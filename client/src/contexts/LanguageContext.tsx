import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.capabilities': 'Capabilities',
    'nav.useCases': 'Use Cases',
    'nav.technology': 'Technology',
    'nav.faq': 'FAQ',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.title': 'Turn Your Historical Data into Real-Time Decisions',
    'hero.subtitle': 'Custom AI Solutions for Retail, Manufacturing, and Finance',
    'hero.description': 'We build end-to-end ML pipelines that transform your existing data into actionable insights. From predictive analytics to automated decision-making, our solutions deliver measurable results.',
    'hero.cta.capabilities': 'Explore Our Capabilities',
    'hero.cta.contact': 'Start Your AI Journey',

    // Capabilities Section
    'capabilities.title': 'Capabilities',
    'capabilities.subtitle': 'Advanced AI solutions designed to transform your business operations',
    'capabilities.aiSystem.title': 'AI & Machine Learning Solutions',
    'capabilities.aiSystem.description': 'Design, develop, and deploy custom AI/ML applications tailored to your business needs.',
    'capabilities.dataAnalytics.title': 'Data Analytics & Automation',
    'capabilities.dataAnalytics.description': 'Collect, analyze, and automate data workflows using advanced analytics and AI-driven processes.',
    'capabilities.digitalMedia.title': 'Digital Media & Web Platforms',
    'capabilities.digitalMedia.description': 'Create and manage scalable web and media platforms enhanced with AI functionalities.',
    'capabilities.enterprise.title': 'Enterprise AI Integration & Consulting',
    'capabilities.enterprise.description': 'Architect and implement enterprise-grade AI systems, and provide strategic consulting.',

    // Use Cases Section
    'useCases.title': 'Real Client Results',
    'useCases.subtitle': 'Proven AI implementations delivering measurable business impact',
    'useCases.retail.title': 'Retail Demand Forecasting for 150-Store Chain',
    'useCases.retail.description': 'Built predictive models analyzing 3 years of sales data across seasonal patterns. Reduced stockouts by 27% and improved inventory turnover.',
    'useCases.manufacturing.title': 'Real-Time Defect Detection for Manufacturing Line',
    'useCases.manufacturing.description': 'Computer vision system identifying product defects at 99.2% accuracy. Eliminated manual inspection bottlenecks, saving $180K annually.',
    'useCases.support.title': 'Automated Support Ticket Triage via NLP',
    'useCases.support.description': 'AI system categorizing and routing 5,000+ monthly support tickets. Reduced response time from 4 hours to 15 minutes.',
    'useCases.energy.title': 'Energy Usage Prediction for Smart Grid',
    'useCases.energy.description': 'Time-series models forecasting electricity demand with 94% accuracy. Optimized energy distribution and reduced peak-load costs by 22%.',
    'useCases.finance.title': 'Risk Model Deployment for Financial Services',
    'useCases.finance.description': 'MLOps pipeline for credit risk assessment. Automated model updates and monitoring, processing 10,000+ applications daily.',

    // Technology Partners Section
    'techPartners.title': 'Technology Partners',
    'techPartners.subtitle': 'Collaborating with industry leaders to deliver cutting-edge AI solutions',

    // FAQ Section
    'faq.title': 'FAQ',
    'faq.subtitle': 'Frequently asked questions about our AI solutions and services',

    // About Section
    'about.title': 'About Venator Capital',
    'about.companyOverview': 'Company Overview',
    'about.ourMission': 'Our Mission',
    'about.coreValues': 'Our Core Values',
    'about.mission.text1': 'Founded with a clear mission to empower businesses through cutting-edge AI and automation, Venator Capital LLC has rapidly established itself as a trusted partner for organizations seeking to transform their operations.',
    'about.mission.text2': 'Although still a young company, our team has cultivated deep expertise across the entire AI lifecycle—from strategic consulting and system design to development, deployment, and ongoing maintenance.',
    'about.services.text': 'Over the past year, we have worked with more than 100 clients—both corporate and individual, domestic and overseas—providing tailored AI consulting, custom system design, and hands-on support. Our engagements span a wide range of industries: from large enterprises looking to integrate machine-learning models into legacy systems, to small teams seeking to replace manual workflows with intelligent automation.',
    'about.partnership': 'Venator Capital LLC is dedicated to becoming your long-term AI partner.',

    // Contact Section
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'We\'re currently exploring new partnerships, collaborators, and joint ventures. Feel free to reach out — our operations are always in motion.',
    'contact.sendEmail': 'Send Email',
    'contact.openForm': 'Open Contact Form',

    // Common
    'common.getInTouch': 'Get in Touch',
    'common.backToHome': 'Back to Home',
  },
  ja: {
    // Navigation
    'nav.capabilities': '機能',
    'nav.useCases': '事例',
    'nav.technology': '技術',
    'nav.faq': 'よくある質問',
    'nav.about': '会社概要',
    'nav.contact': 'お問い合わせ',

    // Hero Section
    'hero.title': 'AIを武器に',
    'hero.subtitle': '機械学習アプリケーションから自動化フレームワークまで、最先端のAIソリューションを設計します。',
    'hero.description': 'AIの導入段階に関係なく、ロードマップから本番環境まで、お客様をガイドします。AIスペシャリストが24時間以内にご連絡いたします。',
    'hero.cta.capabilities': '機能を詳しく見る',
    'hero.cta.contact': 'AIの旅を始める',

    // Capabilities Section
    'capabilities.title': '機能',
    'capabilities.subtitle': 'ビジネス運営を変革する高度なAIソリューション',
    'capabilities.aiSystem.title': 'AI・機械学習ソリューション',
    'capabilities.aiSystem.description': 'お客様のビジネスニーズに合わせたカスタムAI/MLアプリケーションの設計、開発、展開を行います。',
    'capabilities.dataAnalytics.title': 'データ分析・自動化',
    'capabilities.dataAnalytics.description': '高度な分析とAI駆動プロセスを使用して、データワークフローの収集、分析、自動化を行います。',
    'capabilities.digitalMedia.title': 'デジタルメディア・Webプラットフォーム',
    'capabilities.digitalMedia.description': 'AI機能で強化されたスケーラブルなWebおよびメディアプラットフォームの作成と管理を行います。',
    'capabilities.enterprise.title': 'エンタープライズAI統合・コンサルティング',
    'capabilities.enterprise.description': 'エンタープライズグレードのAIシステムの設計・実装、および戦略的コンサルティングを提供します。',

    // Use Cases Section
    'useCases.title': '事例',
    'useCases.subtitle': 'AIソリューションが複雑なビジネス課題をどのように解決するかを示す実世界のアプリケーション',
    'useCases.customAI.title': 'カスタムAIシステム設計',
    'useCases.customAI.description': '要件から本番稼働まで、企業固有の課題を解決するカスタムAIシステムを設計・開発します。',
    'useCases.integration.title': 'レガシーシステムへのAI統合',
    'useCases.integration.description': '既存のオンプレミスおよびクラウドシステムにAIモデルをシームレスに統合し、ビジネスプロセスを強化します。',
    'useCases.workflows.title': 'AI駆動自動化ワークフロー',
    'useCases.workflows.description': 'n8nやZapierを使用してAI推論を組み込んだインテリジェント自動化ワークフローを構築し、ビジネス運営を合理化します。',
    'useCases.analytics.title': '予測分析・予測',
    'useCases.analytics.description': '需要予測と故障検出のための時系列予測モデルを実装し、戦略的意思決定をサポートします。',
    'useCases.mlops.title': 'MLOps・モデル展開',
    'useCases.mlops.description': '継続的なモデル展開、監視、ライフサイクル管理のための堅牢なMLOpsパイプラインを構築します。',

    // Technology Partners Section
    'techPartners.title': '技術パートナー',
    'techPartners.subtitle': '業界のリーダーと協力して最先端のAIソリューションを提供',

    // FAQ Section
    'faq.title': 'よくある質問',
    'faq.subtitle': 'AIソリューションとサービスに関するよくある質問',

    // About Section
    'about.title': 'Venator Capitalについて',
    'about.companyOverview': '会社概要',
    'about.ourMission': '私たちのミッション',
    'about.coreValues': '私たちの核となる価値',
    'about.mission.text1': '最先端のAIと自動化を通じて企業に力を与えるという明確なミッションを持って設立されたVenator Capital LLCは、業務変革を求める組織の信頼できるパートナーとして急速に地位を確立しました。',
    'about.mission.text2': 'まだ若い会社ですが、私たちのチームは戦略的コンサルティングからシステム設計、開発、展開、継続的なメンテナンスまで、AIライフサイクル全体にわたって深い専門知識を培ってきました。',
    'about.services.text': '過去1年間で、国内外の法人・個人合わせて100以上のクライアントと協力し、カスタマイズされたAIコンサルティング、カスタムシステム設計、実践的なサポートを提供してきました。私たちの取り組みは幅広い業界にわたります：機械学習モデルをレガシーシステムに統合しようとする大企業から、手動ワークフローをインテリジェント自動化に置き換えようとする小規模チームまで。',
    'about.partnership': 'Venator Capital LLCは、お客様の長期的なAIパートナーになることに専念しています。',

    // Contact Section
    'contact.title': 'お問い合わせ',
    'contact.subtitle': '現在、新しいパートナーシップ、コラボレーター、ジョイントベンチャーを模索しています。お気軽にお声がけください。私たちの事業は常に動いています。',
    'contact.sendEmail': 'メールを送信',
    'contact.openForm': 'お問い合わせフォーム',

    // Common
    'common.getInTouch': 'お問い合わせ',
    'common.backToHome': 'ホームに戻る',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Check URL path first for language preference
    const path = window.location.pathname;
    if (path.startsWith('/ja')) {
      setLanguage('ja');
      return;
    } else if (path.startsWith('/en')) {
      setLanguage('en');
      return;
    }

    // Fall back to localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ja')) {
      setLanguage(savedLanguage);
    } else {
      // Auto-detect browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('ja')) {
        setLanguage('ja');
      }
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    
    // Update URL path to reflect language change
    const currentPath = window.location.pathname;
    let newPath = '';
    
    // Remove existing language prefix if present
    if (currentPath.startsWith('/ja/') || currentPath.startsWith('/ja')) {
      newPath = currentPath.replace(/^\/ja\/?/, '/');
    } else if (currentPath.startsWith('/en/') || currentPath.startsWith('/en')) {
      newPath = currentPath.replace(/^\/en\/?/, '/');
    } else {
      newPath = currentPath;
    }
    
    // Add new language prefix
    if (lang === 'ja') {
      newPath = '/ja' + (newPath === '/' ? '' : newPath);
    } else {
      newPath = '/en' + (newPath === '/' ? '' : newPath);
    }
    
    // Ensure path is valid
    if (!newPath || newPath === '/ja' || newPath === '/en') {
      newPath = lang === 'ja' ? '/ja' : '/en';
    }
    
    // Navigate to new URL
    window.history.pushState({}, '', newPath);
    
    // Force a re-render by triggering a custom event
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const t = (key: string): string => {
    const translationMap = translations[language] as Record<string, string>;
    return translationMap[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}