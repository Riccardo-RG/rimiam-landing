'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Navbar from '../../components/Navbar';
import Image from 'next/image';

// Import images
import lookat1Image from '../assets/img/lookat1.png';
import loveImage from '../assets/img/love.png';

export default function ComeFunzionaPage() {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Sound effects
  const playHarpSound = () => {
    try {
      // Create a relaxing harp-like sound using Web Audio API
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();

      // Harp chord progression: C major arpeggio (C-E-G-C-E-G)
      const harpNotes = [
        { freq: 523.25, delay: 0.0 },    // C5
        { freq: 659.25, delay: 0.12 },   // E5
        { freq: 783.99, delay: 0.24 },   // G5
        { freq: 1046.50, delay: 0.36 },  // C6
        { freq: 1318.51, delay: 0.48 },  // E6
        { freq: 1567.98, delay: 0.60 }   // G6
      ];

      // Create reverb effect
      const convolver = audioContext.createConvolver();
      const impulseLength = audioContext.sampleRate * 2;
      const impulse = audioContext.createBuffer(2, impulseLength, audioContext.sampleRate);

      for (let channel = 0; channel < 2; channel++) {
        const channelData = impulse.getChannelData(channel);
        for (let i = 0; i < impulseLength; i++) {
          channelData[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / impulseLength, 2);
        }
      }
      convolver.buffer = impulse;

      // Master gain for the entire harp
      const masterGain = audioContext.createGain();
      const reverbGain = audioContext.createGain();

      masterGain.connect(audioContext.destination);
      reverbGain.connect(convolver);
      convolver.connect(audioContext.destination);

      masterGain.gain.setValueAtTime(0.4, audioContext.currentTime);
      reverbGain.gain.setValueAtTime(0.15, audioContext.currentTime);

      // Create each harp note
      harpNotes.forEach((note, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        const filter = audioContext.createBiquadFilter();

        // Connect: oscillator -> filter -> gain -> (master + reverb)
        oscillator.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(masterGain);
        gainNode.connect(reverbGain);

        // Harp-like waveform (mix of sine and triangle)
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(note.freq, audioContext.currentTime + note.delay);

        // Low-pass filter for warmth
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(note.freq * 3, audioContext.currentTime + note.delay);
        filter.Q.setValueAtTime(1, audioContext.currentTime + note.delay);

        // Harp envelope: quick attack, long decay
        const startTime = audioContext.currentTime + note.delay;
        const noteLength = 2.5 - (index * 0.1); // Each note gets slightly shorter

        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.8 - (index * 0.1), startTime + 0.02); // Quick attack
        gainNode.gain.exponentialRampToValueAtTime(0.3 - (index * 0.05), startTime + 0.3); // Sustain
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + noteLength); // Long decay

        // Add subtle frequency modulation for organic feel
        const lfo = audioContext.createOscillator();
        const lfoGain = audioContext.createGain();
        lfo.connect(lfoGain);
        lfoGain.connect(oscillator.frequency);

        lfo.frequency.setValueAtTime(4 + Math.random() * 2, startTime);
        lfo.type = 'sine';
        lfoGain.gain.setValueAtTime(note.freq * 0.002, startTime);

        // Start and stop
        oscillator.start(startTime);
        lfo.start(startTime);
        oscillator.stop(startTime + noteLength);
        lfo.stop(startTime + noteLength);
      });

      // Fade out master gain
      masterGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 3);
      reverbGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 3.5);

    } catch (error) {
      // Silently fail if Web Audio API is not supported
      console.log('Audio not supported');
    }
  };

  const playChimeSound = () => {
    // TODO: Add sound effect
    console.log('Playing chime sound');
  };

  const playGlowSound = () => {
    // TODO: Add sound effect
    console.log('Playing glow sound');
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[var(--bg-primary)]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 border border-[var(--accent-primary)]/30 rounded-full px-4 py-2 text-sm font-medium text-[var(--accent-primary)] mb-6">
              <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full animate-pulse"></div>
              <span>{t('howItWorks.comingSoon')}</span>
            </div>

            <h1 className={`text-4xl lg:text-6xl font-light tracking-wide mb-6 text-[var(--text-primary)] ${isLoaded ? 'fade-in-up' : 'opacity-0'}`}>
              {t('howItWorks.title')}
            </h1>
            <p className={`text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto ${isLoaded ? 'fade-in-up' : 'opacity-0'}`}>
              Tre gesti semplici che creeranno connessioni profonde attraverso la tecnologia più avanzata.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works Features */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Trill */}
            <div
              className="card text-center space-y-6 cursor-pointer transition-all duration-300 hover:scale-105"
              onMouseEnter={() => {
                setHoveredFeature('trill');
                playHarpSound();
              }}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  hoveredFeature === 'trill' 
                    ? 'bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-primary)]/60 animate-pulse' 
                    : 'bg-[var(--bg-elevated)]'
                }`}></div>
                <div className="absolute inset-2 bg-[var(--bg-primary)] rounded-full flex items-center justify-center">
                  <div className={`w-8 h-8 rounded-full transition-all duration-300 ${
                    hoveredFeature === 'trill' 
                      ? 'bg-[var(--accent-primary)] animate-ping' 
                      : 'bg-[var(--accent-primary)]/60'
                  }`}></div>
                </div>
              </div>
              <h3 className="text-2xl font-medium text-[var(--text-primary)]">{t('howItWorks.trill.title')}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{t('howItWorks.trill.description')}</p>
              <button className="btn-secondary text-sm">{t('howItWorks.trill.learnMore')}</button>
            </div>

            {/* Digital Frame */}
            <div
              className="card text-center space-y-6 cursor-pointer transition-all duration-300 hover:scale-105"
              onMouseEnter={() => {
                setHoveredFeature('digitalFrame');
                playChimeSound();
              }}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className={`absolute inset-0 rounded-lg transition-all duration-500 ${
                  hoveredFeature === 'digitalFrame' 
                    ? 'bg-gradient-to-br from-[var(--accent-secondary)] to-[var(--accent-secondary)]/60 animate-pulse' 
                    : 'bg-[var(--bg-elevated)]'
                }`}></div>
                <div className="absolute inset-2 bg-[var(--bg-primary)] rounded-lg flex items-center justify-center overflow-hidden">
                  <div className={`w-full h-full transition-all duration-300 ${
                    hoveredFeature === 'digitalFrame' 
                      ? 'bg-gradient-to-br from-[var(--accent-secondary)]/20 to-[var(--accent-secondary)]/40' 
                      : 'bg-[var(--accent-secondary)]/10'
                  }`}>
                    <Image
                      src={loveImage}
                      alt="Memory Display"
                      width={60}
                      height={60}
                      className="w-full h-full object-cover opacity-60"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-medium text-[var(--text-primary)]">{t('howItWorks.digitalFrame.title')}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{t('howItWorks.digitalFrame.description')}</p>
              <button className="btn-secondary text-sm">{t('howItWorks.digitalFrame.learnMore')}</button>
            </div>

            {/* Connection Light */}
            <div
              className={`card text-center space-y-6 cursor-pointer transition-all duration-500 hover:scale-105 relative overflow-hidden ${
                hoveredFeature === 'connectionLight'
                  ? 'shadow-2xl shadow-[var(--accent-tertiary)]/30 border-[var(--accent-tertiary)]/50 bg-gradient-to-br from-[var(--bg-elevated)] to-[var(--accent-tertiary)]/5'
                  : ''
              }`}
              onMouseEnter={() => {
                setHoveredFeature('connectionLight');
                playGlowSound();
              }}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="relative w-24 h-24 mx-auto mb-6">
                {/* Pulsing Aura Background */}
                <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  hoveredFeature === 'connectionLight'
                    ? 'pulsing-aura-animation'
                    : ''
                }`}></div>

                {/* Light Rays */}
                <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  hoveredFeature === 'connectionLight'
                    ? 'light-rays-animation'
                    : ''
                }`}></div>

                {/* Outer Ring */}
                <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  hoveredFeature === 'connectionLight'
                    ? 'bg-gradient-to-br from-[var(--accent-tertiary)] to-[var(--accent-tertiary)]/60 divine-radiance-animation'
                    : 'bg-[var(--bg-elevated)]'
                }`}></div>

                {/* Inner Circle */}
                <div className="absolute inset-2 bg-[var(--bg-primary)] rounded-full flex items-center justify-center">
                  <div className={`transition-all duration-500 rounded-full ${
                    hoveredFeature === 'connectionLight'
                      ? 'w-12 h-12 bg-gradient-to-br from-white via-[var(--accent-tertiary)] to-[var(--accent-tertiary)]/80 heavenly-light-animation heavenly-light-inner'
                      : 'w-8 h-8 bg-[var(--accent-tertiary)]/60'
                  }`}>
                    {/* Inner glow core */}
                    {hoveredFeature === 'connectionLight' && (
                      <div className="absolute inset-1 bg-white rounded-full opacity-80 animate-pulse"></div>
                    )}
                  </div>
                </div>

                {/* Additional light effects */}
                {hoveredFeature === 'connectionLight' && (
                  <>
                    {/* Outer glow rings */}
                    <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[var(--accent-tertiary)]/20 to-transparent animate-ping"></div>
                    <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-[var(--accent-tertiary)]/10 to-transparent animate-ping" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute -inset-12 rounded-full bg-gradient-to-br from-white/5 to-transparent animate-ping" style={{animationDelay: '1s'}}></div>
                  </>
                )}
              </div>
              <h3 className="text-2xl font-medium text-[var(--text-primary)]">{t('howItWorks.connectionLight.title')}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{t('howItWorks.connectionLight.description')}</p>
              <button className="btn-secondary text-sm">{t('howItWorks.connectionLight.learnMore')}</button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light tracking-wide mb-6 text-[var(--text-primary)]">
              Tecnologia Avanzata
            </h2>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              Ogni RIMIAM integra sensori di ultima generazione, connettività globale e un'esperienza utente intuitiva.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card space-y-4">
              <h3 className="text-xl font-medium text-[var(--text-primary)]">Sensori Aptici</h3>
              <p className="text-[var(--text-secondary)]">
                Motori di vibrazione di precisione che creano feedback tattili delicati e naturali.
              </p>
            </div>
            <div className="card space-y-4">
              <h3 className="text-xl font-medium text-[var(--text-primary)]">Connettività Globale</h3>
              <p className="text-[var(--text-secondary)]">
                Connessione sicura e istantanea ovunque nel mondo attraverso reti cellulari avanzate.
              </p>
            </div>
            <div className="card space-y-4">
              <h3 className="text-xl font-medium text-[var(--text-primary)]">Display OLED</h3>
              <p className="text-[var(--text-secondary)]">
                Schermo ad alta risoluzione per visualizzare i vostri ricordi più preziosi.
              </p>
            </div>
            <div className="card space-y-4">
              <h3 className="text-xl font-medium text-[var(--text-primary)]">Batteria Duratura</h3>
              <p className="text-[var(--text-secondary)]">
                Fino a 7 giorni di autonomia con ricarica wireless rapida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-light tracking-wide mb-6 text-[var(--text-primary)]">
            Pronto a Connettere i Cuori?
          </h2>
          <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-8 max-w-2xl mx-auto">
            Unisciti alla lista d'attesa per essere tra i primi a vivere l'esperienza RIMIAM.
          </p>
          <button className="btn-primary">
            Entra nella Lista d'Attesa
          </button>
        </div>
      </section>
    </div>
  );
}
