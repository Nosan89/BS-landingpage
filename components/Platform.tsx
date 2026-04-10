'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLang } from './LangContext'
import ScrollReveal from './ScrollReveal'

const items = [
  {
    titleCs: 'COACH DASHBOARD', titleEn: 'COACH DASHBOARD',
    bodyCs: 'Všechna tvoje data na jednom místě. Recovery, spánek, HRV, srdeční frekvence - synchronizované z Whoop nebo Oura.',
    bodyEn: 'All your data in one place. Recovery, sleep, HRV, heart rate - synced from Whoop or Oura.',
    features: [
      { cs: 'Real-time sync z wearables', en: 'Real-time wearable sync' },
      { cs: 'Semaforové color-coding', en: 'Traffic light color-coding' },
      { cs: '14denní trendy', en: '14-day trends' },
    ],
    img: '/images/coach_triage.jpg',
  },
  {
    titleCs: 'KREVNÍ MARKERY', titleEn: 'BLOOD MARKERS',
    bodyCs: 'AI parsování výsledků z laboratoře. Longevity color-coding - ne referenční rozsahy, ale optimální hodnoty.',
    bodyEn: 'AI-powered lab result parsing. Longevity color-coding - not reference ranges, but optimal values.',
    features: [
      { cs: 'AI parsování PDF z Synlabu', en: 'AI parsing of Synlab PDFs' },
      { cs: '4úrovňový longevity systém', en: '4-level longevity system' },
      { cs: 'Historické srovnání', en: 'Historical comparison' },
    ],
    img: '/images/blood_markers.jpg',
  },
  {
    titleCs: 'TRÉNINKOVÁ APPKA', titleEn: 'TRAINING APP',
    bodyCs: 'BioStrategy Perform - session builder, video návody, logování setů, readiness tracking.',
    bodyEn: 'BioStrategy Perform - session builder, video guides, set logging, readiness tracking.',
    features: [
      { cs: 'Exercise library s videi', en: 'Exercise library with videos' },
      { cs: 'Block-based session builder', en: 'Block-based session builder' },
      { cs: 'Readiness survey', en: 'Readiness survey' },
    ],
    img: '/images/training_app.jpg',
    comingSoon: true,
  },
  {
    titleCs: 'HEALTH PROTOKOLY', titleEn: 'HEALTH PROTOCOLS',
    bodyCs: 'Kognice, spánek, stres, suplementace - evidence-based protokoly s mechanismy, biomarkery a red flags.',
    bodyEn: 'Cognition, sleep, stress, supplementation - evidence-based protocols with mechanisms, biomarkers, and red flags.',
    features: [
      { cs: 'Mechanismus + Protokol + Red Flagy', en: 'Mechanism + Protocol + Red Flags' },
      { cs: 'Navázané na biomarkery', en: 'Linked to biomarkers' },
      { cs: 'Klientský pohled', en: 'Client-facing view' },
    ],
    img: '/images/protocols.jpg',
  },
]

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

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
            dangerouslySetInnerHTML={{ __html: t('VLASTNÍ TECH.<br>NULOVÝ BULLSHIT.', 'CUSTOM TECH.<br>ZERO BULLSHIT.') }}
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
                  <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.7 }}>
                    {t('Aplikace je ve vývoji.', 'The app is in development.')}
                  </p>
                  <div style={{ marginTop: 20 }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '6px 14px',
                      border: '1px solid rgba(16,185,129,0.4)',
                      color: '#10b981',
                      fontSize: 13,
                      fontFamily: 'var(--font-display)',
                      letterSpacing: 1,
                    }}>
                      {t('Spuštění brzy', 'Coming soon')}
                    </span>
                  </div>
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
                  <ul style={{ listStyle: 'none', marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {active.features.map((f, fi) => (
                      <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#cbd5e1' }}>
                        <span style={{
                          width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: 'var(--emerald-glow)', flexShrink: 0, color: '#10b981',
                        }}>
                          <CheckIcon />
                        </span>
                        {t(f.cs, f.en)}
                      </li>
                    ))}
                  </ul>
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
