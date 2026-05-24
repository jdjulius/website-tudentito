import { useState, useEffect, useRef } from 'react';
import { Icon } from './Icon';
import { useReveal } from '../hooks/useReveal';
import { WA_LINK } from '../lib/constants';

interface HeroProps {
  onBook: () => void;
}

export function Hero({ onBook }: HeroProps) {
  const ref = useReveal<HTMLElement>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    videoRef.current?.play().catch(() => setVideoFailed(true));
  }, []);

  return (
    <header className="hero" id="hero" ref={ref}>
      <div className="hero-bg">
        {!videoFailed ? (
          <video
            ref={videoRef}
            src="/assets/clinic-loop.mp4"
            poster="/assets/clinic-1.png"
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoFailed(true)}
          />
        ) : (
          <div
            className="hero-still"
            style={{ backgroundImage: 'url(/assets/clinic-1.png)' }}
          />
        )}
      </div>

      <div className="container">
        <div className="hero-inner reveal">
          <div className="eyebrow">
            <span className="dot">
              <Icon id="heart" width="12" height="12" />
            </span>
            Odontopediatría con cariño · San Lucas Sacatepéquez
          </div>
          <h1>
            Cuidamos tus dientes{' '}
            <span className="accent">como a tus niños</span>
          </h1>
          <p className="lede">
            Clínica especializada en sonrisas pequeñas y grandes. Un equipo cariñoso, profesional
            y un ambiente diseñado para que toda la familia se sienta en casa.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-whatsapp" href={WA_LINK} target="_blank" rel="noopener">
              <Icon id="wa" width="20" height="20" />
              Contacta por WhatsApp
            </a>
            <a
              className="btn btn-celeste"
              href="#agendar"
              onClick={(e) => { e.preventDefault(); onBook(); }}
            >
              Agendar cita <Icon id="arrow" width="16" height="16" />
            </a>
          </div>

          <div className="hero-meta">
            <div className="mt">
              <b>+1,200</b>
              <span>sonrisas felices</span>
            </div>
            <div className="sep" />
            <div className="mt">
              <b>12 años</b>
              <span>de experiencia</span>
            </div>
            <div className="sep" />
            <div className="mt">
              <b>24/7</b>
              <span>emergencias</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-card" role="complementary">
        <div className="av">
          <Icon id="smile" width="24" height="24" />
        </div>
        <div>
          <b>Dra. Lucía Méndez</b>
          <span>Odontopediatra · 12 años cuidando sonrisas</span>
        </div>
      </div>
    </header>
  );
}
