'use client'

import { useLang } from './LangContext'

const creds = [
  { icon: '🏅', cs: '2× Olympionik', en: '2× Olympian', descCs: 'Bobová dráha', descEn: 'Bobsled' },
  { icon: '🩺', cs: 'Fyzioterapeut (Bc.)', en: 'Physiotherapist (BSc.)', descCs: 'FTVS UK', descEn: 'Charles University' },
  { icon: '💪', cs: 'S&C Coach', en: 'S&C Coach', descCs: 'Certifikovaný', descEn: 'Certified' },
  { icon: '📱', cs: 'Vlastní platforma', en: 'Custom Platform', descCs: 'Postavená od nuly', descEn: 'Built from scratch' },
]

export default function Credentials() {
  const { t } = useLang()

  return (
    <section style={{
      padding: '50px 0',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div className="cred-track">
          {creds.map((c, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: i < creds.length - 1 ? 0 : 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0' }}>
                <div style={{
                  width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--emerald-glow)', border: '1px solid rgba(16,185,129,0.1)',
                  fontSize: 18, flexShrink: 0,
                }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.3 }}>{t(c.cs, c.en)}</div>
                  <div style={{ fontSize: 11, color: '#64748b', letterSpacing: '0.5px' }}>{t(c.descCs, c.descEn)}</div>
                </div>
              </div>
              {i < creds.length - 1 && (
                <div className="cred-divider" style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.06)', margin: '0 20px' }} />
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .cred-track {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        @media (max-width: 640px) {
          .cred-track {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            justify-items: start;
          }
          .cred-divider { display: none !important; }
        }
      `}</style>
    </section>
  )
}
