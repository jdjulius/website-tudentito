import { Icon } from './Icon';
import { WA_LINK } from '../lib/constants';

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <a href="#" className="brand">
              <span className="brand-mark">
                <Icon id="tooth" width="22" height="22" />
              </span>
              <span className="brand-name">
                <b>Tu Dientito</b>
                <span>Clínica Dental</span>
              </span>
            </a>
            <p>
              Cuidamos tus dientes como a tus niños. Sonrisas felices, hábitos saludables y un
              equipo que siempre te recibe con cariño.
            </p>
            <div className="foot-social">
              <a href="#" aria-label="Instagram"><Icon id="ig" /></a>
              <a href="#" aria-label="Facebook"><Icon id="fb" /></a>
              <a href="#" aria-label="TikTok"><Icon id="tt" /></a>
              <a href={WA_LINK} target="_blank" rel="noopener" aria-label="WhatsApp">
                <Icon id="wa" />
              </a>
            </div>
          </div>

          <div className="foot-col">
            <h5>Clínica</h5>
            <ul>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Servicios</h5>
            <ul>
              <li><a href="#">Odontopediatría</a></li>
              <li><a href="#">Ortodoncia</a></li>
              <li><a href="#">Limpiezas</a></li>
              <li><a href="#">Emergencias</a></li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Horario</h5>
            <ul>
              <li>Lun – Vie · 8:00 – 18:00</li>
              <li>Sábado · 9:00 – 14:00</li>
              <li>Domingo · cerrado</li>
              <li>
                <a href={WA_LINK} target="_blank" rel="noopener">
                  Emergencias 24/7 →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-bot">
          <span>© 2026 Clínica Dental Tu Dientito · Todos los derechos reservados.</span>
          <span>San Lucas Sacatepéquez, Guatemala 🇬🇹</span>
        </div>
      </div>
    </footer>
  );
}
