'use client'

import Image from 'next/image'
import { useLang } from './LangContext'
import ScrollReveal from './ScrollReveal'

const items = [
  {
    titleCs: 'COACH DASHBOARD', titleEn: 'COACH DASHBOARD',
    bodyCs: 'Všechna tvoje data na jednom místě. Recovery, spánek, HRV, srdeční frekvence — synchronizované z Whoop nebo Oura.',
    bodyEn: 'All your data in one place. Recovery, sleep, HRV, heart rate — synced from Whoop or Oura.',
    features: [
      { cs: 'Real-time sync z wearables', en: 'Real-time wearable sync' },
      { cs: 'Semaforové color-coding', en: 'Traffic light color-coding' },
      { cs: '14denní trendy', en: '14-day trends' },
    ],
    img: '/images/coach_triage.jpg',
    reverse: false,
  },
  {
    titleCs: 'KREVNÍ MARKERY', titleEn: 'BLOOD MARKERS',
    bodyCs: 'AI parsování výsledků z laboratoře. Longevity color-coding — ne referenční rozsahy, ale optimální hodnoty.',
    bodyEn: 'AI-powered lab result parsing. Longevity color-coding — not reference ranges, but optimal values.',
    features: [
      { cs: 'AI parsování PDF z Synlabu', en: 'AI parsing of Synlab PDFs' },
      { cs: '4úrovňový longevity systém', en: '4-level longevity system' },
      { cs: 'Historické srovnání', en: 'Historical comparison' },
    ],
    img: '/images/blood_markers.jpg',
    reverse: true,
  },
  {
    titleCs: 'TRÉNINKOVÁ APPKA', titleEn: 'TRAINING APP',
    bodyCs: 'BioStrategy Perform — session builder, video návody, logování setů, readiness tracking.',
    bodyEn: 'BioStrategy Perform — session builder, video guides, set logging, readiness tracking.',
    features: [
      { cs: 'Exercise library s videi', en: 'Exercise library with videos' },
      { cs: 'Block-based session builder', en: 'Block-based session builder' },
      { cs: 'Readiness survey', en: 'Readiness survey' },
    ],
    img: '/images/training_app.jpg',
    reverse: false,
  },
  {
    titleCs: 'HEALTH PROTOKOLY', titleEn: 'HEALTH PROTOCOLS',
    bodyCs: 'Kognice, spánek, stres, suplementace — evidence-based protokoly s mechanismy, biomarkery a red flags.',
    bodyEn: 'Cognition, sleep, stress, supplementation — evidence-based protocols with mechanisms, biomarkers, and red flags.',
    features: [
      { cs: 'Mechanismus + Protokol + Red Flagy', en: 'Mechanism + Protocol + Red Flags' },
      { cs: 'Navázané na biomarkery', en: 'Linked to biomarkers' },
      { cs: 'Klientský pohled', en: 'Client-facing view' },
    ],
    img: '/images/protocols.jpg',
    reverse: true,
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
              'Žádná třetí strana. BioStrategy je platforma, kterou jsem postavil sám — přesně pro tohle.',
              'No third parties. BioStrategy is a platform I built myself — specifically for this.'
            )}
          </p>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 80, marginTop: 60 }}>
          {items.map((item, i) => (
            <ScrollReveal key={i}>
              <div className={`plat-item ${item.reverse ? 'plat-reverse' : ''}`}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 32, letterSpacing: 1, marginBottom: 10 }}>
                    {t(item.titleCs, item.titleEn)}
                  </h3>
                  <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.7 }}>{t(item.bodyCs, item.bodyEn)}</p>
                  <ul style={{ listStyle: 'none', marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {item.features.map((f, fi) => (
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
                      <Image src={item.img} alt={t(item.titleCs, item.titleEn)} width={320} height={640} style={{ width: '100%', display: 'block' }} />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .plat-item {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 48px;
          align-items: center;
        }
        .plat-reverse {
          direction: rtl;
        }
        .plat-reverse > * {
          direction: ltr;
        }
        @media (max-width: 1024px) {
          .plat-item, .plat-reverse {
            grid-template-columns: 1fr;
            direction: ltr;
          }
          .plat-reverse > * { direction: ltr; }
          .phone-frame { max-width: 280px !important; }
        }
      `}</style>
    </section>
  )
}
