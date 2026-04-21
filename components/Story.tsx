'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLang } from './LangContext'
import ScrollReveal from './ScrollReveal'

const timeline = [
  {
    year: '1993',
    cs: { title: 'Meningitida', body: 'Ve třech letech. 100% ztráta sluchu na pravé ucho, 85% na levé. Sluchadlo se stalo součástí mého života - ale nikdy ne výmluvou.' },
    en: { title: 'Meningitis', body: 'At age three. 100% hearing loss right ear, 85% left. A hearing aid became part of my life - but never an excuse.' },
  },
  {
    year: '2001',
    cs: { title: 'Start v atletice', body: 'Začal jsem s atletikou. Všestranná pohybová příprava, která položila základ všemu, co přišlo po ní.' },
    en: { title: 'Start in Athletics', body: 'I started in athletics. All-round movement training that laid the foundation for everything that followed.' },
  },
  {
    year: '2014',
    cs: { title: 'Bakalář z fyzioterapie', body: 'FTVS UK. Chtěl jsem rozumět lidskému tělu na hlubší úrovni. Ne jen trénovat - rozumět.' },
    en: { title: 'BSc. Physiotherapy', body: 'Charles University. I wanted to understand the human body deeply. Not just train - understand.' },
  },
  {
    year: '2015',
    cs: { title: 'Start bobové kariéry', body: '8 sezón. Jeden z nejrychlejších brzdařů na světě. Top 6 ve Světovém poháru a na MS.' },
    en: { title: 'Pro Bobsled Career', body: '8 seasons. One of the fastest brakemen in the world. Top 6 in World Cup and Worlds.' },
  },
  {
    year: '2016',
    cs: { title: 'Bronz a biohacking', body: 'Bronz na MČR ve skoku dalekém i desetiboji. A paralelně - začátek systematické práce na vlastním zdraví. Dřív než to mělo jméno.' },
    en: { title: 'Bronze and biohacking', body: 'Bronze at the Czech Championships in long jump and decathlon. And in parallel - the start of systematic work on my own health. Before it had a name.' },
  },
  {
    year: '2018',
    cs: { title: 'PyeongChang - 1. olympiáda', body: 'Kluk, co neslyší, na největší sportovní scéně světa.' },
    en: { title: 'PyeongChang - 1st Olympics', body: "The kid who can't hear, on the world's biggest sports stage." },
  },
  {
    year: '2020',
    cs: { title: '6. místo na MS ve čtyřbobech', body: '6. místo na MS ve čtyřbobech. Náš největší výsledek. A důkaz, že mezi průměrem a světovou špičkou nestojí talent - stojí tam data a systém.' },
    en: { title: '6th at World Championships', body: '6th at the Four-man World Championships. Our greatest result. Proof that what stands between average and world-class isn\'t talent - it\'s data and a system.' },
  },
  {
    year: '2022',
    cs: { title: 'Peking - 2. olympiáda', body: 'Druhá olympiáda. Protože jednou nestačilo. Pak jsem pověsil boby na hřebík - a začal předávat zkušenosti dál.' },
    en: { title: 'Beijing - 2nd Olympics', body: 'A second Olympics. Because once was not enough. Then I hung up the bobsled - and started passing on what I had learned.' },
  },
  {
    year: '2026',
    cs: { title: 'Cortina - Izrael na OH', body: 'Jako trenér i závodník jsem pomohl dostat Izrael na historicky první účast v bobech na OH.' },
    en: { title: 'Cortina - Israel at Olympics', body: 'As coach and athlete, I helped Israel reach their first-ever Olympic bobsled appearance.' },
  },
]

// Indices of items always visible: 1993 (0), 2001 (1), 2014 (2)
const VISIBLE_INDICES = new Set([0, 1, 2])

export default function Story() {
  const { t } = useLang()
  const [expanded, setExpanded] = useState(false)

  const visibleItems = timeline.filter((_, i) => VISIBLE_INDICES.has(i))
  const hiddenItems = timeline.filter((_, i) => !VISIBLE_INDICES.has(i))

  const itemContent = (item: typeof timeline[0]) => (
    <div style={{
      display: 'grid', gridTemplateColumns: '70px 1fr',
      gap: 20, padding: '24px 0',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: '#10b981', paddingTop: 2 }}>
        {item.year}
      </div>
      <div style={{ minHeight: 64 }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 4, lineHeight: 1.4 }}>
          {t(item.cs.title, item.en.title)}
        </h3>
        <p style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.6 }}>
          {t(item.cs.body, item.en.body)}
        </p>
      </div>
    </div>
  )

  return (
    <section id="story" style={{ padding: '110px 0', background: '#0f1f38' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <ScrollReveal>
          <div className="section-label">{t('Příběh', 'Story')}</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,4.5vw,60px)', lineHeight: 1, letterSpacing: 1, marginBottom: 16 }}
            dangerouslySetInnerHTML={{ __html: t('OD MENINGITIDY<br>K OLYMPIÁDĚ', 'FROM MENINGITIS<br>TO THE OLYMPICS') }} />
          <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.7, maxWidth: 560 }}>
            {t(
              'Když mi ve třech letech vzala meningitida sluch, nikdo nečekal, že se dostanu na olympiádu. Dvakrát.',
              "When meningitis took my hearing at age three, nobody expected I'd make it to the Olympics. Twice."
            )}
          </p>
        </ScrollReveal>

        <div className="story-layout">
          {/* Timeline */}
          <div>
            {visibleItems.map((item, i) => (
              <ScrollReveal key={item.year} delay={`d${(i % 3) + 1}` as 'd1'}>
                {itemContent(item)}
              </ScrollReveal>
            ))}

            {/* Expandable hidden items */}
            <div style={{
              maxHeight: expanded ? '2400px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.5s ease-out',
            }}>
              {hiddenItems.map((item) => (
                <div key={item.year}>{itemContent(item)}</div>
              ))}
            </div>

            <div style={{ paddingTop: 20 }}>
              <button
                onClick={() => setExpanded(!expanded)}
                className="story-expand-btn"
              >
                {expanded ? t('Skrýt ↑', 'Hide ↑') : t('Celý příběh ↓', 'Full story ↓')}
              </button>
            </div>
          </div>

          {/* Visual: photos + quote */}
          <div className="story-visual">
            <ScrollReveal>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div style={{ aspectRatio: '1', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
                  <Image src="/images/sprint_training.jpg" alt={t('Trénink', 'Training')} fill style={{ objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '8px 12px',
                    background: 'linear-gradient(transparent, rgba(6,14,26,0.85))',
                    fontSize: 10, fontWeight: 700, letterSpacing: 2,
                    textTransform: 'uppercase', color: '#10b981',
                  }}>{t('Trénink', 'Training')}</div>
                </div>
                <div style={{ aspectRatio: '1', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
                  <Image src="/images/strength_training.jpg" alt={t('Síla', 'Strength')} fill style={{ objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '8px 12px',
                    background: 'linear-gradient(transparent, rgba(6,14,26,0.85))',
                    fontSize: 10, fontWeight: 700, letterSpacing: 2,
                    textTransform: 'uppercase', color: '#10b981',
                  }}>{t('Síla', 'Strength')}</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay="d2" style={{
              padding: 32, background: '#060e1a', borderLeft: '3px solid #10b981',
            }}>
              <p style={{ fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, color: '#cbd5e1' }}>
                {t(
                  '\u201CCelý život mi říkali, co nemůžu. Tak jsem jim ukázal, co můžu. Teď to samé dělám pro své klienty.\u201D',
                  '\u201CMy whole life, people told me what I couldn\u2019t do. So I showed them what I could. Now I do the same for my clients.\u201D'
                )}
              </p>
              <div style={{ marginTop: 12, fontSize: 13, color: '#10b981', fontWeight: 700 }}>- Jakub Nosek</div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style>{`
        .story-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          margin-top: 60px;
          align-items: start;
        }
        .story-visual {
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: sticky;
          top: 120px;
        }
        .story-expand-btn {
          padding: 10px 24px;
          background: none;
          border: 1px solid rgba(16,185,129,0.3);
          color: #10b981;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 0.5px;
          transition: all 0.2s;
        }
        .story-expand-btn:hover {
          border-color: #10b981;
          background: rgba(16,185,129,0.06);
        }
        @media (max-width: 1024px) {
          .story-layout { grid-template-columns: 1fr; gap: 48px; }
          .story-visual { position: static; }
        }
      `}</style>
    </section>
  )
}
