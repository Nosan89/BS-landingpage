'use client'

import { useLang } from './LangContext'
import ScrollReveal from './ScrollReveal'

const steps = [
  {
    num: '01',
    titleCs: 'INICIAČNÍ FÁZE', titleEn: 'FOUNDATION PHASE',
    bodyCs: 'Diagnostika a nastavení systému probíhají v prvních dvou týdnech - krevní testy, wearable baseline, pohybový screening, výživová anamnéza, spánek, stres. Z toho vznikne tvůj individuální plán. Pak ho spolu testujeme, ladíme a ověřujeme, co na tebe reálně funguje.',
    bodyEn: 'Diagnostics and system setup happen in the first two weeks - blood tests, wearable baseline, movement screening, nutrition anamnesis, sleep, stress. From this, your individual plan is built. Then we test, refine and verify what actually works for you.',
  },
  {
    num: '02',
    titleCs: 'PERFORMANCE PARTNERSTVÍ', titleEn: 'PERFORMANCE PARTNERSHIP',
    bodyCs: 'Dlouhodobé vedení s průběžnou interpretací dat a úpravami podle aktuálního života. Cestování, stres, sezóna, zranění - systém se přizpůsobuje. Žádný pokus-omyl.',
    bodyEn: 'Long-term coaching with ongoing data interpretation and adjustments to your current life. Travel, stress, seasons, injuries - the system adapts. No more trial and error.',
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
            {t('JAK TO FUNGUJE', 'HOW IT WORKS')}
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
          grid-template-columns: repeat(2, 1fr);
          gap: 0;
          margin-top: 60px;
          border: 1px solid rgba(255,255,255,0.04);
        }
        .proc-step {
          padding: 36px 28px;
          border-right: 1px solid rgba(255,255,255,0.04);
        }
        .proc-step:last-child { border-right: none; }
        @media (max-width: 640px) {
          .process-steps { grid-template-columns: 1fr; }
          .proc-step { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.04); }
          .proc-step:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  )
}
