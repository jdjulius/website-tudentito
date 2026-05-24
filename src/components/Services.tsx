import { Icon } from './Icon';
import { useReveal } from '../hooks/useReveal';
import { SERVICES } from '../lib/constants';

export function Services() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="servicios" ref={ref}>
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-tag">Servicios</span>
          <h2>Todo lo que tu sonrisa necesita, en un solo lugar.</h2>
          <p className="sec-sub">
            Atención integral para toda la familia, con un trato cariñoso que solo encuentras en Tu Dientito.
          </p>
        </div>
        <div className="services-grid reveal-stagger">
          {SERVICES.map((s, i) => (
            <article
              key={i}
              className="svc-card"
              style={{ '--svc-bg': s.bg } as React.CSSProperties}
            >
              <div className="svc-icon">
                <Icon id={s.icon} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="svc-tag">{s.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
