'use client'

import { useLang } from './LangContext'
import { useModal } from './ModalContext'
import ScrollReveal from './ScrollReveal'

export default function FinalCTA() {
  const { t } = useLang()
  const { openModal } = useModal()

  return (
    <section id="cta" style={{ padding: '130px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 900, height: 900,
        background: 'radial-gradient(circle, var(--emerald-glow) 0%, transparent 55%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <div className="section-label" style={{ justifyContent: 'center' }}>{t('Připraven?', 'Ready?')}</div>
          <h2
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,4.5vw,60px)', lineHeight: 1, letterSpacing: 1, marginBottom: 0 }}
            dangerouslySetInnerHTML={{ __html: t('PŘESTAŇ ODKLÁDAT<br>SVÉ ZDRAVÍ', 'STOP POSTPONING<br>YOUR HEALTH') }}
          />
        </ScrollReveal>
        <ScrollReveal delay="d1">
          <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 48px', marginTop: 16 }}>
            {t(
              'Nepracuji s každým. Vyplň dotazník a zjistíme, jestli to dává smysl.',
              "I don't work with everyone. Take the questionnaire and we'll see if it makes sense."
            )}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <button onClick={openModal} className="btn-primary">
              <span>{t('Vyplnit dotazník', 'Take the Questionnaire')}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <a href="mailto:jakub.nosek@biostrategy.co" className="btn-ghost">
              {t('Zarezervovat konzultaci', 'Book a Consultation')}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
