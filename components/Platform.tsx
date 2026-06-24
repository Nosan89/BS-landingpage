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
    titleCs: 'HEALTH PROTOKOLY', titleEn: 'HEALTH PROTOCOLS',
    bodyCs: 'Spánek, suplementace, dýchání, cirkadiánní rytmus. Každý protokol je postavený na datech - ne na obecných doporučeních.',
    bodyEn: 'Sleep, supplementation, breathing, circadian rhythm. Every protocol is built on data - not generic advice.',
    img: '/images/protokoly.png',
  },
]

export default function Platform() {
  const { t } = useLang()
  const [activeTab, setActiveTab] = useState(0)

  const active = items[activeTab]

  return (
    <section id="platform" style={{ padding: '110px 0', background: '#0f1f38' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <ScrollReveal>
          <div className="section-label">{t('Platforma', 'Platform')}</div>
          <h2
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,4.5vw,60px)', lineHeight: 1, letterSpacing: 1, marginBottom: 16 }}
            dangerouslySetInnerHTML={{ __html: t('VŠECHNA TVOJE DATA<br>NA JEDNOM MÍSTĚ.', 'ALL YOUR DATA<br>IN ONE PLACE.') }}
          />
          <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.7, maxWidth: 560 }}>
            {t(
              'Whoop, Oura, krevní testy, složení těla - coach dashboard interpretuje signály za tebe a říká, co je priorita. Klient nevidí chaos. Vidí rozhodnutí.',
              "Whoop, Oura, blood tests, body composition - the coach dashboard interprets the signals for you and shows what matters. The client doesn't see chaos. They see decisions."
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
          </div>
        </div>

        <p style={{ marginTop: 32, fontSize: 13, color: '#64748b', textAlign: 'center', fontStyle: 'italic' }}>
          {t('Klient nevidí chaos. Vidí priority.', "The client doesn't see chaos. They see priorities.")}
        </p>
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
          color: #d4a84b !important;
          border-bottom-color: #d4a84b !important;
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
