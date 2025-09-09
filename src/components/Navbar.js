'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../contexts/LanguageContext';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';
import RimiamLogo from './RimiamLogo';

export default function Navbar() {
  const { t, currentLanguage } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Helper function to create localized links
  const createLocalizedLink = (path) => {
    return `/${currentLanguage}${path}`;
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('header')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[99999] transition-all duration-500 navbar-enhanced ${
        scrolled
          ? 'bg-[var(--bg-primary)]/98 backdrop-blur-xl border-b border-[var(--border-primary)] shadow-lg shadow-primary/10 py-2'
          : 'bg-[var(--bg-primary)]/95 backdrop-blur-xl border-b border-[var(--border-primary)] shadow-sm py-4'
      } hover:bg-[var(--bg-primary)] hover:shadow-lg hover:shadow-primary/10`}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo/Brand with Gradient */}
          <div className="flex-shrink-0">
            <RimiamLogo href={createLocalizedLink('/')} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <Link href={createLocalizedLink('/how-it-works')} className="relative group px-4 py-3 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-all duration-300 text-base font-medium tracking-wide">
              <span className="relative z-10">{t('nav.howItWorks')}</span>
              <div className="absolute inset-0 bg-[var(--accent-primary)]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
            </Link>
            <Link href={createLocalizedLink('/design')} className="relative group px-4 py-3 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-all duration-300 text-base font-medium tracking-wide">
              <span className="relative z-10">{t('nav.design')}</span>
              <div className="absolute inset-0 bg-[var(--accent-primary)]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
            </Link>
            <Link href={createLocalizedLink('/gallery')} className="relative group px-4 py-3 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-all duration-300 text-base font-medium tracking-wide">
              <span className="relative z-10">{t('nav.gallery')}</span>
              <div className="absolute inset-0 bg-[var(--accent-primary)]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
            </Link>
            <Link href={createLocalizedLink('/mission')} className="relative group px-4 py-3 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-all duration-300 text-base font-medium tracking-wide">
              <span className="relative z-10">{t('nav.mission')}</span>
              <div className="absolute inset-0 bg-[var(--accent-primary)]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
            </Link>
            <Link href={createLocalizedLink('/faq')} className="relative group px-4 py-3 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-all duration-300 text-base font-medium tracking-wide">
              <span className="relative z-10">{t('nav.faq')}</span>
              <div className="absolute inset-0 bg-[var(--accent-primary)]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
            </Link>
            <Link href={createLocalizedLink('/updates')} className="relative group px-4 py-3 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-all duration-300 text-base font-medium tracking-wide">
              <span className="relative z-10">{t('nav.updates')}</span>
              <div className="absolute inset-0 bg-[var(--accent-primary)]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
            </Link>
          </nav>

          {/* Right Side CTAs */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="scale-75 transform">
              <ThemeToggle />
            </div>
            <div className="scale-75 transform">
              <LanguageSelector />
            </div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden p-3 relative z-10 group mobile-toggle-enhanced rounded-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-7 h-7 flex flex-col justify-center space-y-1.5 relative">
              {/* Top line */}
              <span
                className={`block h-0.5 w-7 bg-gradient-to-r from-[#8e9aaf] via-[var(--text-primary)] to-[var(--accent-primary)] transition-all duration-300 ease-in-out transform origin-center rounded-full ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-primary)]' : 'group-hover:w-8 group-hover:h-1'
                }`}
              ></span>
              {/* Middle line */}
              <span
                className={`block h-0.5 w-7 bg-gradient-to-r from-[#8e9aaf] via-[var(--text-primary)] to-[var(--accent-primary)] transition-all duration-300 ease-in-out rounded-full ${
                  mobileMenuOpen ? 'opacity-0 scale-0' : 'group-hover:w-6 group-hover:h-1'
                }`}
              ></span>
              {/* Bottom line */}
              <span
                className={`block h-0.5 w-7 bg-gradient-to-r from-[#8e9aaf] via-[var(--text-primary)] to-[var(--accent-primary)] transition-all duration-300 ease-in-out transform origin-center rounded-full ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-primary)]' : 'group-hover:w-8 group-hover:h-1'
                }`}
              ></span>
            </div>

            {/* Enhanced hover background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-primary)]/5 rounded-xl scale-0 group-hover:scale-100 transition-all duration-300 origin-center"></div>

            {/* Subtle pulse effect when open */}
            {mobileMenuOpen && (
              <div className="absolute inset-0 bg-[var(--accent-primary)]/20 rounded-xl animate-pulse"></div>
            )}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen
              ? 'max-h-[500px] opacity-100 py-6 overflow-visible'
              : 'max-h-0 opacity-0 py-0 overflow-hidden'
          }`}
        >
          <div className="mobile-menu-container bg-[var(--bg-elevated)]/98 border border-[var(--border-primary)] rounded-2xl mx-4">
            <nav className="flex flex-col space-y-2 p-6">
              <Link
                href={createLocalizedLink('/how-it-works')}
                className="relative group px-6 py-4 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-all duration-300 text-lg font-medium tracking-wide rounded-xl hover:bg-[var(--accent-primary)]/10 transform hover:translate-x-2 hover:scale-[1.02]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative z-10">{t('nav.howItWorks')}</span>
                <div className="absolute left-2 top-1/2 w-0 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-primary)]/60 group-hover:w-3 transition-all duration-300 -translate-y-1/2 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </Link>
              <Link
                href={createLocalizedLink('/design')}
                className="relative group px-6 py-4 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-all duration-300 text-lg font-medium tracking-wide rounded-xl hover:bg-[var(--accent-primary)]/10 transform hover:translate-x-2 hover:scale-[1.02]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative z-10">{t('nav.design')}</span>
                <div className="absolute left-2 top-1/2 w-0 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-primary)]/60 group-hover:w-3 transition-all duration-300 -translate-y-1/2 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </Link>
              <Link
                href={createLocalizedLink('/gallery')}
                className="relative group px-6 py-4 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-all duration-300 text-lg font-medium tracking-wide rounded-xl hover:bg-[var(--accent-primary)]/10 transform hover:translate-x-2 hover:scale-[1.02]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative z-10">{t('nav.gallery')}</span>
                <div className="absolute left-2 top-1/2 w-0 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-primary)]/60 group-hover:w-3 transition-all duration-300 -translate-y-1/2 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </Link>
              <Link
                href={createLocalizedLink('/mission')}
                className="relative group px-6 py-4 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-all duration-300 text-lg font-medium tracking-wide rounded-xl hover:bg-[var(--accent-primary)]/10 transform hover:translate-x-2 hover:scale-[1.02]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative z-10">{t('nav.mission')}</span>
                <div className="absolute left-2 top-1/2 w-0 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-primary)]/60 group-hover:w-3 transition-all duration-300 -translate-y-1/2 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </Link>
              <Link
                href={createLocalizedLink('/faq')}
                className="relative group px-6 py-4 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-all duration-300 text-lg font-medium tracking-wide rounded-xl hover:bg-[var(--accent-primary)]/10 transform hover:translate-x-2 hover:scale-[1.02]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative z-10">{t('nav.faq')}</span>
                <div className="absolute left-2 top-1/2 w-0 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-primary)]/60 group-hover:w-3 transition-all duration-300 -translate-y-1/2 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </Link>
              <Link
                href={createLocalizedLink('/updates')}
                className="relative group px-6 py-4 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-all duration-300 text-lg font-medium tracking-wide rounded-xl hover:bg-[var(--accent-primary)]/10 transform hover:translate-x-2 hover:scale-[1.02]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative z-10">{t('nav.updates')}</span>
                <div className="absolute left-2 top-1/2 w-0 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-primary)]/60 group-hover:w-3 transition-all duration-300 -translate-y-1/2 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </Link>

              {/* Mobile Theme and Language Controls */}
              <div className="pt-6 flex items-center justify-center space-x-6 mt-6 border-t border-[var(--border-primary)]">
                <div className="transform">
                  <ThemeToggle />
                </div>
                <div className="transform">
                  <LanguageSelector />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
