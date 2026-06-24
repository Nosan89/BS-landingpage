'use client'

import { useLang } from './LangContext'
import { useModal } from './ModalContext'
import ScrollReveal from './ScrollReveal'

export default function FoundingClient() {
  const { t, lang } = useLang()
  const { openModal } = useModal()

  return (
    <section id="founding" style={{ padding: '110px 0', textAlign: 'center', background: '#060e1a' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <ScrollReveal>
          <div className="section-label" style={{ justifyContent: 'center' }}>{t('Pilotní program', 'Pilot Program')}</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,4.5vw,60px)', lineHeight: 1, letterSpacing: 1, marginBottom: 0 }}>
            {t('FOUNDING CLIENT PROGRAM', 'FOUNDING CLIENT PROGRAM')}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay="d1">
          <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.7, maxWidth: 620, margin: '24px auto 40px' }}>
            {lang === 'cs' ? (
              <>První klienti BioStrategy vstupují za zvýhodněných podmínek výměnou za detailní zpětnou vazbu a možnost anonymizovaně použít výsledky jako case study. Pilotní cena je dostupná <strong style={{ color: '#e8be6a' }}>pro první 3 klienty</strong>. Kapacita je záměrně omezená.</>
            ) : (
              <>The first BioStrategy clients join at preferential conditions in exchange for detailed feedback and permission to use their results as an anonymized case study. Pilot pricing is available <strong style={{ color: '#e8be6a' }}>for the first 3 clients</strong>. Capacity is intentionally limited.</>
            )}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <button onClick={openModal} className="btn-primary">
              <span>{t('Domluvit úvodní konzultaci', 'Book an intro call')}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
