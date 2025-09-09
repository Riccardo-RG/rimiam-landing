'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

export default function LanguageSelector() {
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle escape key
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="language-selector-container relative" ref={dropdownRef}>
      {/* Trigger Button - Same size as dark mode toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          relative flex items-center justify-center
          w-10 h-10 rounded-xl border transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]/50
          ${isOpen
            ? 'bg-[var(--accent-primary)]/20 border-[var(--accent-primary)] shadow-lg'
            : 'bg-[var(--bg-surface)] border-[var(--border-primary)] hover:bg-[var(--accent-primary)]/10 hover:border-[var(--accent-primary)]/50'
          }
        `}
        aria-label="Seleziona lingua"
        aria-expanded={isOpen}
      >
        <span className="text-xs font-bold text-[var(--accent-primary)] uppercase">
          {currentLang?.code || 'EN'}
        </span>
        <svg
          className={`w-3 h-3 ml-1 text-[var(--accent-primary)] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 z-[99998]"
            onClick={() => setIsOpen(false)}
          />

          <div
            data-dropdown="language"
            className="w-auto md:w-56 overflow-hidden bg-[var(--bg-elevated)] border border-[var(--border-primary)] rounded-xl shadow-xl"
          >
            {/* Header (desktop only) */}
            <div className="hidden md:block px-4 py-3 bg-[var(--bg-tertiary)] border-b border-[var(--border-primary)]">
              <span className="text-xs font-medium text-[var(--accent-primary)] uppercase tracking-wide">
                Seleziona Lingua
              </span>
            </div>

            {/* Language Options */}
            <div className="py-1">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`
  w-full flex items-center justify-between px-3 py-2 md:px-4 md:py-3 text-left text-sm
  transition-colors duration-200
  ${currentLanguage === language.code
    ? 'bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] border-l-2 border-[var(--accent-primary)]'
    : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--accent-primary)]'
  }
`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-bold text-[var(--accent-primary)] uppercase w-6 text-center">
                      {language.code}
                    </span>
                    <span className="hidden md:inline font-medium">{language.name}</span>
                  </div>
                  {currentLanguage === language.code && (
                    <svg className="w-4 h-4 text-[var(--accent-primary)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
