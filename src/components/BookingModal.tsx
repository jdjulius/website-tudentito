import { useState, useEffect } from 'react';
import { Icon } from './Icon';
import {
  WHATSAPP_NUMBER,
  WA_LINK,
  BOOKING_REASONS,
  DAY_NAMES,
  MONTH_NAMES,
} from '../lib/constants';

const TIMES = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'];
const DISABLED_TIMES = new Set(['12:00', '16:00']);

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

export function BookingModal({ open, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [reason, setReason] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setStep(1); setReason(''); setDate(null); setTime(null);
      setName(''); setPhone(''); setDone(false);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const today = new Date();
  const dates = Array.from({ length: 8 }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() + i + 1);
    return d;
  });

  const finishWhatsapp = () => {
    if (!date || !time) return;
    const dStr = `${DAY_NAMES[date.getDay()]} ${date.getDate()} ${MONTH_NAMES[date.getMonth()]}`;
    const reasonLabel = BOOKING_REASONS.find((r) => r.v === reason)?.l ?? reason;
    const text = `Hola Tu Dientito! 🦷 Quisiera agendar una cita.\n\n• Motivo: ${reasonLabel}\n• Fecha: ${dStr} a las ${time}\n• Nombre: ${name}\n• Teléfono: ${phone}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const submit = () => {
    setDone(true);
    setTimeout(() => finishWhatsapp(), 500);
  };

  const stepTitle = step === 1 ? '¿Qué necesitas?' : step === 2 ? 'Elige fecha y hora' : 'Tus datos';
  const stepSub = [
    'Cuéntanos brevemente el motivo de tu cita.',
    'Estos son los espacios disponibles esta semana.',
    'Último paso. Te confirmamos por WhatsApp.',
  ][step - 1];

  const canAdvance = step === 1 ? !!reason : step === 2 ? !!(date && time) : true;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="bk-title"
      >
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">
          <Icon id="x" />
        </button>

        {!done ? (
          <>
            <span className="sec-tag" style={{ marginBottom: 10, display: 'inline-flex' }}>
              Paso {step} de 3
            </span>
            <h3 id="bk-title">{stepTitle}</h3>
            <p className="sub">{stepSub}</p>

            {step === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 22 }}>
                {BOOKING_REASONS.map((r) => (
                  <button
                    key={r.v}
                    type="button"
                    onClick={() => setReason(r.v)}
                    style={{
                      padding: '16px 18px',
                      background: reason === r.v ? 'var(--celeste-200)' : 'var(--paper)',
                      borderRadius: 14,
                      border: `1.5px solid ${reason === r.v ? 'var(--celeste-400)' : 'transparent'}`,
                      textAlign: 'left',
                      fontWeight: 700,
                      fontSize: 15,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all .2s',
                    }}
                  >
                    {r.l}
                    {reason === r.v && <Icon id="check" width="18" height="18" />}
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <>
                <div className="date-grid">
                  {dates.map((d, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`date-pill ${date && d.getDate() === date.getDate() ? 'active' : ''}`}
                      onClick={() => setDate(d)}
                    >
                      <b>{d.getDate()}</b>
                      <span>{DAY_NAMES[d.getDay()]} · {MONTH_NAMES[d.getMonth()]}</span>
                    </button>
                  ))}
                </div>
                {date && (
                  <>
                    <label
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: 'var(--ink-700)',
                        display: 'block',
                        marginBottom: 10,
                      }}
                    >
                      Horarios disponibles
                    </label>
                    <div className="time-grid">
                      {TIMES.map((t) => (
                        <button
                          key={t}
                          type="button"
                          className={[
                            'time-pill',
                            DISABLED_TIMES.has(t) ? 'disabled' : '',
                            time === t ? 'active' : '',
                          ].join(' ')}
                          disabled={DISABLED_TIMES.has(t)}
                          onClick={() => setTime(t)}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </>
            )}

            {step === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 22 }}>
                <div className="field">
                  <label htmlFor="bk-name">Nombre</label>
                  <input
                    id="bk-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div className="field">
                  <label htmlFor="bk-phone">Teléfono / WhatsApp</label>
                  <input
                    id="bk-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="5476 4558"
                  />
                </div>
                <div
                  style={{
                    background: 'var(--celeste-50)',
                    borderRadius: 14,
                    padding: '14px 16px',
                    fontSize: 14,
                    color: 'var(--ink-700)',
                  }}
                >
                  <b style={{ display: 'block', marginBottom: 4 }}>Resumen</b>
                  · {BOOKING_REASONS.find((r) => r.v === reason)?.l}<br />
                  · {date && `${DAY_NAMES[date.getDay()]} ${date.getDate()} ${MONTH_NAMES[date.getMonth()]} a las ${time}`}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', gap: 10, justifyContent: 'space-between' }}>
              {step > 1 ? (
                <button className="btn btn-ghost" type="button" onClick={() => setStep(step - 1)}>
                  Atrás
                </button>
              ) : (
                <span />
              )}
              {step < 3 ? (
                <button
                  className="btn btn-primary"
                  type="button"
                  disabled={!canAdvance}
                  style={{ opacity: canAdvance ? 1 : 0.4 }}
                  onClick={() => setStep(step + 1)}
                >
                  Continuar <Icon id="arrow" width="16" height="16" />
                </button>
              ) : (
                <button
                  className="btn btn-whatsapp"
                  type="button"
                  disabled={!name.trim() || !phone.trim()}
                  style={{ opacity: name.trim() && phone.trim() ? 1 : 0.4 }}
                  onClick={submit}
                >
                  <Icon id="wa" width="18" height="18" />
                  Confirmar por WhatsApp
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="form-success" style={{ marginTop: 0 }}>
            <div className="check">
              <Icon id="check" width="32" height="32" />
            </div>
            <h4>¡Cita pre-reservada!</h4>
            <p>
              Te abrimos WhatsApp para confirmar con el equipo. Si no se abre solo,{' '}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener"
                style={{ color: 'var(--whatsapp-dk)', fontWeight: 700 }}
              >
                haz clic aquí
              </a>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
