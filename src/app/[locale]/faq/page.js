'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/Navbar';

export default function FAQPage() {
  const { t } = useLanguage();
  const { theme, isDark } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const faqItems = [
    {
      id: 'connectivity',
      question: t('faq.connectivity.question'),
      answer: t('faq.connectivity.answer')
    },
    {
      id: 'battery',
      question: t('faq.battery.question'),
      answer: t('faq.battery.answer')
    },
    {
      id: 'materials',
      question: t('faq.materials.question'),
      answer: t('faq.materials.answer')
    },
    {
      id: 'privacy',
      question: t('faq.privacy.question'),
      answer: t('faq.privacy.answer')
    },
    {
      id: 'range',
      question: t('faq.range.question'),
      answer: t('faq.range.answer')
    },
    {
      id: 'waterproof',
      question: t('faq.waterproof.question'),
      answer: t('faq.waterproof.answer')
    },
    {
      id: 'compatibility',
      question: t('faq.compatibility.question'),
      answer: t('faq.compatibility.answer')
    },
    {
      id: 'warranty',
      question: t('faq.warranty.question'),
      answer: t('faq.warranty.answer')
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[var(--bg-primary)]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className={`text-4xl lg:text-6xl font-light tracking-wide mb-6 text-[var(--text-primary)] ${isLoaded ? 'fade-in-up' : 'opacity-0'}`}>
              {t('faq.title')}
            </h1>
            <p className={`text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto ${isLoaded ? 'fade-in-up' : 'opacity-0'}`}>
              {t('faq.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={item.id}
                className="card overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg"
                >
                  <h3 className="text-lg font-medium text-text-primary pr-4">
                    {item.question}
                  </h3>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${openFAQ === item.id ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${openFAQ === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6">
                    <p className="text-text-secondary leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light tracking-wide mb-6 text-text-primary">
              {t('faq.specs.title')}
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed">
              {t('faq.specs.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-medium text-text-primary mb-3">{t('faq.specs.dimensions.title')}</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• {t('faq.specs.dimensions.diameter')}</li>
                  <li>• {t('faq.specs.dimensions.thickness')}</li>
                  <li>• {t('faq.specs.dimensions.weight')}</li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-medium text-text-primary mb-3">{t('faq.specs.connectivity.title')}</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• {t('faq.specs.connectivity.bluetooth')}</li>
                  <li>• {t('faq.specs.connectivity.range')}</li>
                  <li>• {t('faq.specs.connectivity.encryption')}</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-medium text-text-primary mb-3">{t('faq.specs.battery.title')}</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• {t('faq.specs.battery.life')}</li>
                  <li>• {t('faq.specs.battery.charging')}</li>
                  <li>• {t('faq.specs.battery.wireless')}</li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-medium text-text-primary mb-3">{t('faq.specs.materials.title')}</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• {t('faq.specs.materials.gold')}</li>
                  <li>• {t('faq.specs.materials.steel')}</li>
                  <li>• {t('faq.specs.materials.polymer')}</li>
                  <li>• {t('faq.specs.materials.rating')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-light tracking-wide mb-6 text-text-primary">
            {t('faq.support.title')}
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
            {t('faq.support.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/updates" className="btn-primary">
              {t('faq.support.joinWaitlist')}
            </Link>
            <a href="mailto:support@rimiam.com" className="btn-secondary">
              {t('faq.support.contactUs')}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-border-primary bg-background">
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="text-text-muted text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </footer>
    </div>
  );
}
