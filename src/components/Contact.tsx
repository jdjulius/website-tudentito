import { useState } from 'react';
import { Icon } from './Icon';
import { useReveal } from '../hooks/useReveal';
import { WA_LINK } from '../lib/constants';

function ContactForm() {
  const [data, setData] = useState({ name: '', phone: '', email: '', msg: '' });
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [sent, setSent] = useState(false);

  const setField = (k: string, v: string) => {
    setData((d) => ({ ...d, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: null }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!data.name.trim()) next.name = 'Por favor escribe tu nombre';
    if (!data.phone.trim() || !/^[\d\s+\-()]{7,}$/.test(data.phone))
      next.phone = 'Teléfono inválido';
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      next.email = 'Email inválido';
    if (!data.msg.trim()) next.msg = 'Cuéntanos cómo podemos ayudarte';
    if (Object.keys(next).length) { setErrors(next); return; }
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success">
        <div className="check">
          <Icon id="check" width="32" height="32" />
        </div>
        <h4>¡Mensaje enviado!</h4>
        <p>
          Gracias {data.name.split(' ')[0]}, te contactaremos en las próximas horas hábiles.
          Si es urgente, escríbenos por WhatsApp.
        </p>
        <a
          className="btn btn-whatsapp"
          href={WA_LINK}
          target="_blank"
          rel="noopener"
          style={{ marginTop: 6 }}
        >
          <Icon id="wa" width="18" height="18" />
          Abrir WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form className="contact-form-card" onSubmit={onSubmit} noValidate>
      <h3>Escríbenos</h3>
      <p className="sub">Te respondemos en menos de 2 horas durante horario de clínica.</p>

      <div className="form-row">
        <div className={`field ${errors.name ? 'error' : ''}`}>
          <label htmlFor="f-name">Nombre completo</label>
          <input
            id="f-name"
            value={data.name}
            onChange={(e) => setField('name', e.target.value)}
            placeholder="María González"
          />
          {errors.name && <span className="err-msg">{errors.name}</span>}
        </div>
        <div className={`field ${errors.phone ? 'error' : ''}`}>
          <label htmlFor="f-phone">Teléfono</label>
          <input
            id="f-phone"
            type="tel"
            value={data.phone}
            onChange={(e) => setField('phone', e.target.value)}
            placeholder="5476 4558"
          />
          {errors.phone && <span className="err-msg">{errors.phone}</span>}
        </div>
      </div>

      <div className={`field ${errors.email ? 'error' : ''}`}>
        <label htmlFor="f-email">Correo (opcional)</label>
        <input
          id="f-email"
          type="email"
          value={data.email}
          onChange={(e) => setField('email', e.target.value)}
          placeholder="tu@correo.com"
        />
        {errors.email && <span className="err-msg">{errors.email}</span>}
      </div>

      <div className={`field ${errors.msg ? 'error' : ''}`}>
        <label htmlFor="f-msg">¿Cómo podemos ayudarte?</label>
        <textarea
          id="f-msg"
          value={data.msg}
          onChange={(e) => setField('msg', e.target.value)}
          placeholder="Quisiera agendar una limpieza para mi hijo de 6 años..."
        />
        {errors.msg && <span className="err-msg">{errors.msg}</span>}
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        style={{ alignSelf: 'flex-start', marginTop: 4 }}
      >
        Enviar mensaje <Icon id="arrow" width="16" height="16" />
      </button>
    </form>
  );
}

export function Contact() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="contacto" ref={ref}>
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-tag">Contacto</span>
          <h2>Estamos cerca, listos para sonreír contigo.</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info-card reveal">
            <h3>Visítanos</h3>
            <p className="intro">
              Estamos en el corazón de San Lucas Sacatepéquez. Atendemos con cita previa y
              emergencias 24/7.
            </p>
            <ul className="contact-list">
              <li>
                <span className="ci-icon"><Icon id="pin" /></span>
                <div>
                  <b>San Lucas Sacatepéquez, Guatemala</b>
                  <span>Km 28.5 Carretera Interamericana</span>
                </div>
              </li>
              <li>
                <span className="ci-icon"><Icon id="phone" /></span>
                <div>
                  <b>+502 5476 4558</b>
                  <span>Lun a Sab · 8:00 a 18:00</span>
                </div>
              </li>
              <li>
                <span className="ci-icon"><Icon id="mail" /></span>
                <div>
                  <b>dental@dientito.com</b>
                  <span>Te respondemos en menos de 2h</span>
                </div>
              </li>
              <li>
                <span className="ci-icon"><Icon id="clock" /></span>
                <div>
                  <b>Emergencias 24/7</b>
                  <span>Llámanos en cualquier momento</span>
                </div>
              </li>
            </ul>
            <a
              className="map-frame"
              href="https://maps.google.com/?q=San+Lucas+Sacatepequez+Guatemala"
              target="_blank"
              rel="noopener"
              aria-label="Abrir en Google Maps"
            >
              <div className="map-pin" />
              <div className="map-label">Abrir en Google Maps →</div>
            </a>
          </div>
          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
