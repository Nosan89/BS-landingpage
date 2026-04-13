'use client'

import { useLang } from './LangContext'

const SPOTS = process.env.NEXT_PUBLIC_PILOT_SPOTS_REMAINING

export default function AnnouncementBanner() {
  if (!SPOTS) return null

  return <BannerContent spots={SPOTS} />
}

function BannerContent({ spots }: { spots: string }) {
  const { lang } = useLang()

  return (
    <div style={{
      background: '#0f1f38',
      borderBottom: '1px solid #10b981',
      color: '#ffffff',
      textAlign: 'center',
      padding: '8px 24px',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500,
    }}>
      {lang === 'cs' ? (
        <>Prvních 10 klientů vstupuje za <strong style={{ color: '#34d399' }}>pilotních podmínek</strong>. Zbývá <strong style={{ color: '#34d399' }}>{spots} míst</strong>.</>
      ) : (
        <>First 10 clients join under <strong style={{ color: '#34d399' }}>pilot conditions</strong>. <strong style={{ color: '#34d399' }}>{spots} spots</strong> remaining.</>
      )}
    </div>
  )
}
