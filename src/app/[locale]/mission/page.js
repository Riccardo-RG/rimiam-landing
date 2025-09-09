'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Navbar from '../../components/Navbar';
import Image from 'next/image';

// Import images
import loveImage from '../assets/img/love.png';

export default function MissionePage() {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[var(--bg-primary)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className={`text-4xl lg:text-6xl font-light tracking-wide mb-8 text-[var(--text-primary)] ${isLoaded ? 'fade-in-up' : 'opacity-0'}`}>
            {t('mission.title')}
          </h1>
          <p className={`text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto ${isLoaded ? 'fade-in-up' : 'opacity-0'}`}>
            {t('mission.description')}
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-light tracking-wide text-[var(--text-primary)]">
                La Nostra Visione
              </h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                In un mondo sempre più connesso digitalmente, abbiamo perso il tocco umano. RIMIAM nasce per riportare 
                l'intimità e la presenza fisica nelle relazioni a distanza.
              </p>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Crediamo che la tecnologia debba servire l'amore, non sostituirlo. Ogni RIMIAM è progettato per 
                amplificare i sentimenti, non per digitalizzarli.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[var(--text-secondary)]">Connessioni autentiche attraverso la tecnologia</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[var(--text-secondary)]">Design italiano che dura nel tempo</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[var(--text-secondary)]">Innovazione al servizio dell'emozione</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-0 left-0 right-0 z-10 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 text-center rounded-t-3xl">
                {t('imageDisclaimer')}
              </div>
              <Image
                src={loveImage}
                alt="RIMIAM Vision"
                width={500}
                height={500}
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light tracking-wide mb-6 text-[var(--text-primary)]">
              I Nostri Valori
            </h2>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto">
              Ogni decisione che prendiamo è guidata da questi principi fondamentali.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-primary)]/60 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--text-inverse)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[var(--text-primary)]">Amore Autentico</h3>
              <p className="text-[var(--text-secondary)]">
                Crediamo nell'amore vero, quello che supera le distanze e il tempo. La nostra tecnologia amplifica questi sentimenti.
              </p>
            </div>

            <div className="card text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[var(--accent-secondary)] to-[var(--accent-secondary)]/60 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--text-inverse)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[var(--text-primary)]">Qualità Italiana</h3>
              <p className="text-[var(--text-secondary)]">
                Ogni RIMIAM è realizzato con la maestria artigianale italiana, utilizzando solo i materiali più pregiati.
              </p>
            </div>

            <div className="card text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[var(--accent-tertiary)] to-[var(--accent-tertiary)]/60 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--text-inverse)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[var(--text-primary)]">Privacy Assoluta</h3>
              <p className="text-[var(--text-secondary)]">
                I vostri momenti intimi rimangono privati. Utilizziamo crittografia end-to-end e non conserviamo dati personali.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light tracking-wide mb-6 text-[var(--text-primary)]">
              La Nostra Storia
            </h2>
          </div>

          <div className="space-y-12">
            <div className="card p-8">
              <h3 className="text-2xl font-medium text-[var(--text-primary)] mb-4">L'Inizio</h3>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                RIMIAM nasce dall'esperienza personale dei suoi fondatori: una coppia che ha vissuto anni di relazione 
                a distanza. Frustrati dalle limitazioni della tecnologia esistente, hanno immaginato un modo più intimo 
                e naturale di sentirsi vicini.
              </p>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-medium text-[var(--text-primary)] mb-4">L'Innovazione</h3>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Dopo anni di ricerca e sviluppo, collaborando con i migliori ingegneri e designer italiani, 
                abbiamo creato il primo gioiello intelligente che trasmette davvero emozioni attraverso il tocco.
              </p>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-medium text-[var(--text-primary)] mb-4">Il Futuro</h3>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Oggi RIMIAM è più di un prodotto: è un movimento che ridefinisce come la tecnologia può servire l'amore. 
                Il nostro obiettivo è connettere un milione di coppie entro il 2025.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light tracking-wide mb-6 text-[var(--text-primary)]">
              Il Team
            </h2>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto">
              Un gruppo di visionari, ingegneri e artisti uniti dalla passione per l'innovazione e l'amore.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center space-y-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-primary)]/60 rounded-full"></div>
              <div>
                <h3 className="text-xl font-medium text-[var(--text-primary)]">Marco Rossi</h3>
                <p className="text-[var(--text-secondary)]">CEO & Co-Founder</p>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Ex-ingegnere Apple, esperto in wearable technology e design dell'esperienza utente.
              </p>
            </div>

            <div className="card text-center space-y-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[var(--accent-secondary)] to-[var(--accent-secondary)]/60 rounded-full"></div>
              <div>
                <h3 className="text-xl font-medium text-[var(--text-primary)]">Sofia Bianchi</h3>
                <p className="text-[var(--text-secondary)]">CTO & Co-Founder</p>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                PhD in Ingegneria Elettronica, specializzata in IoT e comunicazioni wireless sicure.
              </p>
            </div>

            <div className="card text-center space-y-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[var(--accent-tertiary)] to-[var(--accent-tertiary)]/60 rounded-full"></div>
              <div>
                <h3 className="text-xl font-medium text-[var(--text-primary)]">Alessandro Conti</h3>
                <p className="text-[var(--text-secondary)]">Head of Design</p>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Designer di gioielli con 15 anni di esperienza presso le più prestigiose maison italiane.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-light tracking-wide mb-6 text-[var(--text-primary)]">
            Unisciti alla Nostra Missione
          </h2>
          <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-8 max-w-2xl mx-auto">
            Aiutaci a ridefinire il futuro delle relazioni umane attraverso la tecnologia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Entra nella Lista d'Attesa
            </button>
            <button className="btn-secondary">
              Scopri le Opportunità di Carriera
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
