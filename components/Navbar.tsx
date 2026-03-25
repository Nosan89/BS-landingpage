'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useLang } from './LangContext'
import { useModal } from './ModalContext'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const { openModal } = useModal()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? '12px 0' : '18px 0',
        background: scrolled ? 'rgba(6,14,26,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(16,185,129,0.08)' : 'none',
        transition: 'all 0.3s',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <Image src="/images/logo_transparent.png" alt="BioStrategy" height={32} width={140} style={{ height: 32, width: 'auto' }} />
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            display: 'flex', background: '#0f1f38',
            border: '1px solid rgba(255,255,255,0.06)', borderRadius: 6, overflow: 'hidden',
          }}>
            {(['cs', 'en'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  padding: '6px 14px',
                  fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700,
                  letterSpacing: '1.5px', textTransform: 'uppercase',
                  color: lang === l ? '#ffffff' : '#64748b',
                  background: lang === l ? '#059669' : 'transparent',
                  border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            onClick={openModal}
            className="nav-cta-btn"
            style={{
              padding: '10px 28px', background: '#10b981', color: '#060e1a',
              fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 800,
              letterSpacing: '0.5px', border: 'none', cursor: 'pointer', textTransform: 'uppercase',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = '#34d399'
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(16,185,129,0.3)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = '#10b981'
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
            }}
          >
            {t('Zjistit více', 'Learn More')}
          </button>
        </div>
      </div>
    </nav>
  )
}
