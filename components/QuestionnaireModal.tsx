'use client'

import { useEffect, useRef, useState } from 'react'
import { useModal } from './ModalContext'
import { useLang } from './LangContext'

interface FormData {
  name: string
  email: string
  occupation: string
  workHours: string
  sleep: string
  exercise: string
  motivation: string[]
  commitment: string
}

const TOTAL_STEPS = 4

export default function QuestionnaireModal() {
  const { isOpen, closeModal } = useModal()
  const { lang, t } = useLang()
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState<'forward' | 'back'>('forward')
  const [animating, setAnimating] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [data, setData] = useState<FormData>({
    name: '', email: '', occupation: '',
    workHours: '', sleep: '', exercise: '',
    motivation: [], commitment: '',
  })
  const overlayRef = useRef<HTMLDivElement>(null)

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    if (isOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  // Reset on open
  useEffect(() => {
    if (isOpen) {
      setStep(1)
      setStatus('idle')
      setData({ name: '', email: '', occupation: '', workHours: '', sleep: '', exercise: '', motivation: [], commitment: '' })
    }
  }, [isOpen])

  function handleClose() {
    closeModal()
  }

  function goNext() {
    if (animating) return
    setDirection('forward')
    setAnimating(true)
    setTimeout(() => { setStep(s => s + 1); setAnimating(false) }, 280)
  }

  function goBack() {
    if (animating) return
    setDirection('back')
    setAnimating(true)
    setTimeout(() => { setStep(s => s - 1); setAnimating(false) }, 280)
  }

  function toggleMotivation(val: string) {
    setData(d => ({
      ...d,
      motivation: d.motivation.includes(val)
        ? d.motivation.filter(m => m !== val)
        : [...d.motivation, val],
    }))
  }

  async function handleSubmit() {
    setStatus('loading')
    try {
      const res = await fetch('/api/questionnaire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, lang }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  function canProceed() {
    if (step === 1) return data.name.trim() !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
    if (step === 2) return data.workHours !== '' && data.sleep !== '' && data.exercise !== ''
    if (step === 3) return data.motivation.length > 0
    if (step === 4) return data.commitment !== ''
    return false
  }

  if (!isOpen) return null

  const progress = (step / TOTAL_STEPS) * 100

  const slideClass = animating
    ? direction === 'forward' ? 'modal-step-exit-left' : 'modal-step-exit-right'
    : 'modal-step-enter'

  return (
    <div
      ref={overlayRef}
      onClick={e => { if (e.target === overlayRef.current) handleClose() }}
      style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        background: 'rgba(6,14,26,0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
        animation: 'fadeIn 0.25s ease-out both',
      }}
    >
      <div
        style={{
          width: '100%', maxWidth: 560,
          background: '#0f1f38',
          border: '1px solid rgba(16,185,129,0.12)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.7)',
          position: 'relative',
          maxHeight: 'calc(100vh - 32px)',
          overflowY: 'auto',
          animation: 'modalSlideUp 0.3s cubic-bezier(0.16,1,0.3,1) both',
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Zavřít"
          style={{
            position: 'absolute', top: 16, right: 16, zIndex: 10,
            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
            color: '#94a3b8', cursor: 'pointer', width: 36, height: 36,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, transition: 'all 0.2s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#94a3b8' }}
        >
          ×
        </button>

        {/* Progress bar */}
        {status === 'idle' && (
          <div style={{ height: 3, background: 'rgba(255,255,255,0.06)' }}>
            <div style={{
              height: '100%', background: '#10b981',
              width: `${progress}%`, transition: 'width 0.4s cubic-bezier(0.16,1,0.3,1)',
            }} />
          </div>
        )}

        <div style={{ padding: '36px 40px 40px' }} className="modal-body-pad">

          {/* SUCCESS */}
          {status === 'success' && (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 24px',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 32, letterSpacing: 1, marginBottom: 12 }}>
                {t('Odesláno.', 'Sent.')}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
                {t('Díky. Ozvu se ti do 48 hodin.', 'Thanks. I\'ll get back to you within 48 hours.')}
              </p>
              <button onClick={handleClose} className="btn-primary" style={{ margin: '0 auto' }}>
                {t('Zavřít', 'Close')}
              </button>
            </div>
          )}

          {/* ERROR */}
          {status === 'error' && (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <p style={{ color: '#ef4444', marginBottom: 24, fontSize: 15, lineHeight: 1.7 }}>
                {t(
                  'Něco se pokazilo. Zkus to znovu nebo napiš na jakub.nosek@biostrategy.co',
                  'Something went wrong. Try again or email jakub.nosek@biostrategy.co'
                )}
              </p>
              <button onClick={() => setStatus('idle')} className="btn-primary">
                {t('Zkusit znovu', 'Try again')}
              </button>
            </div>
          )}

          {/* FORM */}
          {(status === 'idle' || status === 'loading') && (
            <>
              {/* Step indicator */}
              <div style={{ marginBottom: 28 }}>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#10b981', marginBottom: 6 }}>
                  {t(`Krok ${step} ze ${TOTAL_STEPS}`, `Step ${step} of ${TOTAL_STEPS}`)}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, letterSpacing: 1 }}>
                  {step === 1 && t('Kdo jsi?', 'Who are you?')}
                  {step === 2 && t('Tvoje situace', 'Your situation')}
                  {step === 3 && t('Co tě sem přivedlo?', 'What brought you here?')}
                  {step === 4 && t('Závazek', 'Commitment')}
                </h3>
              </div>

              <div className={slideClass} key={step}>

                {/* STEP 1 */}
                {step === 1 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <Field label={t('Jméno a příjmení', 'Full name')} required>
                      <input
                        type="text"
                        value={data.name}
                        onChange={e => setData(d => ({ ...d, name: e.target.value }))}
                        placeholder={t('Jan Novák', 'John Smith')}
                        className="modal-input"
                        autoFocus
                      />
                    </Field>
                    <Field label="Email" required>
                      <input
                        type="email"
                        value={data.email}
                        onChange={e => setData(d => ({ ...d, email: e.target.value }))}
                        placeholder="jan@firma.cz"
                        className="modal-input"
                      />
                    </Field>
                    <Field label={t('Čím se živíš?', 'What do you do?')}>
                      <input
                        type="text"
                        value={data.occupation}
                        onChange={e => setData(d => ({ ...d, occupation: e.target.value }))}
                        placeholder="CEO, founder, trader, developer..."
                        className="modal-input"
                      />
                    </Field>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    <SelectGroup
                      label={t('Kolik hodin týdně pracuješ?', 'How many hours do you work per week?')}
                      options={['40-50', '50-60', '60-70', '70+']}
                      value={data.workHours}
                      onChange={v => setData(d => ({ ...d, workHours: v }))}
                    />
                    <SelectGroup
                      label={t('Jak vypadá tvůj spánek?', "How's your sleep?")}
                      options={t('Méně než 5h|5-6h|6-7h|7+h', 'Less than 5h|5-6h|6-7h|7+h').split('|')}
                      value={data.sleep}
                      onChange={v => setData(d => ({ ...d, sleep: v }))}
                    />
                    <SelectGroup
                      label={t('Cvičíš pravidelně?', 'Do you exercise regularly?')}
                      options={t('Vůbec ne|Občas, když vyjde čas|1-2× týdně|3+× týdně', 'Not at all|Occasionally|1-2× per week|3+× per week').split('|')}
                      value={data.exercise}
                      onChange={v => setData(d => ({ ...d, exercise: v }))}
                    />
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div>
                    <p style={{ fontSize: 13, color: '#64748b', marginBottom: 16 }}>
                      {t('Vyber vše, co platí.', 'Select all that apply.')}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                      {t(
                        'Energie a únava|Spánek|Stres a burnout|Složení těla|Prevence a longevity|Výkonnost|Vím, že to řeším pozdě',
                        'Energy & fatigue|Sleep|Stress & burnout|Body composition|Prevention & longevity|Performance|I know I\'m late to this'
                      ).split('|').map(opt => (
                        <Chip
                          key={opt}
                          label={opt}
                          selected={data.motivation.includes(opt)}
                          onClick={() => toggleMotivation(opt)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 4 */}
                {step === 4 && (
                  <SelectGroup
                    label={t(
                      'Jsi připravený investovat do svého zdraví jako do byznysu?',
                      'Are you ready to invest in your health like you invest in your business?'
                    )}
                    options={t(
                      'Ano, hledám prémiovou službu|Zatím jen zjišťuji možnosti',
                      "Yes, I'm looking for a premium service|Just exploring options for now"
                    ).split('|')}
                    value={data.commitment}
                    onChange={v => setData(d => ({ ...d, commitment: v }))}
                    vertical
                  />
                )}
              </div>

              {/* Navigation */}
              <div style={{ display: 'flex', gap: 12, marginTop: 32, justifyContent: step > 1 ? 'space-between' : 'flex-end' }}>
                {step > 1 && (
                  <button
                    onClick={goBack}
                    disabled={status === 'loading'}
                    className="btn-ghost"
                    style={{ padding: '12px 24px', fontSize: 13 }}
                  >
                    {t('Zpět', 'Back')}
                  </button>
                )}
                {step < TOTAL_STEPS ? (
                  <button
                    onClick={goNext}
                    disabled={!canProceed() || animating}
                    className="btn-primary"
                    style={{ opacity: canProceed() ? 1 : 0.4, cursor: canProceed() ? 'pointer' : 'default', fontSize: 13, padding: '12px 32px' }}
                  >
                    {t('Další', 'Next')}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canProceed() || status === 'loading'}
                    className="btn-primary"
                    style={{ opacity: canProceed() ? 1 : 0.4, cursor: canProceed() ? 'pointer' : 'default', fontSize: 13, padding: '12px 32px', gap: 10 }}
                  >
                    {status === 'loading' ? (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 0.8s linear infinite' }}>
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        {t('Odesílám...', 'Sending...')}
                      </>
                    ) : (
                      <>
                        {t('Odeslat', 'Submit')}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .modal-step-enter {
          animation: stepEnter 0.28s cubic-bezier(0.16,1,0.3,1) both;
        }
        .modal-step-exit-left {
          animation: stepExitLeft 0.28s cubic-bezier(0.16,1,0.3,1) both;
        }
        .modal-step-exit-right {
          animation: stepExitRight 0.28s cubic-bezier(0.16,1,0.3,1) both;
        }
        @keyframes stepEnter {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes stepExitLeft {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(-24px); }
        }
        @keyframes stepExitRight {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(24px); }
        }
        .modal-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          color: #ffffff;
          font-family: var(--font-body);
          font-size: 14px;
          padding: 12px 16px;
          outline: none;
          transition: border-color 0.2s;
        }
        .modal-input::placeholder { color: #475569; }
        .modal-input:focus { border-color: #10b981; }
        .modal-chip {
          padding: 8px 16px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          color: #94a3b8;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .modal-chip:hover { border-color: rgba(16,185,129,0.4); color: #fff; }
        .modal-chip.selected {
          background: rgba(16,185,129,0.12);
          border-color: #10b981;
          color: #34d399;
        }
        .modal-select-card {
          width: 100%;
          text-align: left;
          padding: 12px 16px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.02);
          color: #94a3b8;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .modal-select-card:hover { border-color: rgba(16,185,129,0.4); color: #fff; }
        .modal-select-card.selected {
          background: rgba(16,185,129,0.1);
          border-color: #10b981;
          color: #34d399;
        }
        @media (max-width: 600px) {
          .modal-body-pad { padding: 28px 20px 32px !important; }
        }
      `}</style>
    </div>
  )
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: 12, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#64748b', marginBottom: 8 }}>
        {label}{required && <span style={{ color: '#10b981', marginLeft: 2 }}>*</span>}
      </label>
      {children}
    </div>
  )
}

function SelectGroup({ label, options, value, onChange, vertical }: {
  label: string
  options: string[]
  value: string
  onChange: (v: string) => void
  vertical?: boolean
}) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: 12, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#64748b', marginBottom: 12 }}>
        {label}
      </label>
      <div style={{ display: 'flex', flexDirection: vertical ? 'column' : 'row', flexWrap: 'wrap', gap: 8 }}>
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`${vertical ? 'modal-select-card' : 'modal-chip'}${value === opt ? ' selected' : ''}`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

function Chip({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className={`modal-chip${selected ? ' selected' : ''}`}>
      {label}
    </button>
  )
}
