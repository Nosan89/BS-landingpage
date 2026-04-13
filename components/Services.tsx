'use client'

import { useState } from 'react'
import { useLang } from './LangContext'
import ScrollReveal from './ScrollReveal'

const services = [
  {
    icon: '⌚',
    titleCs: 'WEARABLE MONITORING', titleEn: 'WEARABLE MONITORING',
    bodyCs: 'Oura nebo Whoop - kontinuální sledování spánku, HRV, recovery, zátěže. Vidím tvá data v reálném čase.',
    bodyEn: 'Oura or Whoop - continuous sleep, HRV, recovery, strain tracking. I see your data in real-time.',
    tags: ['Oura', 'Whoop', 'HRV', 'Sleep'],
  },
  {
    icon: '🩸',
    titleCs: 'KREVNÍ MARKERY', titleEn: 'BLOOD BIOMARKERS',
    bodyCs: 'Kompletní panel přes Synlab. Lipidy, hormony, záněty, vitamíny - ne to, co ti dá obvoďák.',
    bodyEn: "Complete panel via Synlab. Lipids, hormones, inflammation, vitamins - not your GP's basic panel.",
    tags: ['ApoB', 'Lipidy / Lipids', 'Hormony / Hormones'],
  },
  {
    icon: '📊',
    titleCs: 'CGM & DEXA', titleEn: 'CGM & DEXA',
    bodyCs: 'Dexcom G7 na 10 dní - reakce tvého těla na jídlo. DEXA scan - přesné složení těla.',
    bodyEn: 'Dexcom G7 for 10 days - how your body responds to food. DEXA scan - precise body composition.',
    tags: ['Glukóza / Glucose', 'DEXA', 'Složení těla / Body Comp'],
  },
  {
    icon: '🏋️',
    titleCs: 'TRÉNINK & PROTOKOLY', titleEn: 'TRAINING & PROTOCOLS',
    bodyCs: 'Individuální tréninkový plán přes TrainHeroic. Síla, mobilita, kondice + health protokoly pro spánek, stres, suplementaci a dalších.',
    bodyEn: 'Individual training plan via TrainHeroic. Strength, mobility, conditioning + health protocols for sleep, stress, supplementation, and more.',
    tags: ['Síla / Strength', 'Spánek / Sleep', 'Suplementace / Supplements'],
  },
]

function getFirstSentence(text: string): string {
  const idx = text.indexOf('. ')
  return idx !== -1 ? text.slice(0, idx + 1) : text
}

function getRestSentences(text: string): string {
  const idx = text.indexOf('. ')
  return idx !== -1 ? text.slice(idx + 2) : ''
}

export default function Services() {
  const { t } = useLang()
  const [expanded, setExpanded] = useState<boolean[]>(services.map(() => false))

  const toggle = (i: number) => {
    setExpanded(prev => prev.map((v, idx) => idx === i ? !v : v))
  }

  return (
    <section id="services" style={{ padding: '110px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <ScrollReveal>
          <div className="section-label">{t('Co dostaneš', 'What You Get')}</div>
          <h2
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,4.5vw,60px)', lineHeight: 1, letterSpacing: 1, marginBottom: 16 }}
            dangerouslySetInnerHTML={{ __html: t('KOMPLETNÍ SYSTÉM,<br>NE JEDNORÁZOVÁ RADA', 'A COMPLETE SYSTEM,<br>NOT ONE-TIME ADVICE') }}
          />
          <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.7, maxWidth: 560 }}>
            {t(
              'Žádné šablony. Tvůj protokol je postavený na tvých datech, tvém těle, tvém životě.',
              'No templates. Your protocol is built on your data, your body, your life.'
            )}
          </p>
          <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.7, maxWidth: 560, marginTop: 12 }}>
            {t(
              'Žádné 12týdenní výzvy. Stavíme návyky, které fungují i po ukončení spolupráce.',
              'No 12-week challenges. We build habits that last beyond our time together.'
            )}
          </p>
        </ScrollReveal>

        <div className="services-grid">
          {services.map((svc, i) => {
            const previewCs = getFirstSentence(svc.bodyCs)
            const previewEn = getFirstSentence(svc.bodyEn)
            const restCs = getRestSentences(svc.bodyCs)
            const restEn = getRestSentences(svc.bodyEn)
            const isOpen = expanded[i]

            return (
              <ScrollReveal key={i} delay={`d${(i % 2) + 1}` as 'd1'}>
                <div
                  className="svc-card"
                  style={{
                    padding: '24px 28px',
                    background: '#0f1f38',
                    border: '1px solid rgba(255,255,255,0.04)',
                    boxShadow: isOpen ? 'inset 0 2px 0 #10b981' : 'inset 0 2px 0 transparent',
                    transition: 'box-shadow 0.3s, border-color 0.3s, transform 0.4s',
                  }}
                >
                  {/* Icon + Title on one row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                    <div style={{
                      width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'var(--emerald-glow)', border: '1px solid rgba(16,185,129,0.1)',
                      flexShrink: 0, fontSize: 18,
                    }}>
                      {svc.icon}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: 1, lineHeight: 1 }}>
                      {t(svc.titleCs, svc.titleEn)}
                    </h3>
                  </div>

                  {/* Preview: first sentence */}
                  <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.6, marginBottom: 6 }}>
                    {t(previewCs, previewEn)}
                  </p>

                  {/* Collapsible: rest of body + tags */}
                  <div style={{
                    maxHeight: isOpen ? '400px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s ease-out',
                  }}>
                    <div style={{ paddingTop: 2 }}>
                      {(restCs || restEn) && (
                        <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.6, marginBottom: 8 }}>
                          {t(restCs, restEn)}
                        </p>
                      )}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 4 }}>
                        {svc.tags.map((tag, ti) => (
                          <span key={ti} style={{
                            padding: '3px 10px',
                            background: 'rgba(16,185,129,0.06)',
                            border: '1px solid rgba(16,185,129,0.1)',
                            fontSize: 10, fontWeight: 700, letterSpacing: '1.2px',
                            textTransform: 'uppercase', color: '#10b981',
                          }}>
                            {tag.includes(' / ') ? t(tag.split(' / ')[0], tag.split(' / ')[1]) : tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => toggle(i)}
                    className="svc-more-btn"
                  >
                    {isOpen ? t('Méně ↑', 'Less ↑') : t('Více ↓', 'More ↓')}
                  </button>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 60px;
        }
        .svc-card:hover { border-color: rgba(16,185,129,0.12) !important; transform: translateY(-3px); }
        .svc-more-btn {
          display: block;
          margin-top: 8px;
          padding: 4px 0;
          background: none;
          border: none;
          color: #10b981;
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 0.5px;
          transition: color 0.2s;
        }
        .svc-more-btn:hover { color: #34d399; }
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
