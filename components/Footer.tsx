'use client'

import { useLang } from './LangContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer style={{ padding: '36px 0', borderTop: '1px solid rgba(255,255,255,0.04)', background: '#060e1a' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ fontSize: 12, color: '#475569' }}>
          © 2026 BioStrategy. {t('Všechna práva vyhrazena.', 'All rights reserved.')}
        </div>
        <div style={{ display: 'flex', gap: 20 }}>
          <a href="/ochrana-soukromi" style={{ fontSize: 12, color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#10b981')}
            onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}>
            {t('Ochrana soukromí', 'Privacy')}
          </a>
          <a href="/podminky" style={{ fontSize: 12, color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#10b981')}
            onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}>
            {t('Podmínky', 'Terms')}
          </a>
          <a href="mailto:jakub.nosek@biostrategy.co" style={{ fontSize: 12, color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#10b981')}
            onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}>
            jakub.nosek@biostrategy.co
          </a>
        </div>
      </div>
    </footer>
  )
}
