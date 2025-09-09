'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';

export default function GalleryPage({ params }) {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-light tracking-wide mb-6 text-[var(--text-primary)]">
              {t('nav.gallery')}
            </h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto">
              Coming soon - A visual journey through RIMIAM's design and development process.
            </p>
          </div>
        </section>

        {/* Placeholder Content */}
        <section className="section-padding bg-[var(--bg-secondary)]">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-light mb-4 text-[var(--text-primary)]">
                Gallery Coming Soon
              </h2>
              <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                We're preparing an exclusive collection of images showcasing RIMIAM's elegant design, craftsmanship details, and the emotional connections it creates.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
