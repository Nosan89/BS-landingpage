'use client'

import { useLang } from './LangContext'
import { useModal } from './ModalContext'

interface InlineCTAProps {
  cs: string
  en: string
}

export default function InlineCTA({ cs, en }: InlineCTAProps) {
  const { t } = useLang()
  const { openModal } = useModal()

  return (
    <div style={{
      borderTop: '1px solid rgba(16,185,129,0.2)',
      padding: '48px 24px',
    }}>
      <div style={{
        maxWidth: 896,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
        flexWrap: 'wrap',
      }}>
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
          {t(cs, en)}
        </button>
      </div>
    </div>
  )
}
