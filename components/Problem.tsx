'use client'

import { useLang } from './LangContext'
import ScrollReveal from './ScrollReveal'

export default function Problem() {
  const { t } = useLang()

  return (
    <section id="problem" style={{ padding: '110px 0', textAlign: 'center', background: '#060e1a' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <ScrollReveal>
          <div className="section-label" style={{ justifyContent: 'center' }}>{t('Problém', 'The Problem')}</div>
          <h2
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,4.5vw,60px)', lineHeight: 1, letterSpacing: 1, marginBottom: 0 }}
            dangerouslySetInnerHTML={{ __html: t('ÚSPĚCH BEZ ZDRAVÍ<br>JE ČASOVANÁ BOMBA', 'SUCCESS WITHOUT HEALTH<br>IS A TICKING TIME BOMB') }}
          />
        </ScrollReveal>

        <ScrollReveal delay="d1">
          <p style={{ maxWidth: 780, margin: '36px auto 0', fontSize: 19, lineHeight: 1.8, color: '#cbd5e1' }}>
            {t(
              'Chronický stres, špatný spánek a nízká fyzická kapacita nejsou oddělené problémy. V praxi se navzájem zesilují - a zkušený manažer to pozná dřív, než mu to řekne doktor.',
              "Chronic stress, poor sleep and low physical capacity aren't separate problems. In practice, they amplify each other - and an experienced executive feels it before any doctor tells them."
            )}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
