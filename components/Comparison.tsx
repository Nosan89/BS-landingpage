'use client'

import { useLang } from './LangContext'
import ScrollReveal from './ScrollReveal'

const rows: Array<{
  cs: string; en: string;
  bad: string | null; good: string | null;
  badCs?: string; badEn?: string; goodCs?: string; goodEn?: string;
}> = [
  { cs: 'Vlastní platforma', en: 'Custom platform', bad: null, good: null },
  { cs: 'Wearable monitoring', en: 'Wearable monitoring', bad: null, good: null },
  { cs: 'Krevní markery', en: 'Blood biomarkers', bad: null, good: null },
  { cs: 'CGM monitoring', en: 'CGM monitoring', bad: null, good: null },
  { cs: 'DEXA scan', en: 'DEXA scan', bad: null, good: null },
  { cs: 'Health protokoly', en: 'Health protocols', bad: null, good: null },
  { cs: 'Longevity přístup', en: 'Longevity approach', bad: null, good: null, badCs: 'Někdy', badEn: 'Sometimes', goodCs: 'Vždy', goodEn: 'Always' },
  { cs: 'Data-driven rozhodování', en: 'Data-driven decisions', bad: null, good: null, badCs: 'Pocity', badEn: 'Feelings', goodCs: 'Čísla', goodEn: 'Numbers' },
]

export default function Comparison() {
  const { t } = useLang()

  const renderCell = (row: typeof rows[0], side: 'bad' | 'good') => {
    const textKey = side === 'bad' ? { cs: row.badCs, en: row.badEn } : { cs: row.goodCs, en: row.goodEn }
    if (textKey.cs) {
      return <span>{t(textKey.cs, textKey.en ?? textKey.cs)}</span>
    }
    if (side === 'bad') {
      return <span className="comp-x">✕</span>
    }
    return <span className="comp-check">✓</span>
  }

  return (
    <section id="comparison" style={{ padding: '110px 0', background: '#0a1628', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <ScrollReveal>
          <div className="section-label" style={{ justifyContent: 'center' }}>{t('Rozdíl', 'The Difference')}</div>
          <h2
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,4.5vw,60px)', lineHeight: 1, letterSpacing: 1 }}
            dangerouslySetInnerHTML={{ __html: t('PROČ DATA,<br>NE DOJMY', 'WHY DATA,<br>NOT GUESSWORK') }}
          />
        </ScrollReveal>

        <ScrollReveal delay="d1">
          <div className="comp-table" style={{ maxWidth: 900, margin: '60px auto 0', border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
            {/* Header — display:contents so cells join the parent grid */}
            <div style={{ display: 'contents' }}>
              <div style={{ padding: '20px 24px', fontFamily: 'var(--font-display)', fontSize: 18, letterSpacing: 1 }} />
              <div style={{ padding: '20px 24px', fontFamily: 'var(--font-display)', fontSize: 18, letterSpacing: 1, textAlign: 'center', background: 'rgba(239,68,68,0.06)', color: '#94a3b8' }}>
                {t('BĚŽNÝ TRENÉR', 'TYPICAL COACH')}
              </div>
              <div style={{ padding: '20px 24px', fontFamily: 'var(--font-display)', fontSize: 18, letterSpacing: 1, textAlign: 'center', background: 'var(--emerald-glow)', color: '#10b981' }}>
                BioStrategy
              </div>
            </div>

            {rows.map((row, i) => (
              <div key={i} style={{ display: 'contents' }}>
                <div className="comp-label-cell" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                  {t(row.cs, row.en)}
                </div>
                <div style={{ padding: '16px 12px', fontSize: 14, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', background: 'rgba(239,68,68,0.02)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                  {renderCell(row, 'bad')}
                </div>
                <div style={{ padding: '16px 12px', fontSize: 14, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399', background: 'rgba(16,185,129,0.03)', fontWeight: 600, borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                  {renderCell(row, 'good')}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <style>{`
          .comp-table {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .comp-label-cell {
            padding: 16px 24px;
            font-size: 14px;
            font-weight: 600;
            color: #cbd5e1;
            display: flex;
            align-items: center;
          }
          @media (max-width: 640px) {
            .comp-table {
              grid-template-columns: 1.4fr 1fr 1fr;
            }
            .comp-label-cell {
              padding: 12px 10px;
              font-size: 12px;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
