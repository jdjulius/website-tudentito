import { useState, useEffect } from 'react';
import { Icon } from './Icon';

interface NavProps {
  onBook: () => void;
  onOpenMenu: () => void;
}

export function Nav({ onBook, onOpenMenu }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-row">
        <a href="#" className="brand" aria-label="Tu Dientito - inicio">
          <span className="brand-mark">
            <Icon id="tooth" width="22" height="22" />
          </span>
          <span className="brand-name">
            <b>Tu Dientito</b>
            <span>Clínica Dental</span>
          </span>
        </a>
        <ul className="nav-links">
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <a
          href="#agendar"
          className="nav-cta"
          onClick={(e) => { e.preventDefault(); onBook(); }}
        >
          Agendar cita <Icon id="arrow" width="14" height="14" />
        </a>
        <button className="menu-btn" onClick={onOpenMenu} aria-label="Abrir menú">
          <Icon id="menu" />
        </button>
      </div>
    </nav>
  );
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  onBook: () => void;
}

export function MobileMenu({ open, onClose, onBook }: MobileMenuProps) {
  return (
    <div className={`mob-menu ${open ? 'open' : ''}`}>
      <button className="mob-close" onClick={onClose} aria-label="Cerrar menú">
        <Icon id="x" />
      </button>
      <a href="#servicios" onClick={onClose}>Servicios</a>
      <a href="#nosotros" onClick={onClose}>Nosotros</a>
      <a href="#contacto" onClick={onClose}>Contacto</a>
      <a
        href="#"
        className="btn btn-primary mob-cta"
        onClick={(e) => { e.preventDefault(); onClose(); onBook(); }}
      >
        Agendar cita <Icon id="arrow" width="14" height="14" />
      </a>
    </div>
  );
}
