'use client'

import { useLang } from './LangContext'
import ScrollReveal from './ScrollReveal'

const pillars = [
  {
    titleCs: 'Data nestačí',
    titleEn: "Data alone isn't enough",
    bodyCs: 'Hodinky ti ukážou skóre. Krevní testy ti ukážou hodnoty. BioStrategy z nich udělá rozhodnutí.',
    bodyEn: 'Your watch shows you a score. Your blood tests show you values. BioStrategy turns them into decisions.',
  },
  {
    titleCs: 'Tělo jako infrastruktura',
    titleEn: 'Body as infrastructure',
    bodyCs: 'Energie, spánek, síla, metabolismus a odolnost nejsou oddělené věci. Jsou základ tvého výkonu.',
    bodyEn: "Energy, sleep, strength, metabolism and resilience aren't separate things. They're the foundation of your performance.",
  },
  {
    titleCs: 'Lidský dohled',
    titleEn: 'Human oversight',
    bodyCs: 'Ne další appka. Ne generický plán. Pravidelná interpretace, úpravy a accountability podle tvého reálného života.',
    bodyEn: 'Not another app. Not a generic plan. Regular interpretation, adjustments and accountability based on your real life.',
  },
]

export default function Pillars() {
  const { t } = useLang()

  return (
    <section style={{ padding: '90px 0', background: '#0f1f38' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div className="pillars-grid">
          {pillars.map((p, i) => (
            <ScrollReveal key={i} delay={`d${i + 1}` as 'd1'}>
              <div style={{
                padding: '36px 28px', height: '100%',
                background: '#060e1a', border: '1px solid rgba(255,255,255,0.04)',
              }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, letterSpacing: 1, marginBottom: 12, lineHeight: 1.1 }}>
                  {t(p.titleCs, p.titleEn)}
                </h3>
                <p style={{ fontSize: 15, color: '#94a3b8', lineHeight: 1.7 }}>
                  {t(p.bodyCs, p.bodyEn)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: stretch;
        }
        .pillars-grid .reveal { height: 100%; }
        .pillars-grid .reveal > div { height: 100%; }
        @media (max-width: 900px) {
          .pillars-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
