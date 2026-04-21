'use client'

import { useLang } from './LangContext'
import ScrollReveal from './ScrollReveal'

const steps = [
  {
    num: '01',
    titleCs: 'KVALIFIKACE', titleEn: 'QUALIFY',
    bodyCs: 'Krátký dotazník. Zjistím, jestli jsme match - nepracuji s každým.',
    bodyEn: "Short questionnaire. I'll see if we're a match - I don't work with everyone.",
  },
  {
    num: '02',
    titleCs: 'KONZULTACE', titleEn: 'CONSULT',
    bodyCs: '30min call. Tvá situace, cíle, a jestli ti reálně můžu pomoct.',
    bodyEn: '30min call. Your situation, goals, and whether I can actually help.',
  },
  {
    num: '03',
    titleCs: 'BASELINE', titleEn: 'BASELINE',
    bodyCs: '14 dní sběru dat. Wearable, krev, CGM, DEXA. Zjistím, kde jsi.',
    bodyEn: '14 days of data. Wearable, blood, CGM, DEXA. Finding your starting point.',
  },
  {
    num: '04',
    titleCs: 'OPTIMALIZACE', titleEn: 'OPTIMIZE',
    bodyCs: 'Trénink, spánek, strava, suplementace - vše řízené daty.',
    bodyEn: 'Training, sleep, nutrition, supplementation - all data-driven.',
  },
]

export default function Process() {
  const { t } = useLang()

  return (
    <section id="process" style={{ padding: '110px 0', background: '#060e1a' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <ScrollReveal>
          <div className="section-label" style={{ justifyContent: 'center' }}>{t('Jak to funguje', 'How It Works')}</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,4.5vw,60px)', lineHeight: 1, letterSpacing: 1 }}>
            {t('JAK SPOLUPRÁCE VYPADÁ', 'HOW IT WORKS')}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay="d1">
          <div className="process-steps">
            {steps.map((step, i) => (
              <div key={i} className="proc-step">
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 56, color: '#10b981', opacity: 0.15, lineHeight: 1, marginBottom: 16 }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, letterSpacing: 1, marginBottom: 8 }}>
                  {t(step.titleCs, step.titleEn)}
                </h3>
                <p style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.6 }}>
                  {t(step.bodyCs, step.bodyEn)}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .process-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          margin-top: 60px;
          border: 1px solid rgba(255,255,255,0.04);
        }
        .proc-step {
          padding: 36px 28px;
          border-right: 1px solid rgba(255,255,255,0.04);
        }
        .proc-step:last-child { border-right: none; }
        @media (max-width: 1024px) {
          .process-steps { grid-template-columns: repeat(2, 1fr); }
          .proc-step:nth-child(2) { border-right: none; }
          .proc-step:nth-child(1),
          .proc-step:nth-child(2) { border-bottom: 1px solid rgba(255,255,255,0.04); }
        }
        @media (max-width: 640px) {
          .process-steps { grid-template-columns: 1fr; }
          .proc-step { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.04); }
          .proc-step:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  )
}
