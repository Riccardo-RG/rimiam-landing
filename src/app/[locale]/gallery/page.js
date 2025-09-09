'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function GalleryPage({ params }) {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const galleryImages = [
    {
      id: 1,
      src: '/app/assets/img/logo-v1.png',
      alt: 'RIMIAM Logo Design',
      category: 'branding',
      title: t('gallery.images.logo.title'),
      description: t('gallery.images.logo.description')
    },
    {
      id: 2,
      src: '/app/assets/img/lookat1.png',
      alt: 'RIMIAM Pendant Concept 1',
      category: 'design',
      title: t('gallery.images.concept1.title'),
      description: t('gallery.images.concept1.description')
    },
    {
      id: 3,
      src: '/app/assets/img/lookat2.png',
      alt: 'RIMIAM Pendant Concept 2',
      category: 'design',
      title: t('gallery.images.concept2.title'),
      description: t('gallery.images.concept2.description')
    },
    {
      id: 4,
      src: '/app/assets/img/love.png',
      alt: 'RIMIAM Connection Concept',
      category: 'emotion',
      title: t('gallery.images.connection.title'),
      description: t('gallery.images.connection.description')
    },
    {
      id: 5,
      src: '/app/assets/img/rimiamfoc.png',
      alt: 'RIMIAM Focus Design',
      category: 'design',
      title: t('gallery.images.focus.title'),
      description: t('gallery.images.focus.description')
    },
    {
      id: 6,
      src: '/images/hear.png',
      alt: 'RIMIAM Audio Experience',
      category: 'experience',
      title: t('gallery.images.audio.title'),
      description: t('gallery.images.audio.description')
    }
  ];

  const categories = [
    { id: 'all', name: t('gallery.categories.all') },
    { id: 'design', name: t('gallery.categories.design') },
    { id: 'branding', name: t('gallery.categories.branding') },
    { id: 'emotion', name: t('gallery.categories.emotion') },
    { id: 'experience', name: t('gallery.categories.experience') }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
            <h1 className={`text-4xl lg:text-6xl font-light tracking-wide mb-6 text-[var(--text-primary)] ${isLoaded ? 'fade-in-up' : 'opacity-0'}`}>
              {t('gallery.title')}
            </h1>
            <p className={`text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto ${isLoaded ? 'fade-in-up' : 'opacity-0'}`}>
              {t('gallery.description')}
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-8">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                    activeCategory === category.id
                      ? 'bg-[var(--accent-primary)] text-white shadow-lg'
                      : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-[var(--accent-primary)] hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section-padding bg-[var(--bg-secondary)]">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`group cursor-pointer ${isLoaded ? 'fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openModal(image)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-[var(--bg-primary)] shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                    <div className="aspect-square relative">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="text-lg font-medium mb-1">{image.title}</h3>
                        <p className="text-sm text-white/80 line-clamp-2">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Note */}
        <section className="section-padding">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
            <div className="bg-[var(--bg-secondary)] rounded-2xl p-8 border border-[var(--border-primary)]">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-[var(--text-primary)]">
                {t('gallery.development.title')}
              </h3>
              <p className="text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
                {t('gallery.development.description')}
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-[var(--accent-primary)] transition-colors duration-200 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-[var(--bg-primary)] rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative aspect-video">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-light mb-2 text-[var(--text-primary)]">{selectedImage.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
