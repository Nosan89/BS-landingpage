'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLang } from './LangContext'
import ScrollReveal from './ScrollReveal'

const items = [
  {
    titleCs: 'COACH DASHBOARD', titleEn: 'COACH DASHBOARD',
    bodyCs: 'Tvá data sleduji já, ne ty. Každé ráno vidím tvé HRV, spánek a zátěž - a podle toho upravuji plán. Ty se soustředíš na práci.',
    bodyEn: 'I track your data, not you. Every morning I see your HRV, sleep and load - and adjust the plan accordingly. You focus on work.',
    img: '/images/coach_triage.jpg',
  },
  {
    titleCs: 'KREVNÍ MARKERY', titleEn: 'BLOOD MARKERS',
    bodyCs: 'Víme přesně, co se děje uvnitř. Krevní markery odhalí, co žádná aplikace nezměří - a já z toho postavím konkrétní plán.',
    bodyEn: 'We know exactly what\'s happening inside. Blood markers reveal what no app can measure - and I build a concrete plan from that.',
    img: '/images/blood_markers.jpg',
  },
  {
    titleCs: 'TRÉNINKOVÁ APPKA', titleEn: 'TRAINING APP',
    bodyCs: 'Aplikace ve vývoji. Tréninkové plány zatím dodávám přes TrainHeroic - přehledně, s videi a logováním každého setu.',
    bodyEn: 'App in development. Training plans are currently delivered via TrainHeroic - clear, with videos and set-by-set logging.',
    img: '/images/training_app.jpg',
    comingSoon: true,
  },
  {
    titleCs: 'HEALTH PROTOKOLY', titleEn: 'HEALTH PROTOCOLS',
    bodyCs: 'Spánek, suplementace, dýchání, cirkadiánní rytmus. Každý protokol je postavený na datech - ne na obecných doporučeních.',
    bodyEn: 'Sleep, supplementation, breathing, circadian rhythm. Every protocol is built on data - not generic advice.',
    img: '/images/protocols.jpg',
  },
]

export default function Platform() {
  const { t } = useLang()
  const [activeTab, setActiveTab] = useState(0)

  const active = items[activeTab]

  return (
    <section id="platform" style={{ padding: '110px 0', background: '#0a1628' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <ScrollReveal>
          <div className="section-label">{t('Platforma', 'Platform')}</div>
          <h2
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,4.5vw,60px)', lineHeight: 1, letterSpacing: 1, marginBottom: 16 }}
            dangerouslySetInnerHTML={{ __html: t('VLASTNÍ TECH.<br>ŽÁDNÉ KOMPROMISY.', 'OUR OWN TECH.<br>NO COMPROMISES.') }}
          />
          <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.7, maxWidth: 560 }}>
            {t(
              'Žádná třetí strana. BioStrategy je platforma, kterou jsem postavil sám - přesně pro tohle.',
              'No third parties. BioStrategy is a platform I built myself - specifically for this.'
            )}
          </p>
        </ScrollReveal>

        {/* Tab navigation */}
        <div className="plat-tabs-wrapper">
          <div className="plat-tabs">
            {items.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`plat-tab ${activeTab === i ? 'plat-tab-active' : ''}`}
              >
                {t(item.titleCs, item.titleEn)}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div key={activeTab} className="plat-content animate-fadeIn">
          <div className="plat-item">
            {active.comingSoon ? (
              <>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 32, letterSpacing: 1, marginBottom: 10 }}>
                    {t(active.titleCs, active.titleEn)}
                  </h3>
                  <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.7 }}>{t(active.bodyCs, active.bodyEn)}</p>
                </div>
                <div>
                  <div className="phone-frame">
                    <div className="phone-frame-inner phone-frame-placeholder">
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: 12 }}>
                        <span style={{ fontSize: 36 }}>⚙️</span>
                        <span style={{ fontSize: 12, color: '#475569', fontFamily: 'var(--font-display)', letterSpacing: 1 }}>
                          {t('VE VÝVOJI', 'IN DEVELOPMENT')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 32, letterSpacing: 1, marginBottom: 10 }}>
                    {t(active.titleCs, active.titleEn)}
                  </h3>
                  <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.7 }}>{t(active.bodyCs, active.bodyEn)}</p>
                </div>
                <div>
                  <div className="phone-frame">
                    <div className="phone-frame-inner">
                      <Image src={active.img} alt={t(active.titleCs, active.titleEn)} width={320} height={640} style={{ width: '100%', display: 'block' }} />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .plat-tabs-wrapper {
          margin-top: 60px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        .plat-tabs {
          display: flex;
          min-width: max-content;
        }
        .plat-tab {
          padding: 14px 28px;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          color: #94a3b8;
          font-family: var(--font-display);
          font-size: 16px;
          letter-spacing: 1px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s;
          margin-bottom: -1px;
        }
        .plat-tab:hover { color: #cbd5e1; }
        .plat-tab-active {
          color: #10b981 !important;
          border-bottom-color: #10b981 !important;
        }
        .plat-content {
          margin-top: 48px;
        }
        .plat-item {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 48px;
          align-items: center;
        }
        .phone-frame-placeholder {
          background: #060e1a;
          min-height: 400px;
        }
        @media (max-width: 1024px) {
          .plat-item {
            grid-template-columns: 1fr;
          }
          .phone-frame { max-width: 280px !important; }
        }
      `}</style>
    </section>
  )
}
