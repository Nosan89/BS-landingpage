'use client'

import { useLang } from './LangContext'
import ScrollReveal from './ScrollReveal'

const stats = [
  {
    num: '72%',
    cs: 'podnikatelů trpí minimálně jedním problémem s duševním zdravím',
    en: 'of entrepreneurs suffer from at least one mental health issue',
  },
  {
    num: '2×',
    cs: 'vyšší riziko infarktu u lidí pracujících 55+ hodin týdně',
    en: 'higher heart attack risk for 55+ hour work weeks',
  },
  {
    num: '35',
    cs: 'průměrný věk, kdy začínají první vážné komplikace',
    en: 'average age when serious health complications begin',
  },
]

export default function Problem() {
  const { t } = useLang()

  return (
    <section id="problem" style={{ padding: '110px 0', textAlign: 'center' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <ScrollReveal>
          <div className="section-label" style={{ justifyContent: 'center' }}>{t('Problém', 'The Problem')}</div>
          <h2
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,4.5vw,60px)', lineHeight: 1, letterSpacing: 1, marginBottom: 0 }}
            dangerouslySetInnerHTML={{ __html: t('ÚSPĚCH BEZ ZDRAVÍ<br>JE ČASOVANÁ BOMBA', 'SUCCESS WITHOUT HEALTH<br>IS A TICKING BOMB') }}
          />
        </ScrollReveal>

        <ScrollReveal delay="d1">
          <p style={{ maxWidth: 780, margin: '36px auto 0', fontSize: 19, lineHeight: 1.8, color: '#cbd5e1' }}>
            {t(
              'Usínáš s e-maily, vstáváš s notifikacemi. ',
              'You fall asleep to emails, wake up to notifications. '
            )}
            <strong style={{ color: '#ffffff' }}>
              {t('Spánek? 5 hodin, možná 6.', 'Sleep? 5 hours, maybe 6.')}
            </strong>
            {t(
              ' Cvičení? Když zbude čas. Jíš to, co je po ruce. A říkáš si — ',
              ' Exercise? When there\'s time. You eat whatever\'s available. '
            )}
            <strong style={{ color: '#ffffff' }}>
              {t(
                'až dodělám tenhle deal, tenhle kvartál, tenhle rok…',
                'After this deal, this quarter, this year…'
              )}
            </strong>
            {t(
              ' Jenže ten rok nikdy nepřijde. A tělo ti účet vystaví bez předchozího upozornění.',
              " But that year never comes. And your body sends the bill without warning."
            )}
          </p>
        </ScrollReveal>

        <div className="problem-cards">
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={`d${i + 1}` as 'd1'}>
              <div style={{
                padding: '36px 28px', background: '#0f1f38',
                border: '1px solid rgba(255,255,255,0.04)', textAlign: 'center',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 52, color: '#ef4444', lineHeight: 1, marginBottom: 8 }}>
                  {s.num}
                </div>
                <p style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.5 }}>{t(s.cs, s.en)}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .problem-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 56px;
        }
        @media (max-width: 768px) {
          .problem-cards { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
