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
          style={{
            background: '#10b981',
            color: '#060e1a',
            border: 'none',
            padding: '14px 32px',
            fontSize: '0.95rem',
            fontFamily: 'var(--font-bebas)',
            letterSpacing: '0.08em',
            cursor: 'pointer',
            borderRadius: 2,
            transition: 'background 0.2s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#34d399')}
          onMouseLeave={e => (e.currentTarget.style.background = '#10b981')}
        >
          {t(cs, en)}
        </button>
      </div>
    </div>
  )
}
