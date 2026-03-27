'use client'

import { useState } from 'react'
import { useLang } from './LangContext'
import ScrollReveal from './ScrollReveal'

const faqs = [
  {
    qCs: 'Pro koho je BioStrategy?',
    qEn: 'Who is BioStrategy for?',
    aCs: 'Pro zakladatele, manažery a lidi s vysokými nároky na sebe, kteří chtějí optimalizovat zdraví a výkon na základě dat - ne obecných rad. Pracuji s lidmi, kteří berou zdraví vážně a jsou ochotni investovat do sebe.',
    aEn: 'For founders, executives, and high performers who want to optimize health and performance based on data - not generic advice. I work with people who take health seriously and are willing to invest in themselves.',
  },
  {
    qCs: 'Kolik to stojí?',
    qEn: 'How much does it cost?',
    aCs: 'Coaching je prémiový a individuálně oceněný. Cena závisí na délce spolupráce a rozsahu - diskutujeme to na konzultaci. Není to levné, ale je to investice, která se vrátí.',
    aEn: 'Coaching is premium and individually priced. The cost depends on collaboration length and scope - we discuss this on the consultation call. It\'s not cheap, but it\'s an investment that pays off.',
  },
  {
    qCs: 'Musím být v Praze?',
    qEn: 'Do I need to be in Prague?',
    aCs: 'Záleží na tom, co chceš. Krevní testy a DEXA jsou v Praze nejdostupnější, online spolupráce funguje odkudkoli v ČR. Pokud chceš osobní dohled na začátku, Praha je výhodou - pokud ne, není podmínkou.',
    aEn: 'It depends on what you want. Blood tests and DEXA are most accessible in Prague, online collaboration works from anywhere in the Czech Republic. If you want personal supervision at the start, Prague is an advantage - if not, it is not a requirement.',
  },
  {
    qCs: 'Jaké wearable potřebuji?',
    qEn: 'What wearable do I need?',
    aCs: 'Aktuálně Oura Ring nebo Whoop - vybereme společně při onboardingu. Podpora dalších zařízení se rozrůstá.',
    aEn: 'Currently Oura Ring or Whoop - we\'ll choose together during onboarding. Support for additional devices is growing.',
  },
  {
    qCs: 'Proč zrovna ty?',
    qEn: 'Why you?',
    aCs: 'Dvě olympiády se sluchovým handicapem. Fyzioterapie. Certifikovaný S&C coach. A vlastní platforma od nuly. Nekopíruji - tvořím.',
    aEn: "Two Olympics with a hearing disability. Physiotherapy degree. Certified S&C coach. Custom platform from scratch. I don't copy - I create.",
  },
]

export default function FAQ() {
  const { t } = useLang()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" style={{ padding: '110px 0', background: '#0a1628' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <ScrollReveal>
          <div className="section-label" style={{ justifyContent: 'center' }}>{t('Otázky', 'FAQ')}</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,4.5vw,60px)', lineHeight: 1, letterSpacing: 1 }}>
            {t('PTEJ SE', 'ASK AWAY')}
          </h2>
        </ScrollReveal>

        <div style={{ maxWidth: 760, margin: '60px auto 0' }}>
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={`d${(i % 4) + 1}` as 'd1'}>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: '100%', padding: '22px 0', background: 'none', border: 'none',
                    color: open === i ? '#34d399' : '#ffffff',
                    fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 700,
                    textAlign: 'left', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                    transition: 'color 0.2s',
                  }}
                >
                  <span>{t(faq.qCs, faq.qEn)}</span>
                  <span style={{
                    width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#10b981', flexShrink: 0, fontSize: 20, fontWeight: 300,
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'transform 0.3s',
                  }}>+</span>
                </button>
                <div className={`faq-answer ${open === i ? 'open' : ''}`}>
                  <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.7, paddingBottom: 20 }}>
                    {t(faq.aCs, faq.aEn)}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
