'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import logoImage from '@/app/assets/img/logo-v1.png';

export default function ThankYou() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-text-primary flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center space-y-8">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="relative">
            {/* Image Disclaimer */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              {t('imageDisclaimer')}
            </div>
            <Image
              src={logoImage}
              alt="RIMIAM Logo"
              width={32}
              height={32}
              className="opacity-90"
            />
          </div>
          <span className="text-2xl font-light tracking-[0.2em] text-text-primary">RIMIAM</span>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-light tracking-wide text-text-primary">
            {t('thankYou.title')}
          </h1>

          <p className="text-xl text-text-secondary leading-relaxed">
            {t('thankYou.description')}
          </p>

          <div className="pt-8">
            <a
              href="/"
              className="btn-primary inline-flex items-center"
            >
              {t('thankYou.backHome')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
