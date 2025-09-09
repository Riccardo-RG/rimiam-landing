'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import Navbar from '../../components/Navbar';
import lookat1Image from '../assets/img/lookat1.png';
import lookat2Image from '../assets/img/lookat2.png';

export default function DesignPage() {
  const { t } = useLanguage();
  const { theme, isDark } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[var(--bg-primary)]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className={`text-4xl lg:text-6xl font-light tracking-wide mb-6 text-[var(--text-primary)] ${isLoaded ? 'fade-in-up' : 'opacity-0'}`}>
              {t('nav.design')}
            </h1>
            <p className={`text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto ${isLoaded ? 'fade-in-up' : 'opacity-0'}`}>
              {t('design.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section className="section-padding bg-surface text-text-primary">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {/* Block A */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                {/* Image Disclaimer */}
                <div className="absolute top-0 left-0 right-0 z-10 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 text-center rounded-t-3xl">
                  {t('imageDisclaimer')}
                </div>
                <Image
                  src={lookat1Image}
                  alt="RIMIAM Pendant Front View"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-light tracking-wide">
                  {t('design.blockA.title')}
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {t('design.blockA.description')}
                </p>
              </div>
            </div>

            {/* Block B */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 lg:order-2">
                <h3 className="text-3xl lg:text-4xl font-light tracking-wide">
                  {t('design.blockB.title')}
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {t('design.blockB.description')}
                </p>
              </div>
              <div className="relative lg:order-1">
                {/* Image Disclaimer */}
                <div className="absolute top-0 left-0 right-0 z-10 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 text-center rounded-t-3xl">
                  {t('imageDisclaimer')}
                </div>
                <Image
                  src={lookat2Image}
                  alt="RIMIAM Pendant Rear View"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            {/* Specs at a glance */}
            <div className="text-center space-y-8">
              <h3 className="text-2xl font-light tracking-wide">{t('design.specs.title')}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-elevated rounded-full text-sm font-medium shadow-sm border border-primary/20 text-text-primary">
                  {t('design.specs.materials')}
                </span>
                <span className="px-4 py-2 bg-elevated rounded-full text-sm font-medium shadow-sm border border-primary/20 text-text-primary">
                  {t('design.specs.roseGold')}
                </span>
                <span className="px-4 py-2 bg-elevated rounded-full text-sm font-medium shadow-sm border border-primary/20 text-text-primary">
                  {t('design.specs.ledLight')}
                </span>
                <span className="px-4 py-2 bg-elevated rounded-full text-sm font-medium shadow-sm border border-primary/20 text-text-primary">
                  {t('design.specs.softTouch')}
                </span>
                <span className="px-4 py-2 bg-elevated rounded-full text-sm font-medium shadow-sm border border-primary/20 text-text-primary">
                  {t('design.specs.polymer')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light tracking-wide mb-6 text-text-primary">
              {t('design.technical.title')}
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed">
              {t('design.technical.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card space-y-4">
              <h3 className="text-xl font-medium text-text-primary">{t('design.technical.materials.title')}</h3>
              <p className="text-text-secondary">
                {t('design.technical.materials.description')}
              </p>
            </div>
            <div className="card space-y-4">
              <h3 className="text-xl font-medium text-text-primary">{t('design.technical.craftsmanship.title')}</h3>
              <p className="text-text-secondary">
                {t('design.technical.craftsmanship.description')}
              </p>
            </div>
            <div className="card space-y-4">
              <h3 className="text-xl font-medium text-text-primary">{t('design.technical.durability.title')}</h3>
              <p className="text-text-secondary">
                {t('design.technical.durability.description')}
              </p>
            </div>
            <div className="card space-y-4">
              <h3 className="text-xl font-medium text-text-primary">{t('design.technical.comfort.title')}</h3>
              <p className="text-text-secondary">
                {t('design.technical.comfort.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-light tracking-wide mb-6 text-text-primary">
            {t('design.cta.title')}
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
            {t('design.cta.description')}
          </p>
          <Link href="/updates" className="btn-primary">
            {t('design.cta.button')}
          </Link>
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
