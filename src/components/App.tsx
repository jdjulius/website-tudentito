import { useState, useEffect } from 'react';
import { Nav, MobileMenu } from './Nav';
import { Hero } from './Hero';
import { Services } from './Services';
import { WhyUs } from './WhyUs';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { BookingModal } from './BookingModal';
import { Icon } from './Icon';
import { WA_LINK } from '../lib/constants';

export default function App() {
  const [bookOpen, setBookOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setBookOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <Nav onBook={() => setBookOpen(true)} onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onBook={() => setBookOpen(true)}
      />
      <Hero onBook={() => setBookOpen(true)} />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
      <a
        className="fab-whatsapp"
        href={WA_LINK}
        target="_blank"
        rel="noopener"
        aria-label="Contactar por WhatsApp"
      >
        <Icon id="wa" />
      </a>
      <BookingModal open={bookOpen} onClose={() => setBookOpen(false)} />
    </>
  );
}
