import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Obchodní podmínky - BioStrategy',
}

export default function Podminky() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 120, paddingBottom: 80, minHeight: '100vh' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            fontSize: 11, fontWeight: 800, letterSpacing: '3.5px',
            textTransform: 'uppercase', color: '#10b981', marginBottom: 20,
          }}>
            <span style={{ width: 40, height: 2, background: '#10b981', display: 'inline-block' }} />
            Legal
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,4.5vw,56px)', lineHeight: 1, letterSpacing: 1, marginBottom: 40 }}>
            OBCHODNÍ PODMÍNKY
          </h1>

          <div style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: 15 }}>
            <p style={{ marginBottom: 24, padding: 24, background: '#0f1f38', border: '1px solid rgba(16,185,129,0.1)', borderLeft: '3px solid #10b981' }}>
              <strong style={{ color: '#34d399' }}>Placeholder - obsah dodá právnička.</strong><br />
              Tento text bude nahrazen finálními obchodními podmínkami po jejich zpracování.
            </p>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, letterSpacing: 1, color: '#ffffff', marginBottom: 12, marginTop: 32 }}>1. ÚVODNÍ USTANOVENÍ</h2>
            <p style={{ marginBottom: 16 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, letterSpacing: 1, color: '#ffffff', marginBottom: 12, marginTop: 32 }}>2. PŘEDMĚT SMLOUVY</h2>
            <p style={{ marginBottom: 16 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, letterSpacing: 1, color: '#ffffff', marginBottom: 12, marginTop: 32 }}>3. CENA A PLATEBNÍ PODMÍNKY</h2>
            <p style={{ marginBottom: 16 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, letterSpacing: 1, color: '#ffffff', marginBottom: 12, marginTop: 32 }}>4. PRÁVA A POVINNOSTI STRAN</h2>
            <p style={{ marginBottom: 16 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, letterSpacing: 1, color: '#ffffff', marginBottom: 12, marginTop: 32 }}>5. ZÁVĚREČNÁ USTANOVENÍ</h2>
            <p style={{ marginBottom: 16 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <p style={{ marginTop: 40, fontSize: 13, color: '#475569' }}>
              Kontakt: <a href="mailto:jakub.nosek@biostrategy.co" style={{ color: '#10b981', textDecoration: 'none' }}>jakub.nosek@biostrategy.co</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
