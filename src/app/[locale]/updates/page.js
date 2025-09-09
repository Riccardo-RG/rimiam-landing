'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

// Import images
import loveImage from '@/app/assets/img/love.png';

export default function Aggiornamenti() {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[var(--bg-primary)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className={`text-4xl lg:text-6xl font-light tracking-wide mb-8 text-[var(--text-primary)] ${isLoaded ? 'fade-in-up' : 'opacity-0'}`}>
            {t('updates.title')}
          </h1>
          <p className={`text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto mb-8 ${isLoaded ? 'fade-in-up' : 'opacity-0'}`}>
            {t('updates.description')}
          </p>
          
          {/* Waitlist Form */}
          <div className={`max-w-md mx-auto ${isLoaded ? 'fade-in-up' : 'opacity-0'}`}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="La tua email"
                    required
                    className="w-full px-6 py-4 bg-[var(--bg-elevated)] border border-[var(--border-primary)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Registrazione...' : t('updates.joinWaitlist')}
                </button>
              </form>
            ) : (
              <div className="card p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-[var(--text-primary)]">Benvenuto nella famiglia RIMIAM!</h3>
                <p className="text-[var(--text-secondary)]">Ti terremo aggiornato su tutti i nostri progressi.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light tracking-wide mb-6 text-[var(--text-primary)]">
              Roadmap di Sviluppo
            </h2>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              Segui il nostro viaggio verso il lancio ufficiale.
            </p>
          </div>

          <div className="space-y-8">
            {/* Q1 2024 - Completed */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="card flex-1 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-[var(--text-primary)]">Q1 2024 - Prototipo Funzionale</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Completato</span>
                </div>
                <p className="text-[var(--text-secondary)]">
                  Sviluppo del primo prototipo funzionale con tutte le caratteristiche principali: vibrazione, luce e display.
                </p>
              </div>
            </div>

            {/* Q2 2024 - Completed */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="card flex-1 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-[var(--text-primary)]">Q2 2024 - Design Finale</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Completato</span>
                </div>
                <p className="text-[var(--text-secondary)]">
                  Finalizzazione del design con i migliori artigiani italiani e selezione dei materiali premium.
                </p>
              </div>
            </div>

            {/* Q3 2024 - In Progress */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-primary)]/60 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="card flex-1 p-6 border-2 border-[var(--accent-primary)]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-[var(--text-primary)]">Q3 2024 - Test Beta</h3>
                  <span className="px-3 py-1 bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] rounded-full text-sm font-medium">In Corso</span>
                </div>
                <p className="text-[var(--text-secondary)]">
                  Test con un gruppo selezionato di coppie per perfezionare l'esperienza utente e l'app mobile.
                </p>
              </div>
            </div>

            {/* Q4 2024 - Upcoming */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[var(--bg-elevated)] border-2 border-[var(--border-primary)] rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-[var(--text-muted)] rounded-full"></div>
                </div>
              </div>
              <div className="card flex-1 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-[var(--text-primary)]">Q4 2024 - Produzione</h3>
                  <span className="px-3 py-1 bg-[var(--bg-elevated)] text-[var(--text-muted)] rounded-full text-sm font-medium">Prossimo</span>
                </div>
                <p className="text-[var(--text-secondary)]">
                  Inizio della produzione in serie con i nostri partner manifatturieri italiani.
                </p>
              </div>
            </div>

            {/* Q1 2025 - Upcoming */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[var(--bg-elevated)] border-2 border-[var(--border-primary)] rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-[var(--text-muted)] rounded-full"></div>
                </div>
              </div>
              <div className="card flex-1 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-[var(--text-primary)]">Q1 2025 - Lancio Ufficiale</h3>
                  <span className="px-3 py-1 bg-[var(--bg-elevated)] text-[var(--text-muted)] rounded-full text-sm font-medium">Futuro</span>
                </div>
                <p className="text-[var(--text-secondary)]">
                  Lancio ufficiale di RIMIAM con le prime consegne ai clienti della lista d'attesa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light tracking-wide mb-6 text-[var(--text-primary)]">
              Ultimi Aggiornamenti
            </h2>
          </div>

          <div className="space-y-8">
            <article className="card p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[var(--text-muted)]">15 Novembre 2024</span>
                <span className="px-3 py-1 bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] rounded-full text-sm font-medium">Nuovo</span>
              </div>
              <h3 className="text-2xl font-medium text-[var(--text-primary)] mb-4">
                Test Beta: Risultati Straordinari
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                I primi test con le coppie beta hanno superato ogni aspettativa. Il 98% dei partecipanti ha riferito 
                di sentirsi più connesso al proprio partner durante il periodo di test.
              </p>
              <div className="relative">
                <div className="absolute top-0 left-0 right-0 z-10 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 text-center rounded-t-lg">
                  {t('imageDisclaimer')}
                </div>
                <Image
                  src={loveImage}
                  alt="Beta Test Results"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </article>

            <article className="card p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[var(--text-muted)]">2 Novembre 2024</span>
              </div>
              <h3 className="text-2xl font-medium text-[var(--text-primary)] mb-4">
                Partnership con Artigiani di Valenza
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Siamo orgogliosi di annunciare la partnership con alcuni dei più prestigiosi artigiani orafi di Valenza, 
                garantendo la massima qualità italiana per ogni RIMIAM.
              </p>
            </article>

            <article className="card p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[var(--text-muted)]">20 Ottobre 2024</span>
              </div>
              <h3 className="text-2xl font-medium text-[var(--text-primary)] mb-4">
                App Mobile in Sviluppo
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                L'app RIMIAM per iOS e Android è in fase di sviluppo avanzato. Permetterà di personalizzare 
                completamente l'esperienza e gestire i ricordi condivisi.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-light tracking-wide mb-6 text-[var(--text-primary)]">
            Rimani Sempre Aggiornato
          </h2>
          <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-8 max-w-2xl mx-auto">
            Ricevi aggiornamenti esclusivi, anteprime e offerte speciali direttamente nella tua casella email.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="btn-primary flex-1">
              Iscriviti alla Newsletter
            </button>
            <button className="btn-secondary">
              Seguici sui Social
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
