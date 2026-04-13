'use client'

import { useLang } from './LangContext'
import ScrollReveal from './ScrollReveal'

const testimonials = [
  {
    cs: {
      quote: "Kombinuju trénink, studium informatiky a práci - hledal jsem něco víc než jen tréninkový plán. BioStrategy mi propojila fyzický výkon s biometrií. Nejde jen o to, co odtrénuju, ale jak regeneruju. HRV mi stabilně vzrostlo o 15 % a hluboká fáze spánku je úplně jinde než dřív. Navíc systém krabičkového stravování mi šetří hodiny týdně, které můžu dát do regenerace nebo práce. Pokud chceš data-driven přístup k vlastnímu tělu - tohle je ono.",
      name: "Jan Žídek",
      role: "Profesionální sportovec, student VŠ"
    },
    en: {
      quote: "I combine training, IT studies and work - I was looking for more than just a training plan. BioStrategy connected my physical performance with biometrics. It's not just about what I train, but how I recover. My HRV has steadily increased by 15% and my deep sleep is on a completely different level. On top of that, the meal prep system saves me hours every week. If you want a data-driven approach to your own body - this is it.",
      name: "Jan Žídek",
      role: "Professional athlete, university student"
    }
  }
]

export default function Testimonials() {
  const { lang, t } = useLang()

  return (
    <section id="testimonials" style={{ padding: '110px 0', background: '#060e1a', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <ScrollReveal>
          <div className="section-label" style={{ justifyContent: 'center' }}>{t('Reference', 'Testimonials')}</div>
          <h2
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,4.5vw,60px)', lineHeight: 1, letterSpacing: 1 }}
          >
            {t('CO ŘÍKAJÍ KLIENTI', 'WHAT CLIENTS SAY')}
          </h2>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 560px), 1fr))', gap: 24, marginTop: 60 }}>
          {testimonials.map((item, i) => {
            const data = item[lang]
            return (
              <ScrollReveal key={i} delay={i === 0 ? undefined : 'd1'}>
                <div style={{
                  background: '#0a1628',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 12,
                  padding: '40px 40px 36px',
                  position: 'relative',
                }}>
                  {/* Decorative opening quote */}
                  <div style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: 96,
                    lineHeight: 0.8,
                    color: '#10b981',
                    opacity: 0.35,
                    position: 'absolute',
                    top: 28,
                    left: 32,
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}>
                    &ldquo;
                  </div>

                  <p style={{
                    fontSize: 15,
                    lineHeight: 1.75,
                    color: '#94a3b8',
                    marginTop: 40,
                    marginBottom: 32,
                    position: 'relative',
                  }}>
                    {data.quote}
                  </p>

                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 20 }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, letterSpacing: 0.5, color: '#f1f5f9' }}>
                      {data.name}
                    </div>
                    <div style={{ fontSize: 13, color: '#10b981', marginTop: 4 }}>
                      {data.role}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
