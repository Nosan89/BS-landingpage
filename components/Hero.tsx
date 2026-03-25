'use client'

import Image from 'next/image'
import { useLang } from './LangContext'
import { useModal } from './ModalContext'

export default function Hero() {
  const { t } = useLang()
  const { openModal } = useModal()

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        position: 'relative', padding: '140px 0 100px', overflow: 'hidden',
      }}
    >
      {/* Background glows */}
      <div style={{
        position: 'absolute', top: -300, right: -300,
        width: 900, height: 900,
        background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -200, left: -200,
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          {/* Left: text */}
          <div>
            <div className="animate-fadeIn" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px 6px 12px',
              background: 'var(--emerald-glow)', border: '1px solid rgba(16,185,129,0.15)',
              fontSize: 11, fontWeight: 800, letterSpacing: '2.5px',
              textTransform: 'uppercase', color: '#34d399', marginBottom: 28,
            }}>
              <span className="animate-pulse-dot" style={{ width: 6, height: 6, background: '#10b981', borderRadius: '50%', display: 'inline-block' }} />
              {t('Přijímám nové klienty', 'Accepting New Clients')}
            </div>

            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(52px, 6.5vw, 88px)',
              lineHeight: 0.92, letterSpacing: 2, marginBottom: 28,
            }} className="animate-fadeUp">
              {t('TVOJE ZDRAVÍ', 'YOUR HEALTH')}<br />
              {t('NENÍ', 'IS NOT A')}
              <span style={{ color: '#10b981' }}>
                {t(' VEDLEJŠÁK', ' SIDE PROJECT')}
              </span>
            </h1>

            <p className="animate-fadeUp" style={{
              fontSize: 17, lineHeight: 1.8, color: '#cbd5e1',
              maxWidth: 520, marginBottom: 44, animationDelay: '0.15s',
            }}>
              {t(
                'Prémiový health coaching postavený na datech, ne dojmech. Wearables, krevní markery, CGM, DEXA — a trenér, který to celé řídí. Pro ty, kteří odmítají obětovat zdraví za byznys.',
                'Premium health coaching built on data, not guesswork. Wearables, blood markers, CGM, DEXA — and a coach who runs it all. For those who refuse to sacrifice health for business.'
              )}
            </p>

            <div className="animate-fadeUp" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', animationDelay: '0.3s' }}>
              <button onClick={openModal} className="btn-primary">
                <span>{t('Zjisti, jestli je to pro tebe', 'Find Out If You Qualify')}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <a href="#story" className="btn-ghost">
                {t('Můj příběh', 'My Story')}
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div className="animate-fadeIn hero-visual" style={{ animationDelay: '0.2s' }}>
            <div style={{
              position: 'relative', zIndex: 2,
              border: '1px solid rgba(16,185,129,0.1)',
              overflow: 'hidden',
              boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
            }}>
              <Image
                src="/images/profilephoto.PNG"
                alt="Jakub Nosek"
                width={500}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </div>
            {/* Accent border */}
            <div style={{
              position: 'absolute', top: -16, right: -16,
              width: '100%', height: '100%',
              border: '2px solid #10b981', opacity: 0.15,
              pointerEvents: 'none', zIndex: 1,
            }} className="hero-photo-accent" />

            {/* Floating card 1 */}
            <div className="animate-float hero-floating-card" style={{
              position: 'absolute', bottom: 80, left: -50, zIndex: 3,
              background: '#0f1f38', border: '1px solid rgba(16,185,129,0.12)',
              padding: '14px 18px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            }}>
              <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', color: '#10b981', marginBottom: 6 }}>
                Recovery
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, lineHeight: 1 }}>77%</div>
              <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 2 }}>{t('Dnes — Whoop', 'Today — Whoop')}</div>
            </div>

            {/* Floating card 2 */}
            <div className="animate-float-delayed hero-floating-card" style={{
              position: 'absolute', top: 40, right: -40, zIndex: 3,
              background: '#0f1f38', border: '1px solid rgba(16,185,129,0.12)',
              padding: '14px 18px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            }}>
              <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', color: '#10b981', marginBottom: 6 }}>
                ApoB
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, lineHeight: 1 }}>1.02</div>
              <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 2 }}>g/L — optimal</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }
        .hero-visual { position: relative; }
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr; gap: 48px; }
          .hero-visual { max-width: 420px; }
        }
        @media (max-width: 640px) {
          .hero-floating-card { display: none !important; }
          .hero-photo-accent { display: none !important; }
          .hero-visual { max-width: 100%; }
        }
      `}</style>
    </section>
  )
}
