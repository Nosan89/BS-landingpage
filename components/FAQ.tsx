'use client'

import { useState } from 'react'
import { useLang } from './LangContext'
import ScrollReveal from './ScrollReveal'

const faqs = [
  {
    qCs: 'Pro koho je BioStrategy?',
    qEn: 'Who is BioStrategy for?',
    aCs: 'Pro zakladatele, manažery a náročné profesionály, kteří cítí, že jejich energie, spánek, tělo nebo regenerace už neodpovídají nárokům života, který vedou.',
    aEn: 'For founders, managers and demanding professionals who feel that their energy, sleep, body or recovery no longer matches the demands of the life they lead.',
  },
  {
    qCs: 'Kolik to stojí?',
    qEn: 'How much does it cost?',
    aCs: 'Pilotní cena začíná na 18 000 Kč měsíčně při minimální spolupráci 3 měsíce. Cena zahrnuje coaching, plán, interpretaci dat, týdenní vedení a průběžné úpravy systému. Krevní testy, DXA/InBody, CGM senzory, wearables, suplementy a externí služby nejsou v ceně.',
    aEn: 'Pilot pricing starts at 18 000 CZK per month with a minimum commitment of 3 months. The price includes coaching, planning, data interpretation, weekly guidance and ongoing system adjustments. Blood tests, DXA/InBody, CGM sensors, wearables, supplements and external services are not included.',
  },
  {
    qCs: 'Musím být v Praze?',
    qEn: 'Do I need to be in Prague?',
    aCs: 'Ne. Spolupráce probíhá primárně online, aby fungovala i při pracovním vytížení, cestování nebo životě mimo Prahu. Osobní konzultace nebo performance sessions jsou možné individuálně podle kapacity.',
    aEn: 'No. The collaboration runs primarily online so it works regardless of workload, travel or location. In-person consultations or performance sessions are possible individually based on availability.',
  },
  {
    qCs: 'Jaké wearable potřebuji?',
    qEn: 'What wearable do I need?',
    aCs: 'Ideálně Whoop nebo Oura. Pokud wearable zatím nemáš, není to překážka. Začneme tím, co máš k dispozici, a případné zařízení doporučím podle toho, jestli pro tebe dává smysl. Data jsou nástroj, ne podmínka hodnoty spolupráce.',
    aEn: 'Ideally Whoop or Oura. If you don\'t have a wearable yet, that\'s not a barrier. We\'ll start with what you have, and I\'ll recommend a device if it makes sense for you. Data is a tool, not a prerequisite for the value of the collaboration.',
  },
  {
    qCs: 'Proč zrovna ty?',
    qEn: 'Why you?',
    aCs: 'Protože nespojuji jen teorii a data, ale reálnou zkušenost s vrcholovým výkonem. Jsem dvojnásobný olympionik, strength & conditioning coach s fyzio backgroundem a roky praxe s lidmi. BioStrategy jsem vytvořil proto, aby lidé mimo vrcholový sport měli přístup ke strukturovanému vedení, které kombinuje data, trénink, regeneraci a lidský dohled. Dvě olympiády se sluchovým handicapem. Fyzioterapie. Certifikovaný S&C coach. A vlastní platforma od nuly. Nekopíruji - tvořím.',
    aEn: "Because I don't just combine theory and data - I bring real experience with elite performance. I'm a two-time Olympian, strength & conditioning coach with a physiotherapy background and years of practice with people. I built BioStrategy so that people outside elite sport could access structured coaching that combines data, training, recovery and human oversight. Two Olympics with a hearing impairment. Physiotherapy. Certified S&C coach. A platform built from scratch. I don't copy - I create.",
  },
  {
    qCs: 'Nechceš rovnou skočit do plného systému?',
    qEn: 'Not ready to jump into the full system?',
    aCs: 'Začni osobním tréninkem. Trénujeme osobně, bez technologie, bez závazku. Napiš mi na jakub.nosek@biostrategy.co',
    aEn: 'Start with personal training. We train in person, no technology, no commitment. Write me at jakub.nosek@biostrategy.co',
  },
]

export default function FAQ() {
  const { t } = useLang()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" style={{ padding: '110px 0', background: '#0f1f38' }}>
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
                    color: open === i ? '#e8be6a' : '#ffffff',
                    fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 700,
                    textAlign: 'left', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                    transition: 'color 0.2s',
                  }}
                >
                  <span>{t(faq.qCs, faq.qEn)}</span>
                  <span style={{
                    width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#d4a84b', flexShrink: 0, fontSize: 20, fontWeight: 300,
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
