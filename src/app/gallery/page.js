'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import Navbar from '../../components/Navbar';
import lookat1Image from '../assets/img/lookat1.png';
import lookat2Image from '../assets/img/lookat2.png';
import loveImage from '../assets/img/love.png';

export default function GalleryPage() {
  const { t } = useLanguage();
  const { theme, isDark } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const galleryImages = [
    {
      src: loveImage,
      alt: "RIMIAM Gallery Image 1",
      title: t('gallery.images.lifestyle'),
      description: t('gallery.images.lifestyleDescription')
    },
    {
      src: lookat1Image,
      alt: "RIMIAM Gallery Image 2", 
      title: t('gallery.images.product'),
      description: t('gallery.images.productDescription')
    },
    {
      src: lookat2Image,
      alt: "RIMIAM Gallery Image 3",
      title: t('gallery.images.detail'),
      description: t('gallery.images.detailDescription')
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[var(--bg-primary)]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className={`text-4xl lg:text-6xl font-light tracking-wide mb-6 text-[var(--text-primary)] ${isLoaded ? 'fade-in-up' : 'opacity-0'}`}>
              {t('nav.gallery')}
            </h1>
            <p className={`text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto ${isLoaded ? 'fade-in-up' : 'opacity-0'}`}>
              {t('gallery.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-square bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  {/* Image Disclaimer */}
                  <div className="absolute top-0 left-0 right-0 z-10 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 text-center">
                    {t('imageDisclaimer')}
                  </div>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-medium mb-2">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Coming Soon Placeholder */}
            <div className="relative aspect-square bg-gradient-to-br from-primary-600/20 to-primary-400/20 rounded-2xl overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <p className="text-text-muted text-sm font-medium">{t('gallery.comingSoon')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light tracking-wide mb-6 text-text-primary">
              {t('gallery.features.title')}
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed">
              {t('gallery.features.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-text-primary">{t('gallery.features.connection.title')}</h3>
              <p className="text-text-secondary">{t('gallery.features.connection.description')}</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-text-primary">{t('gallery.features.design.title')}</h3>
              <p className="text-text-secondary">{t('gallery.features.design.description')}</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-text-primary">{t('gallery.features.technology.title')}</h3>
              <p className="text-text-secondary">{t('gallery.features.technology.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-light tracking-wide mb-6 text-text-primary">
            {t('gallery.cta.title')}
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
            {t('gallery.cta.description')}
          </p>
          <Link href="/updates" className="btn-primary">
            {t('gallery.cta.button')}
          </Link>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-medium mb-2">{selectedImage.title}</h3>
              <p className="text-white/80">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

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
