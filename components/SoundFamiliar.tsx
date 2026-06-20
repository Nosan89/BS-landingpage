'use client'

import { useLang } from './LangContext'
import ScrollReveal from './ScrollReveal'

const items = [
  {
    problemCs: '„Vím, co mám dělat. Jen to nedělám konzistentně."',
    problemEn: '"I know what to do. I just can\'t do it consistently."',
    answerCs: 'Nepotřebuješ další informace. Potřebuješ systém, který drží i v náročném týdnu.',
    answerEn: "You don't need more information. You need a system that holds even in a difficult week.",
  },
  {
    problemCs: '„Nemám teď čas řešit zdraví."',
    problemEn: '"I don\'t have time to focus on health right now."',
    answerCs: 'Právě proto potřebuješ minimum effective dose. Ne hodinové rutiny, ale pár priorit s největším dopadem.',
    answerEn: 'That\'s exactly why you need minimum effective dose. Not hour-long routines - just a few priorities with the biggest impact.',
  },
  {
    problemCs: '„Mám hodinky, data a aplikace, ale nevím, co s tím."',
    problemEn: '"I have a watch, data and apps - but I don\'t know what to do with them."',
    answerCs: 'Data sama o sobě nestačí. Rozdíl dělá interpretace a rozhodnutí.',
    answerEn: 'Data alone isn\'t enough. The difference is interpretation and decision.',
  },
  {
    problemCs: '„Už jsem několikrát začal, ale vždycky mě rozhodí práce, cestování nebo rodina."',
    problemEn: '"I\'ve started several times, but work, travel or family always throws me off."',
    answerCs: 'Problém není motivace. Problém je systém, který nepočítá s realitou.',
    answerEn: "The problem isn't motivation. The problem is a system that doesn't account for reality.",
  },
  {
    problemCs: '„Nechci další extrém."',
    problemEn: '"I don\'t want another extreme."',
    answerCs: 'Ani já. BioStrategy není biohackingová show. Je to praktické vedení pro výkon, zdraví a regeneraci.',
    answerEn: "Neither do I. BioStrategy isn't a biohacking show. It's practical coaching for performance, health and recovery.",
  },
]

export default function SoundFamiliar() {
  const { t } = useLang()

  return (
    <section id="sound-familiar" style={{ padding: '110px 0', background: '#060e1a' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <ScrollReveal>
          <div className="section-label" style={{ justifyContent: 'center' }}>{t('Zní to povědomě?', 'Sound familiar?')}</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,4.5vw,60px)', lineHeight: 1, letterSpacing: 1, textAlign: 'center' }}>
            {t('ZNÍ TO POVĚDOMĚ?', 'SOUND FAMILIAR?')}
          </h2>
        </ScrollReveal>

        <div className="sf-grid">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={`d${(i % 3) + 1}` as 'd1'}>
              <div className="sf-card">
                <p style={{ fontSize: 17, fontStyle: 'italic', color: '#e2e8f0', lineHeight: 1.6, marginBottom: 16 }}>
                  {t(item.problemCs, item.problemEn)}
                </p>
                <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.7 }}>
                  {t(item.answerCs, item.answerEn)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .sf-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 60px;
          align-items: stretch;
        }
        .sf-grid .reveal { height: 100%; }
        .sf-grid .reveal > div { height: 100%; }
        .sf-card {
          padding: 32px 28px;
          height: 100%;
          background: #0f1f38;
          border: 1px solid rgba(255,255,255,0.04);
          border-left: 2px solid rgba(232,190,106,0.4);
        }
        @media (max-width: 900px) {
          .sf-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
