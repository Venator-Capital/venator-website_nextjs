'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Layout from '@/components/Layout'

export default function CompanyPage() {
  const { t } = useLanguage()

  return (
    <Layout>
      <div className="min-h-screen bg-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('company.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t('company.subtitle')}
            </p>
          </div>

          {/* Company Information */}
          <div className="bg-gray-900/50 rounded-2xl border border-gray-800 backdrop-blur-sm p-8 mb-12">
            <div className="grid gap-6">

              {/* Basic Info */}
              <div className="space-y-4">
                <div className="border-b border-gray-700 pb-4">
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    {t('company.info.basicInfo.title')}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-400">{t('company.info.basicInfo.companyName')}</dt>
                      <dd className="mt-1 text-lg text-white">
                        {t('company.info.companyName')}
                        {t('company.info.companyName').includes('LLC') ? '' : <span className="block text-sm text-gray-400 mt-1">（ベネターキャピタル）</span>}
                      </dd>
                    </div>

                    <div>
                      <dt className="text-sm font-medium text-gray-400">{t('company.info.basicInfo.representative')}</dt>
                      <dd className="mt-1 text-lg text-white">{t('company.info.representative')}</dd>
                    </div>

                    <div>
                      <dt className="text-sm font-medium text-gray-400">{t('company.info.basicInfo.address')}</dt>
                      <dd className="mt-1 text-lg text-white">{t('company.info.address')}</dd>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-400">{t('company.info.basicInfo.capital')}</dt>
                      <dd className="mt-1 text-lg text-white">{t('company.info.capital')}</dd>
                    </div>

                    <div>
                      <dt className="text-sm font-medium text-gray-400">{t('company.info.basicInfo.established')}</dt>
                      <dd className="mt-1 text-lg text-white">{t('company.info.established')}</dd>
                    </div>

                    <div>
                      <dt className="text-sm font-medium text-gray-400">{t('company.info.basicInfo.corporateNumber')}</dt>
                      <dd className="mt-1 text-lg text-gray-300 font-mono">{t('company.info.corporateNumber')}</dd>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <dt className="text-sm font-medium text-gray-400">{t('company.info.basicInfo.invoice')}</dt>
                  <dd className="mt-1 text-lg text-gray-300 font-mono">{t('company.info.invoice')}</dd>
                </div>
              </div>

              {/* Business Purpose */}
              <div className="border-t border-gray-700 pt-8">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  {t('company.info.businessPurpose.title')}
                </h2>

                <div className="space-y-4">
                  {t('company.info.businessPurpose.items').map((item: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-teal-400/20 text-teal-400 rounded-full flex items-center justify-center text-sm font-medium mr-4 mt-1">
                        {index + 1}
                      </span>
                      <p className="text-gray-300 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-800/50 rounded-2xl border border-gray-700 backdrop-blur-sm p-8 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">
              {t('company.contact.title')}
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <span className="font-medium text-gray-200">{t('company.contact.email')}:</span>{' '}
                <a
                  href="mailto:info@venator-capital.net"
                  className="text-teal-400 hover:text-teal-300 transition-colors"
                >
                  info@venator-capital.net
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}