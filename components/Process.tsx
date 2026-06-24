'use client'

import { useLang } from './LangContext'
import { useModal } from './ModalContext'
import ScrollReveal from './ScrollReveal'

const steps = [
  {
    num: '01',
    titleCs: 'REALITA', titleEn: 'REALITY',
    bodyCs: 'Než vznikne plán, poznám tvůj život: práci, rodinu, spánek, stres, cestování, tréninkovou historii a časové možnosti.',
    bodyEn: 'Before any plan, I get to know your life: work, family, sleep, stress, travel, training history and available time.',
    highlightCs: 'Neřešíme ideál. Řešíme realitu.',
    highlightEn: "We don't plan for the ideal week. We plan for your actual reality.",
  },
  {
    num: '02',
    titleCs: 'DATA', titleEn: 'DATA',
    bodyCs: 'Krevní testy, wearable data, tělesná kompozice a pohybový screening ukážou, odkud začneme.',
    bodyEn: "Blood tests, wearable data, body composition and movement screening show us where we can start.",
    highlightCs: 'Data nejsou cíl. Jsou vstup pro rozhodnutí.',
    highlightEn: "Data isn't the goal. It's the input for decisions.",
  },
  {
    num: '03',
    titleCs: 'SYSTÉM', titleEn: 'SYSTEM',
    bodyCs: 'Nastavíme trénink, výživu, spánek, regeneraci a suplementaci podle priorit.',
    bodyEn: 'We build your training, nutrition, sleep, recovery and supplementation around priorities.',
    highlightCs: 'Ne maximum návyků. Minimum s největším dopadem.',
    highlightEn: 'Not maximum habits. Minimum with maximum impact.',
  },
  {
    num: '04',
    titleCs: 'VEDENÍ', titleEn: 'COACHING',
    bodyCs: 'Týdně ladíme plán podle dat, energie, stresu a reálného života. Někdy přidat. Někdy ubrat.',
    bodyEn: 'Each week, I adjust the plan based on data, energy, stress and real life. Sometimes add more. Sometimes pull back.',
    highlightCs: 'Vždy vědět proč.',
    highlightEn: 'Always know why.',
  },
  {
    num: '05',
    titleCs: 'PARTNERSTVÍ', titleEn: 'PARTNERSHIP',
    bodyCs: 'První měsíc nastaví základ. Pak systém vyvíjíme podle práce, stresu, cestování, rodiny a nových cílů. Cíl není být závislý na coachovi. Cíl je dělat lepší rozhodnutí o vlastním těle.',
    bodyEn: "The first month builds the foundation. Then we evolve the system around work, stress, travel, family and new goals. The goal isn't to be dependent on a coach. The goal is to make better decisions about your own body.",
    highlightCs: 'Tohle není challenge. Je to partnerství.',
    highlightEn: "This isn't a challenge. It's a partnership.",
  },
]

export default function Process() {
  const { t } = useLang()
  const { openModal } = useModal()

  return (
    <section id="process" style={{ padding: '110px 0', background: '#060e1a' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <ScrollReveal>
          <div className="section-label" style={{ justifyContent: 'center' }}>{t('Jak to funguje', 'How It Works')}</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,4.5vw,60px)', lineHeight: 1, letterSpacing: 1, textAlign: 'center' }}>
            {t('JAK TO FUNGUJE', 'HOW IT WORKS')}
          </h2>
        </ScrollReveal>

        <div className="process-steps">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={`d${(i % 3) + 1}` as 'd1'}>
              <div className="proc-step">
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 56, color: '#d4a84b', opacity: 0.15, lineHeight: 1, marginBottom: 16 }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: 1, marginBottom: 12 }}>
                  {t(step.titleCs, step.titleEn)}
                </h3>
                <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.7, marginBottom: 16 }}>
                  {t(step.bodyCs, step.bodyEn)}
                </p>
                <p style={{ fontSize: 14, color: '#e8be6a', fontWeight: 600, lineHeight: 1.6 }}>
                  {t(step.highlightCs, step.highlightEn)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 56 }}>
            <button onClick={openModal} className="btn-primary">
              <span>{t('CHCI ZAČÍT PRVNÍM KROKEM', 'START WITH THE FIRST STEP')}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .process-steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 60px;
          align-items: stretch;
        }
        .process-steps .reveal { height: 100%; }
        .process-steps .reveal > div { height: 100%; }
        .proc-step {
          padding: 32px 28px;
          height: 100%;
          background: #0f1f38;
          border: 1px solid rgba(255,255,255,0.04);
        }
        @media (max-width: 900px) {
          .process-steps { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
