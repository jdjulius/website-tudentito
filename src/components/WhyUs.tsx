import { Icon } from './Icon';
import { useReveal } from '../hooks/useReveal';
import { WHY } from '../lib/constants';

export function WhyUs() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="nosotros" ref={ref}>
      <div className="container">
        <div className="why-wrap">
          <div className="why-img-stack reveal">
            <div className="wi wi-1">
              <img src="/assets/clinic-1.png" alt="Sillón dental azul celeste con instrumental" />
            </div>
            <div className="wi wi-2">
              <img src="/assets/clinic-2.png" alt="Consultorio dental con plantas y luz natural" />
            </div>
            <div className="wi-badge">
              <b>4.9★</b>
              <span>+200 reseñas</span>
            </div>
          </div>

          <div className="why-content reveal">
            <div className="sec-head" style={{ marginBottom: 8 }}>
              <span className="sec-tag">Por qué nosotros</span>
              <h2>Somos diferentes.</h2>
              <p className="sec-sub">
                No es solo limpiar dientes. Es enseñar a cuidarlos, calmar el miedo y construir
                hábitos para toda la vida.
              </p>
            </div>
            <div className="why-list">
              {WHY.map((w, i) => (
                <div key={i} className="why-item">
                  <div className="why-num">{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <h4>{w.h}</h4>
                    <p>{w.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
