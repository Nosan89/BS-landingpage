'use client'

import { useEffect, useState } from 'react'
import { useLang } from './LangContext'

const SPOTS = process.env.NEXT_PUBLIC_PILOT_SPOTS_REMAINING

export default function AnnouncementBanner() {
  if (!SPOTS) return null

  return <BannerContent spots={SPOTS} />
}

function BannerContent({ spots }: { spots: string }) {
  const { lang } = useLang()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      top: scrolled ? '56px' : '68px',
      left: 0,
      right: 0,
      zIndex: 50,
      background: '#0f1f38',
      color: '#ffffff',
      textAlign: 'center',
      padding: '8px 24px',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500,
      transition: 'top 0.3s',
    }}>
      {lang === 'cs' ? (
        <>Aktuálně přijímám nové klienty. Zbývá <strong style={{ color: '#34d399' }}>{spots} míst</strong> za pilotní cenu.</>
      ) : (
        <>Now accepting new clients. <strong style={{ color: '#34d399' }}>{spots} spots</strong> left at pilot pricing.</>
      )}
    </div>
  )
}
