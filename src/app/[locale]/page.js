'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/Navbar';
import lookat1Image from '@/app/assets/img/lookat1.png';
import rimiamVibeIcon from '@/app/assets/img/rimiam-vibe.svg';

export default function Home({ params }) {
  const { t, currentLanguage } = useLanguage();
  const { theme, isDark } = useTheme();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Helper function to create localized links
  const createLocalizedLink = (path) => {
    return `/${currentLanguage}${path}`;
  };



  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Using Formspree - replace with your actual Formspree endpoint
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          message: `New RIMIAM newsletter subscription from: ${email}`,
          _subject: 'New RIMIAM Newsletter Subscription',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      // You could add error state here if needed
    }
  };

  const scrollToUpdates = () => {
    document.getElementById('updates').scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Enhanced Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section flex items-center justify-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-300/5 via-transparent to-primary-600/5"></div>

        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className={`space-y-8 ${isLoaded ? 'fade-in-up' : 'opacity-0'} mt-8 lg:mt-0`}>
              {/* Coming Soon Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 border border-[var(--accent-primary)]/30 rounded-full px-4 py-2 text-sm font-medium text-[var(--accent-primary)]">
                <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full animate-pulse"></div>
                <span>{t('hero.comingSoon')}</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-light leading-tight tracking-wide text-text-primary">
                {t('hero.headline')}<br />
                <span className="text-primary">{t('hero.headlineAccent')}</span>
              </h1>

              <p className="text-xl text-text-secondary leading-relaxed max-w-lg">
                {t('hero.subheadline')}
              </p>

              {/* Development Status */}
              <div className="bg-[var(--bg-elevated)] border border-[var(--border-primary)] rounded-lg p-4 max-w-lg">
                <p className="text-sm text-[var(--text-secondary)]">
                  <span className="font-medium text-[var(--accent-primary)]">Current Status:</span> {t('hero.developmentStatus')}
                </p>
              </div>

              <button
                onClick={scrollToUpdates}
                className="btn-primary inline-flex items-center"
              >
                {t('hero.cta')}
              </button>
            </div>

            {/* Product Visual */}
            <div className={`relative ${isLoaded ? 'fade-in subtle-float' : 'opacity-0'}`}>
              {/* TODO: Replace with main product hero image */}
              <div className="relative w-full max-w-md mx-auto">
                {/* Image Disclaimer */}
                <div className="absolute top-0 left-0 right-0 z-10 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 text-center rounded-t-lg">
                  {t('imageDisclaimer')}
                </div>
                <Image
                  src={lookat1Image}
                  alt="RIMIAM Smart Pendant"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-lg"
                  priority
                />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="section-padding bg-background">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[var(--accent-secondary)]/20 to-[var(--accent-tertiary)]/20 border border-[var(--accent-secondary)]/30 rounded-full px-4 py-2 text-sm font-medium text-[var(--accent-secondary)] mb-6">
              <div className="w-2 h-2 bg-[var(--accent-secondary)] rounded-full animate-pulse"></div>
              <span>{t('home.featuresPreview.comingSoon')}</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-light tracking-wide mb-4">{t('home.featuresPreview.title')}</h2>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              {t('home.featuresPreview.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Trill Preview */}
            <div className="card text-center space-y-6">
              <div className="w-16 h-16 mx-auto relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 via-orange-400 to-amber-600 p-0.5">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#8e9aaf] via-[#f1cc5e] to-[#e6b547] relative overflow-hidden flex items-center justify-center">
                    <Image
                      src={rimiamVibeIcon}
                      alt="Rimiam Vibe"
                      width={24}
                      height={24}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full pointer-events-none"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-medium text-text-primary">{t('howItWorks.trill.title')}</h3>
              <p className="text-text-secondary leading-relaxed">
                {t('home.featuresPreview.trill')}
              </p>
            </div>

            {/* Digital Frame Preview */}
            <div className="card text-center space-y-6">
              <div className="w-16 h-16 mx-auto relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 via-orange-400 to-amber-600 p-0.5">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-2 rounded-full bg-black border border-gray-700 overflow-hidden">
                      <div className="w-full h-full bg-gray-900 flex flex-col items-center justify-center">
                        <div className="text-primary text-[6px] font-light tracking-wider mb-0.5">RIMIAM</div>
                        <div className="w-0.5 h-0.5 bg-primary/60 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full pointer-events-none"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-medium text-text-primary">{t('howItWorks.digitalFrame.title')}</h3>
              <p className="text-text-secondary leading-relaxed">
                {t('home.featuresPreview.digitalFrame')}
              </p>
            </div>

            {/* Connection Light Preview */}
            <div className="card text-center space-y-6">
              <div className="w-16 h-16 mx-auto relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 via-orange-400 to-amber-600 p-0.5">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#8e9aaf] via-[#f1cc5e] to-[#e6b547] relative overflow-hidden flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white/60 opacity-80"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full pointer-events-none"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-medium text-text-primary">{t('howItWorks.connectionLight.title')}</h3>
              <p className="text-text-secondary leading-relaxed">
                {t('home.featuresPreview.connectionLight')}
              </p>
            </div>
          </div>

          {/* CTA to explore more */}
          <div className="text-center mt-12">
            <Link href={createLocalizedLink('/how-it-works')} className="btn-primary inline-flex items-center">
              {t('home.featuresPreview.exploreMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding bg-surface">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light tracking-wide mb-4 text-text-primary">
              {t('home.quickLinks.title')}
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              {t('home.quickLinks.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href={createLocalizedLink('/design')} className="card text-center space-y-4 hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-text-primary">{t('nav.design')}</h3>
              <p className="text-sm text-text-secondary">{t('home.quickLinks.designDescription')}</p>
            </Link>

            <Link href={createLocalizedLink('/gallery')} className="card text-center space-y-4 hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 mx-auto bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-secondary/25 transition-all duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-text-primary">{t('home.quickLinks.gallery')}</h3>
              <p className="text-sm text-text-secondary">{t('home.quickLinks.galleryDescription')}</p>
            </Link>

            <Link href={createLocalizedLink('/mission')} className="card text-center space-y-4 hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 mx-auto bg-gradient-to-br from-accent-400 to-accent-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent/25 transition-all duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-text-primary">{t('nav.mission')}</h3>
              <p className="text-sm text-text-secondary">{t('home.quickLinks.missionDescription')}</p>
            </Link>

            <Link href={createLocalizedLink('/faq')} className="card text-center space-y-4 hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 mx-auto bg-gradient-to-br from-tertiary-400 to-tertiary-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-tertiary/25 transition-all duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-text-primary">{t('home.quickLinks.faq')}</h3>
              <p className="text-sm text-text-secondary">{t('home.quickLinks.faqDescription')}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Development Roadmap Section */}
      <section className="section-padding bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light tracking-wide mb-6 text-[var(--text-primary)]">
              {t('developmentStatus.title')}
            </h2>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
              {t('developmentStatus.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phase 1 */}
            <div className="card text-center space-y-4 border-l-4 border-l-[var(--accent-primary)]">
              <div className="w-12 h-12 mx-auto bg-[var(--accent-primary)] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[var(--text-primary)]">{t('developmentStatus.roadmap.phase1.title')}</h3>
              <div className="inline-flex items-center space-x-2 bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] px-3 py-1 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full animate-pulse"></div>
                <span>{t('developmentStatus.roadmap.phase1.status')}</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">{t('developmentStatus.roadmap.phase1.description')}</p>
            </div>

            {/* Phase 2 */}
            <div className="card text-center space-y-4 opacity-75">
              <div className="w-12 h-12 mx-auto bg-[var(--text-muted)] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[var(--text-primary)]">{t('developmentStatus.roadmap.phase2.title')}</h3>
              <div className="inline-flex items-center space-x-2 bg-[var(--text-muted)]/20 text-[var(--text-muted)] px-3 py-1 rounded-full text-sm font-medium">
                <span>{t('developmentStatus.roadmap.phase2.status')}</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">{t('developmentStatus.roadmap.phase2.description')}</p>
            </div>

            {/* Phase 3 */}
            <div className="card text-center space-y-4 opacity-75">
              <div className="w-12 h-12 mx-auto bg-[var(--text-muted)] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[var(--text-primary)]">{t('developmentStatus.roadmap.phase3.title')}</h3>
              <div className="inline-flex items-center space-x-2 bg-[var(--text-muted)]/20 text-[var(--text-muted)] px-3 py-1 rounded-full text-sm font-medium">
                <span>{t('developmentStatus.roadmap.phase3.status')}</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">{t('developmentStatus.roadmap.phase3.description')}</p>
            </div>

            {/* Phase 4 */}
            <div className="card text-center space-y-4 opacity-75">
              <div className="w-12 h-12 mx-auto bg-[var(--text-muted)] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[var(--text-primary)]">{t('developmentStatus.roadmap.phase4.title')}</h3>
              <div className="inline-flex items-center space-x-2 bg-[var(--text-muted)]/20 text-[var(--text-muted)] px-3 py-1 rounded-full text-sm font-medium">
                <span>{t('developmentStatus.roadmap.phase4.status')}</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">{t('developmentStatus.roadmap.phase4.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Updates / Email Signup Section */}
      <section id="updates" className="section-padding bg-background">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-light tracking-wide mb-4 text-text-primary">
            {t('updates.title')}
          </h2>
          <p className="text-text-secondary mb-12">
            {t('updates.description')}
          </p>

          {/* Option 1: JavaScript-enhanced Formspree */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('updates.placeholder')}
                required
                className="flex-1 px-6 py-4 bg-surface border border-border-primary text-text-primary placeholder-text-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
              <button
                type="submit"
                disabled={isSubmitted}
                className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitted ? t('updates.buttonSuccess') : t('updates.button')}
              </button>
            </div>

            {isSubmitted && (
              <p className="text-primary text-sm fade-in">
                {t('updates.successMessage')}
              </p>
            )}
          </form>

          {/* Option 2: Pure HTML form (fallback) - Uncomment to use instead */}
          {/*
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-surface border border-border-primary text-text-primary placeholder-text-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
              <input type="hidden" name="_subject" value="New RIMIAM Newsletter Subscription" />
              <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Notify me
              </button>
            </div>
          </form>
          */}
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
